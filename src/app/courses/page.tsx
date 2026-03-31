"use client";

import { motion } from "framer-motion";
import { courses } from "@/data/mockData";
import { CheckCircle2 } from "lucide-react";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-brand-light pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="bg-brand-red py-20 relative border-b-8 border-brand-dark">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 bg-brand-dark text-white uppercase tracking-widest font-black text-sm mb-6"
          >
            Academic Arsenal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Our <span className="text-brand-dark">Programs</span>
          </motion.h1>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-24 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border-[10px] border-brand-dark p-8 md:p-12 shadow-[16px_16px_0px_0px_#FFB300] hover:shadow-[16px_16px_0px_0px_#D32F2F] transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue font-black uppercase text-sm tracking-widest">
                  {course.duration}
                </div>
                <div className="bg-brand-dark text-white font-black text-lg w-12 h-12 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  {i + 1}
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-4 leading-tight">
                {course.title}
              </h2>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8 flex-grow">
                {course.description}
              </p>
              
              <div className="bg-zinc-50 border-4 border-brand-dark p-6 mt-auto">
                <h4 className="font-black text-brand-dark uppercase tracking-widest mb-4">Core Protocol</h4>
                <ul className="space-y-4">
                  {course.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-red w-6 h-6 flex-shrink-0" />
                      <span className="font-bold text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Test Series & Extras Block */}
      <section className="container mx-auto pb-24">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-brand-dark p-12 lg:p-20 text-center border-l-[16px] border-brand-gold"
         >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
               Need to test your <span className="text-brand-red"> limits?</span>
            </h2>
            <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto mb-10">
               Apart from our core batches, we provide specialized Chapter-wise & Full Syllabus Test Series. Simulated environments designed to pressure-test your exam readiness.
            </p>
            <a href="/contact" className="inline-block px-10 py-5 bg-brand-gold text-brand-dark font-black uppercase tracking-widest hover:bg-white transition-colors duration-300">
               Enquire About Test Series
            </a>
         </motion.div>
      </section>
    </main>
  );
}
