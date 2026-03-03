"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  bgColor?: string;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  bgColor = "bg-white",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-[90vh] md:min-h-screen flex items-center ${bgColor} ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-[#2C3E50]"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`text-lg md:text-xl max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-gray-600"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
