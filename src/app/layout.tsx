import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic Coaching Classes | NEET Preparation",
  description: "Futuristic NEET coaching classes by Imran Ali Sir & Team. Excellence and dedication in Physics, Chemistry, Maths, and Biology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased selection:bg-brand-red selection:text-white flex flex-col min-h-screen relative">
        <Navbar />
        <div className="flex-1 pt-20">
          {children}
        </div>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
