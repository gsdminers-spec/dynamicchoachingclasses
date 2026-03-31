"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with soft gradients */}
      <div className="absolute inset-0 bg-brand-primary z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 z-0" />
      
      {/* Abstract light effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-accent/30 rounded-full blur-[100px] z-0" />

      <div className="container max-w-4xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 shadow-2xl">
            <Sparkles className="w-8 h-8 text-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Ready to secure your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-200">
              Future Success?
            </span>
          </h2>
          <p className="text-white/80 font-medium text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            The next batch opens soon. Seats are highly competitive. Enroll now to guarantee your spot among the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-brand-primary font-extrabold rounded-2xl hover:bg-slate-50 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto tracking-wide"
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white/30 text-white font-extrabold rounded-2xl hover:bg-white/10 hover:border-white/50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto tracking-wide shadow-none"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
