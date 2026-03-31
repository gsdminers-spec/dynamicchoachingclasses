"use client";

import { motion } from "framer-motion";
import { courses } from "@/data/mockData";
import { CheckCircle2, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-6 border border-blue-200/50"
          >
            <BookOpen className="w-4 h-4" />
            Academic Programs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-indigo-600">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive coaching programs designed to build strong foundations and achieve top ranks in competitive exams.
          </motion.p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        {/* Optional Filters Row (Static for visual) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
           {['All Programs', 'NEET Prep', 'JEE / CET', 'Foundation'].map((label, idx) => (
             <button 
               key={idx} 
               className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${idx === 0 ? 'bg-brand-primary text-white shadow-md shadow-blue-900/10' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-brand-primary hover:bg-blue-50'}`}
             >
               {label}
             </button>
           ))}
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-blue-50 text-brand-primary font-semibold text-sm">
                  {course.duration}
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-bold group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors">
                  {i + 1}
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                {course.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">
                {course.description}
              </p>
              
              <div className="bg-slate-50/50 rounded-2xl p-6 mt-auto border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                   Program Features
                </h4>
                <ul className="space-y-3">
                  {course.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Test Series & Extras Block */}
      <section className="container mx-auto px-4 pb-24">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-gradient-to-br from-brand-primary to-indigo-800 rounded-3xl p-10 md:p-16 text-center shadow-xl shadow-blue-900/20 relative overflow-hidden max-w-5xl mx-auto"
         >
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                 Need to test your limits?
              </h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                 Apart from our core batches, we provide specialized Chapter-wise & Full Syllabus Test Series. Simulated environments designed to pressure-test your exam readiness.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-2xl hover:bg-slate-50 hover:scale-105 transition-all shadow-lg active:scale-95"
              >
                 Enquire About Test Series
                 <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
         </motion.div>
      </section>
    </main>
  );
}
