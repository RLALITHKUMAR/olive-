"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Microscope, Sofa } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionWrapper";
import { FacilityCard } from "@/components/ui/ServiceCard";

const facilities = [
  {
    title: "Advanced Sterilization",
    description:
      "State-of-the-art autoclave sterilization ensures complete safety. All instruments are thoroughly sanitized for your protection.",
    icon: Shield,
  },
  {
    title: "Latest Diagnostics",
    description:
      "Digital X-rays and intraoral cameras provide accurate diagnoses with minimal radiation exposure.",
    icon: Microscope,
  },
  {
    title: "Comfortable Lounge",
    description:
      "Relax in our modern waiting area with comfortable seating, calming ambiance, and patient-centric amenities.",
    icon: Sofa,
  },
];

export function Facilities() {
  return (
    <section
      id="facilities"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=1080&fit=crop"
          alt="Clinic Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <SectionTitle
          title="Our Facilities"
          subtitle="Modern equipment meets comforting environment"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.title}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-[#7FA99B]/10 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 text-[#7FA99B]" />
            <span className="text-[#2C3E50] font-medium">
              100% Sterilized Equipment • Single-Use Materials • Safe Environment
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
