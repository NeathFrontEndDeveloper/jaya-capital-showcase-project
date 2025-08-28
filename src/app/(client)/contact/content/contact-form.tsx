"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TEXTS } from "@/constants/color";

const contactSchema = z.object({
  full_name: z.string().nonempty({ message: "Full Name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email("Please enter a valid email address"),
  phone_number: z
    .string()
    .nonempty({ message: "Please enter your Phone Number" }),
  message: z
    .string()
    .nonempty({ message: "Message is required" })
    .max(1000, "Message cannot exceed 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!", {
        description: `Thank you, ${data.full_name}! We'll get back to you soon.`,
      });

      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message", {
        description:
          "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`w-full space-y-4 ${TEXTS}`}
          noValidate
        >
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-md font-bold ${TEXTS}`}>
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-auto h-14 border border-[#484747] bg-[#F9F9F9]"
                    placeholder="Enter your full name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-md font-bold ${TEXTS}`}>
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-auto h-14 border border-[#484747] bg-[#F9F9F9]"
                    type="email"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-md font-bold ${TEXTS}`}>
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-auto h-14 border border-[#484747] bg-[#F9F9F9]"
                    type="text"
                    placeholder="Enter your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`text-md font-bold ${TEXTS}`}>
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="w-auto h-35 border border-[#484747] bg-[#F9F9F9]"
                    placeholder="Write your message here..."
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <div className="flex justify-between items-center">
                  <FormMessage />
                  <span className="text-sm text-gray-500">
                    {field.value.length}/1000
                  </span>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full flex items-center py-6 justify-center gap-2 rounded-sm bg-[#006400] text-white border border-transparent 
             hover:bg-transparent hover:border-[#006400] hover:text-[#006400] 
             transition-all duration-300 ease-in-out cursor-pointer"
            disabled={isSubmitting}
          >
            <span className="font-medium">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
