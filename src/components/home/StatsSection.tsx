"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Active Students", value: "2M+" },
  { id: 2, label: "Verified Results", value: "70%" },
  { id: 3, label: "Elite Faculty", value: "50+" },
  { id: 4, label: "Academic Support", value: "24/7" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16 lg:py-20 relative z-20 -mt-8 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-brand-primary/5 border border-slate-100 p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-8 md:gap-12 divide-x-0 md:divide-x divide-slate-100 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center justify-center p-2 sm:p-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-br from-brand-primary to-blue-400">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
