"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { BookingForm } from "@/components/ui/BookingForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#7FA99B]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#7FA99B]/5 blur-3xl" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#7FA99B]/20 text-[#7FA99B] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CalendarCheck className="w-4 h-4" />
            Easy Online Booking
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Fill out the form below and our team will get back to you to confirm
            your appointment with Dr. Syeda Ummul Khair.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <BookingForm />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-white/50 text-sm">
            Prefer to call? Reach us at{" "}
            <span className="text-[#7FA99B]">+91 XXXXX XXXXX</span>
          </p>
          <p className="text-white/40 text-xs mt-2">
            Morning: 10 AM - 2 PM | Evening: 5 PM - 9 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
