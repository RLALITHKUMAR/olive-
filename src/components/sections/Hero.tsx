"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-[#7FA99B]/10 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#7FA99B] blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#2C3E50] blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#7FA99B]/10 text-[#5D8A73] px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Stethoscope className="w-4 h-4" />
              Multispeciality Dental Clinic
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C3E50] leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              OLIVE
              <br />
              <span className="text-[#7FA99B]">DENTAL CARE</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Professional dental care in Rajivnagar, Mysore. Experience gentle
              treatment with state-of-the-art technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#7FA99B] hover:bg-[#5D8A73] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#services")}
                className="px-8 py-6 text-lg rounded-xl border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                  alt="Modern Dental Clinic Interior"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#7FA99B] flex items-center justify-center">
                    <span className="text-white text-xl font-bold">15+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Years Experience</p>
                    <p className="text-gray-500 text-sm">Trusted Dental Care</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7FA99B]/20 rounded-full blur-xl" />
              <div className="absolute bottom-20 -right-8 w-32 h-32 bg-[#2C3E50]/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#7FA99B] flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#7FA99B] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
