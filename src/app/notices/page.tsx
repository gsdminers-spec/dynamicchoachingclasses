"use client";

import { motion } from "framer-motion";
import { notices } from "@/data/mockData";
import { AlertCircle } from "lucide-react";

export default function NoticesPage() {
  return (
    <main className="min-h-screen bg-zinc-100 pt-24 pb-16 overflow-hidden">
      <section className="bg-brand-blue py-20 relative border-b-8 border-brand-dark">
        <div className="absolute inset-0 bg-[url('/images/classes_full.jpeg')] bg-cover bg-center opacity-10 mix-blend-color-burn" />
        <div className="container relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="inline-flex items-center gap-2 px-4 py-2 bg-brand-dark text-white uppercase tracking-widest font-black text-sm mb-6"
          >
             <AlertCircle className="w-4 h-4 text-brand-red" />
             Information Board
          </motion.div>
          <motion.h1
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
             Official <span className="text-brand-dark">Notices</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-20 container max-w-4xl mx-auto">
        <div className="space-y-8">
          {notices.map((notice, i) => (
             <motion.div
                key={notice.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border-[6px] border-brand-dark flex flex-col md:flex-row group hover:shadow-[12px_12px_0px_0px_#D32F2F] transition-all duration-300"
             >
                {/* Date Block */}
                <div className="bg-brand-dark text-white p-6 md:w-48 flex flex-col justify-center items-center shrink-0 border-b-4 md:border-b-0 md:border-r-[6px] border-brand-dark group-hover:bg-brand-red transition-colors duration-300">
                   <div className="text-4xl font-black tracking-tighter leading-none mb-1">
                      {new Date(notice.date).getDate().toString().padStart(2, '0')}
                   </div>
                   <div className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                      {new Date(notice.date).toLocaleString('default', { month: 'short' })} '{new Date(notice.date).getFullYear().toString().slice(-2)}
                   </div>
                </div>

                {/* Notice Content */}
                <div className="p-8 flex-grow">
                   <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-4">
                      {notice.title}
                   </h3>
                   <p className="text-gray-600 font-medium text-lg leading-relaxed">
                      {notice.description}
                   </p>
                </div>
             </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
