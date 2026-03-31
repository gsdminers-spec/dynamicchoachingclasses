"use client";

import { motion } from "framer-motion";
import { notices } from "@/data/mockData";
import { Bell, Calendar, ChevronRight } from "lucide-react";

export default function NoticesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-6 border border-blue-200/50"
          >
             <Bell className="w-4 h-4" />
             Announcements
          </motion.div>
          <motion.h1
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6"
          >
             Notice <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-indigo-500">Board</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Stay updated with the latest news, schedules, and important announcements from the administration.
          </motion.p>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-16 md:py-24 container max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {notices.map((notice, i) => {
            const dateObj = new Date(notice.date);
            const day = dateObj.getDate().toString().padStart(2, '0');
            const month = dateObj.toLocaleString('default', { month: 'short' });
            
            return (
              <motion.div
                 key={notice.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 group hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden"
              >
                 {/* Modern Date Badge */}
                 <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 sm:w-32 flex flex-col justify-center items-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors duration-300">
                    <Calendar className="w-5 h-5 text-blue-400 mb-2 group-hover:text-blue-200 transition-colors" />
                    <div className="text-3xl font-bold text-brand-primary tracking-tight leading-none mb-1 group-hover:text-white transition-colors">
                       {day}
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 group-hover:text-blue-100 transition-colors">
                       {month}
                    </div>
                 </div>

                 {/* Notice Content */}
                 <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-brand-primary transition-colors">
                       {notice.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                       {notice.description}
                    </p>
                    
                    <div className="mt-auto">
                       <button className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-blue-800 transition-colors">
                          Read more <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </main>
  );
}
