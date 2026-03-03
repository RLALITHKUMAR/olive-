"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Calendar, User, Phone, Stethoscope, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\+91[6-9]\d{9}$/, "Please enter a valid Indian phone number (+91XXXXXXXXXX)"),
  date: z.string().min(1, "Please select a date"),
  treatment: z.string().min(1, "Please select a treatment"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const treatments = [
  "Root Canal Treatment",
  "Orthodontics (Braces)",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Pediatric Care",
  "General Hygiene",
  "Teeth Whitening",
  "Dental Checkup",
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      phone: "+91",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Appointment Request Sent to Dr. Syeda", {
      description: "We will contact you shortly to confirm your appointment.",
    });
    
    reset();
    setValue("phone", "+91");
    setIsSubmitting(false);
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <User className="w-4 h-4 text-[#7FA99B]" />
          Full Name
        </label>
        <Input
          {...register("name")}
          placeholder="Enter your full name"
          className="h-12 border-gray-200 focus:border-[#7FA99B] focus:ring-[#7FA99B]"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#7FA99B]" />
          Phone Number
        </label>
        <Input
          {...register("phone")}
          placeholder="+91 XXXXX XXXXX"
          className="h-12 border-gray-200 focus:border-[#7FA99B] focus:ring-[#7FA99B]"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Date Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#7FA99B]" />
          Preferred Date
        </label>
        <Input
          type="date"
          min={today}
          {...register("date")}
          className="h-12 border-gray-200 focus:border-[#7FA99B] focus:ring-[#7FA99B]"
        />
        {errors.date && (
          <p className="text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      {/* Treatment Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-[#7FA99B]" />
          Treatment Type
        </label>
        <Select onValueChange={(value) => setValue("treatment", value)}>
          <SelectTrigger className="h-12 border-gray-200 focus:border-[#7FA99B] focus:ring-[#7FA99B]">
            <SelectValue placeholder="Select treatment type" />
          </SelectTrigger>
          <SelectContent>
            {treatments.map((treatment) => (
              <SelectItem key={treatment} value={treatment}>
                {treatment}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.treatment && (
          <p className="text-sm text-red-500">{errors.treatment.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-[#7FA99B] hover:bg-[#5D8A73] text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending Request...
          </>
        ) : (
          "Book Appointment"
        )}
      </Button>
    </motion.form>
  );
}
