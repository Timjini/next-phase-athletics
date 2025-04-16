"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function EmailSubscriptionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // API CALL HERE
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show success toast
      toast(`Thank you for subscribing! ${values.email}`)

      // Reset form
      form.reset()
    } catch (error) {
      toast.error("Subscription failed", {
        description: `Please try again later. ${error}`,
        duration: 5000,
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-md">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="rounded-r-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    {...field}
                  />
                  <Button
                    type="submit"
                    className="rounded-l-none bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}