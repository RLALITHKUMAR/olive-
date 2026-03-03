"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DoctorProfile } from "@/components/sections/DoctorProfile";
import { Facilities } from "@/components/sections/Facilities";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationInfo } from "@/components/sections/LocationInfo";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <DoctorProfile />
      <Facilities />
      <Services />
      <Testimonials />
      <LocationInfo />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
