"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Rajivnagar, Mysore",
    rating: 5,
    text: "Dr. Syeda is incredibly gentle and professional. My root canal treatment was completely painless! The clinic is very clean and the staff is friendly. Highly recommend Olive Dental Care.",
    treatment: "Root Canal Treatment",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    location: "Mysore City",
    rating: 5,
    text: "Best dental clinic in Mysore! I got my braces here and the results are amazing. The doctor takes time to explain everything and makes you feel comfortable throughout the treatment.",
    treatment: "Orthodontics",
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Kuvempunagar, Mysore",
    rating: 5,
    text: "I was nervous about my dental implant, but Dr. Syeda made the whole experience smooth and stress-free. The clinic has modern equipment and the follow-up care was excellent.",
    treatment: "Dental Implants",
  },
  {
    id: 4,
    name: "Venkatesh R.",
    location: "Hebbal, Mysore",
    rating: 5,
    text: "My children love coming here! The pediatric dental care is wonderful - very patient and caring with kids. The waiting area is comfortable and the clinic is very hygienic.",
    treatment: "Pediatric Care",
  },
  {
    id: 5,
    name: "Sneha Gowda",
    location: "Saraswathipuram, Mysore",
    rating: 5,
    text: "Had my teeth whitening done here and the results exceeded my expectations. The doctor is very skilled and the prices are reasonable. Will definitely come back for regular checkups.",
    treatment: "Cosmetic Dentistry",
  },
  {
    id: 6,
    name: "Mohammed Ismail",
    location: "Nazarbad, Mysore",
    rating: 5,
    text: "Excellent dental care at affordable prices. The clinic is well-maintained and follows strict hygiene protocols. Dr. Syeda's expertise is evident in her work. Very satisfied!",
    treatment: "General Dentistry",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-[#7FA99B]/30" />
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
        "{testimonial.text}"
      </p>

      {/* Treatment Badge */}
      <div className="mb-4">
        <span className="inline-block bg-[#7FA99B]/10 text-[#5D8A73] text-xs font-medium px-3 py-1 rounded-full">
          {testimonial.treatment}
        </span>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7FA99B] to-[#5D8A73] flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-[#2C3E50] text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-500 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real patients who have experienced our gentle and
            professional dental care
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-[#2C3E50] rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 5000, label: "Happy Patients", suffix: "+" },
              { value: 15, label: "Years Experience", suffix: "+" },
              { value: 98, label: "Satisfaction Rate", suffix: "%" },
              { value: 20, label: "Treatments Offered", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#7FA99B] mb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </motion.span>
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
