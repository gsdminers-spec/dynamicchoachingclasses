"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden">
      {/* Background Image with Hard Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/classes_full.jpeg"
          alt="NEET Coaching Classes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-2 bg-brand-red text-white uppercase tracking-widest font-bold text-sm"
          >
            Powering Next-Gen Medics
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter"
          >
            The <span className="text-brand-gold">Scholastic</span> Powerhouse
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl font-medium"
          >
            Architectural brutalism meets high-velocity education. Prepare for NEET with absolute precision, rigorous discipline, and unmatched expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#courses"
              className="px-8 py-4 bg-brand-gold text-brand-dark font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 transform active:scale-95"
            >
              Explore Courses
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-brand-red text-brand-red font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all duration-300 transform active:scale-95"
            >
              Join the Elite
            </a>
          </motion.div>
        </div>

        {/* Brutalist Abstract Decoration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative h-full min-h-[500px]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue mix-blend-screen opacity-50 blur-3xl" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red animate-pulse" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
          <div className="absolute bottom-12 left-12 w-48 h-48 bg-brand-gold opacity-80" style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }} />
        </motion.div>
      </div>
    </section>
  );
}
