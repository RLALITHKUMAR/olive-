"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Smile,
  Sparkles,
  CircleDot,
  Baby,
  Droplets,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Root Canal Treatment",
    description:
      "Painless root canal procedures using advanced rotary instruments. Save your natural tooth with minimal discomfort.",
    icon: Activity,
  },
  {
    title: "Orthodontics (Braces)",
    description:
      "Straighten your teeth with traditional braces or modern clear aligners. Achieve the perfect smile you deserve.",
    icon: Smile,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Teeth whitening, veneers, and smile makeovers. Transform your appearance with aesthetic dental solutions.",
    icon: Sparkles,
  },
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement with titanium implants. Restore function and confidence with natural-looking results.",
    icon: CircleDot,
  },
  {
    title: "Pediatric Care",
    description:
      "Gentle dental care for children in a friendly environment. Building healthy smiles from an early age.",
    icon: Baby,
  },
  {
    title: "General Hygiene",
    description:
      "Professional cleanings, fillings, and preventive care. Maintain optimal oral health with regular checkups.",
    icon: Droplets,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive dental care for the whole family"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            Not sure which treatment you need?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#7FA99B] hover:text-[#5D8A73] font-medium transition-colors"
          >
            Book a consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
