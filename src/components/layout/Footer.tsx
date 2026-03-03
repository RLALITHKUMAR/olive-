"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Heart } from "lucide-react";
import { OliveLogoWithText } from "@/components/ui/OliveLogo";

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <OliveLogoWithText />
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Multispeciality Dental Clinic providing comprehensive dental care
              with a gentle touch and professional expertise.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Timings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#7FA99B]" />
              Clinic Timings
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Morning</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Evening</span>
                <span>5:00 PM - 9:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#7FA99B] mt-0.5 shrink-0" />
                <span>
                  #541, Opp Eastern Supermarket, Al-Badar Circle, Rajivnagar 2nd
                  Stage, Mysore - 570019
                </span>
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 text-[#7FA99B]" />
                <span>+91 XXXXX XXXXX</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Olive Dental Care. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#7FA99B]" /> in Mysore
          </p>
        </div>
      </div>
    </footer>
  );
}
