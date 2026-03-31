"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden pt-20">
      {/* Soft Gradient Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] mix-blend-multiply opacity-60" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12">
        <div className="space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-brand-primary font-bold text-xs md:text-sm uppercase tracking-wider"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
            </span>
            Powering Next-Gen Achievers
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
          >
            Empowering Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">
              Academic Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            Experience premium coaching tailored for NEET and board exams. Discover a welcoming environment, rigorous curriculum, and expert faculty dedicated to your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="/courses"
              className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold tracking-wide hover:shadow-lg hover:shadow-brand-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Courses
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold tracking-wide hover:shadow-md hover:-translate-y-1 hover:border-slate-300 hover:text-brand-primary transition-all duration-300"
            >
              Book a Session
            </Link>
          </motion.div>
        </div>

        {/* Premium Abstract Hero Image Layout */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: -2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full min-h-[400px] lg:min-h-[600px] w-full flex items-center justify-center p-4 lg:p-8"
        >
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Soft decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-emerald-50 rounded-[40px] rotate-3 scale-105" />
            
            <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="/images/classes_full.jpeg"
                alt="Students studying collaboratively"
                fill
                className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </div>

            {/* Floating Glassmorphism Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 lg:-left-12 bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-2xl font-bold">
                ✓
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Verified</p>
                <p className="text-xl font-extrabold text-slate-900">70% Success Rate</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
