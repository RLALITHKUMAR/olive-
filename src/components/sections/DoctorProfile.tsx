"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionWrapper";

export function DoctorProfile() {
  return (
    <section
      id="doctor"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#7FA99B]/20 blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-[#7FA99B]/10 blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <SectionTitle
          title="Meet Your Doctor"
          subtitle="Expert care with a gentle touch"
          light
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Doctor Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                  alt="Dr. Syeda Ummul Khair"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/60 to-transparent" />
              </div>

              {/* Registration Badge */}
              <motion.div
                className="absolute -right-4 top-8 bg-[#7FA99B] text-white px-6 py-4 rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-xs opacity-80">Registration No.</p>
                <p className="text-lg font-bold">28355A</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Doctor Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
              Dr. Syeda Ummul Khair
            </h3>
            <p className="text-[#7FA99B] text-xl font-medium mb-8">
              Dental Surgeon
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              With over 15 years of dedicated practice, Dr. Syeda Ummul Khair
              brings a perfect blend of clinical expertise and compassionate care
              to every patient. Her philosophy centers on providing painless,
              comfortable treatments while ensuring the highest standards of
              dental hygiene and patient safety.
            </p>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Award, label: "Registered Practitioner", value: "28355A" },
                { icon: Users, label: "Happy Patients", value: "5000+" },
                { icon: Heart, label: "Gentle Care", value: "Painless" },
                { icon: Sparkles, label: "Experience", value: "15+ Years" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-[#7FA99B] mb-2" />
                  <p className="text-white/60 text-sm">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#7FA99B] pl-6 italic text-white/70">
              "Every smile tells a story, and I'm here to help make yours the
              best it can be."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
