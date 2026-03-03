"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationInfo() {
  return (
    <section
      id="location"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            Visit Us
          </h2>
          <p className="text-gray-600 text-lg">
            Conveniently located in the heart of Rajivnagar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Address & Timings */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7FA99B]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#7FA99B]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#2C3E50] mb-2">
                    Our Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    #541, Opp Eastern Supermarket,
                    <br />
                    Al-Badar Circle, Rajivnagar 2nd Stage,
                    <br />
                    Mysore - 570019
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="bg-gradient-to-br from-[#7FA99B] to-[#5D8A73] rounded-2xl p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Morning</span>
                </div>
                <p className="text-2xl font-bold">10:00 AM - 2:00 PM</p>
              </motion.div>

              <motion.div
                className="bg-[#2C3E50] rounded-2xl p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Evening</span>
                </div>
                <p className="text-2xl font-bold">5:00 PM - 9:00 PM</p>
              </motion.div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7FA99B]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#7FA99B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us at</p>
                  <p className="text-xl font-semibold text-[#2C3E50]">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <Button
              asChild
              className="w-full bg-[#7FA99B] hover:bg-[#5D8A73] text-white py-6 rounded-xl"
            >
              <a
                href="https://maps.google.com/?q=Al+Badar+Circle+Mysore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            className="h-[500px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7564583767397!2d76.6276!3d12.3086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d5a5a5d%3A0x8e7f2c4f5a6b7c8d!2sAl%20Badar%20Circle%2C%20Mysore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Olive Dental Care Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
