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
    <section className="bg-brand-red py-16 lg:py-24 border-y-8 border-brand-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x-4 divide-brand-dark/20 text-center text-white">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "backOut" }}
              className="flex flex-col items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-5xl md:text-7xl font-black uppercase drop-shadow-[4px_4px_0px_#0A0A0A] tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold tracking-[0.2em] text-black">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
