"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { campOptions } from "../lib/constants"
import { formSchema, FormValues } from "../types/form";
import { createCheckoutSession } from "../lib/stripe";
import { loadStripe } from "@stripe/stripe-js";




export function CampForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      camp: "",
      athleteName: "",
      guardianName: "",
      email: "",
      phone: "",
      address: ""
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("data", data)
    try {
      const { sessionId } = await createCheckoutSession(data);
  
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (err) {
      console.error("Stripe Checkout error:", err);
      toast.error("Something went wrong during payment.");
    }
  };
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-6">
        <FormField
          control={form.control}
          name="camp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Camp</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  autoFocus
                  className="grid gap-2"
                >
                  {campOptions.map((camp, index) => (
                    <FormItem
                      key={index}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={camp} />
                      </FormControl>
                      <FormLabel className="font-normal">{camp}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="athleteName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Athlete&apos;s Name</FormLabel>
                <FormControl>
                  <Input placeholder="Athlete's Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guardianName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent/Guardian Name</FormLabel>
                <FormControl>
                  <Input placeholder="Parent/Guardian Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="1234 Street Name, City, State" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-lg font-semibold">Camp Fee: $550.00</div>
        <p className="text-sm text-muted-foreground">
          Includes a t-shirt, water bottle, and bag.
        </p>

        <Button 
          type="submit" 
          className="w-full bg-blue-950 text-white hover:bg-blue-900"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Processing..." : "Submit Registration"}
        </Button>
      </form>
    </Form>
  );
}