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
import { formSchema, FormValues } from "../types/form";
import { createCheckoutSession } from "../lib/stripe";
import { loadStripe } from "@stripe/stripe-js";
import AutoCompleteInput from "../components/inputs/AutoCompleteInput";
import { CampProgram } from "../types/camp";
import { formatSession } from "../lib/dateUtils";
import { useState } from "react";
import { formatAddress } from "../lib/formatAddress";

interface CampFormProps {
  campProgram: CampProgram;
}

export function CampForm({ campProgram }: CampFormProps) {
  const [selectedCampPrice, setSelectedCampPrice] = useState(0);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      camp: "",
      athleteName: "",
      guardianName: "",
      email: "",
      phone: "",
      address: {
        address: "",
        lat: null,
        lng: null,
      },
      // acceptedTerms: false,
    },
  });
  console.log("price",selectedCampPrice)
  const onSubmit = async (data: FormValues) => {
    try {
      const { sessionId } = await createCheckoutSession({
        ...data,
        price: selectedCampPrice,
      });

      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId  });
      }
    } catch (err) {
      console.error("Stripe Checkout error:", err);
      toast.error("Something went wrong during payment.");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-6">
        <FormField
          control={form.control}
          name="camp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl mb-4 font-bold">
                Available Dates:
              </FormLabel>
              <FormControl>
              <RadioGroup
                  onValueChange={(value) => {
                    field.onChange(value);
                    const selectedCamp = campProgram.sessions.find(
                      (session) => session.label === value
                    );
                    setSelectedCampPrice(selectedCamp?.price || 0);
                  }}
                  defaultValue={field.value}
                  autoFocus
                  className="grid gap-2"
                >
                  {campProgram.sessions.map((camp) => (
                    <FormItem
                      key={camp.id}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={camp.label} />
                      </FormControl>
                      <FormLabel className="font-normal">
                      {formatSession({
                        label: camp.label,
                        startDate: new Date(camp.startDate),
                        endDate: new Date(camp.endDate),
                        period: camp.period,
                      })}
                      </FormLabel>
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
                <AutoCompleteInput
                  placeholder="1234 Street Name, City, State"
                  loadedAlready={true}
                  onPlaceSelected={({ lat, lng, address }) => {
                    const formattedAddress = formatAddress(address);
                    field.onChange({
                      address: formattedAddress,
                      lat,
                      lng,
                    });
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptedTerms"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                  className="w-4 h-4"
                />
              </FormControl>
              <FormLabel className="text-sm">
                I accept the{" "}
                <a href="/terms" className="underline" target="_blank">
                  terms and conditions
                </a>
                .
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-lg font-semibold"></div>
        <p className="text-sm text-muted-foreground"></p>

        <Button
          type="submit"
          className="w-full bg-blue-950 text-white hover:bg-blue-900 cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Processing..."
            : "Submit Registration"}
        </Button>
      </form>
    </Form>
  );
}
