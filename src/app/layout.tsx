import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olive Dental Care | Multispeciality Dental Clinic in Mysore",
  description: "Professional dental care by Dr. Syeda Ummul Khair in Rajivnagar, Mysore. Offering Root Canal Treatment, Orthodontics, Cosmetic Dentistry, Implants & more.",
  keywords: ["Dental Clinic", "Mysore", "Root Canal", "Orthodontics", "Cosmetic Dentistry", "Dental Implants", "Dr. Syeda Ummul Khair"],
  authors: [{ name: "Olive Dental Care" }],
  openGraph: {
    title: "Olive Dental Care - Multispeciality Dental Clinic",
    description: "Professional dental care in Rajivnagar, Mysore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lato.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
