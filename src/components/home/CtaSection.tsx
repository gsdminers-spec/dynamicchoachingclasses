"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-brand-blue py-24 select-none">
      <div className="container max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 lg:p-20 shadow-[16px_16px_0px_0px_#D32F2F] border-[12px] border-brand-dark"
        >
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter mb-6">
            Ready to secure your <span className="text-brand-red underline decoration-8 underline-offset-8">Rank</span>?
          </h2>
          <p className="text-gray-600 font-bold text-xl mb-10 max-w-2xl mx-auto">
            The next batch opens soon. Slots are highly competitive. Enroll now to guarantee your seat among the elite.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-brand-red text-white font-black uppercase tracking-widest hover:bg-brand-dark transition-colors duration-300 w-full sm:w-auto"
            >
              Enroll Now
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border-4 border-brand-dark text-brand-dark font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
