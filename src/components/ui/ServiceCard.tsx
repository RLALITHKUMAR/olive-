"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-[#7FA99B] hover:border-[#7FA99B] hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#7FA99B]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20">
          <Icon className="w-8 h-8 text-[#7FA99B] transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl font-semibold text-[#2C3E50] transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/90">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface FacilityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function FacilityCard({ title, description, icon: Icon, index }: FacilityCardProps) {
  return (
    <motion.div
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7FA99B] to-[#5D8A73] flex items-center justify-center shadow-lg">
          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-[#2C3E50]">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
