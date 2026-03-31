"use client";

import { motion } from "framer-motion";
import { courses } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-slate-50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-brand-primary font-bold text-sm tracking-wide border border-blue-100"
          >
            Academic Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Discover the Perfect <span className="text-brand-primary">Learning Path</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-slate-600 mt-6 text-lg"
          >
            Our carefully structured programs are designed to provide maximum impact, offering comprehensive guidance for your academic journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.slice(0, 3).map((course: any, i: number) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-start overflow-hidden hover:-translate-y-2 cursor-pointer"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-primary/10 transition-colors duration-500" />
              
              <div className="mb-8 rounded-full bg-blue-50 px-4 py-1.5 font-bold text-brand-primary text-xs uppercase tracking-wider relative z-10">
                {course.duration}
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 capitalize leading-tight relative z-10 group-hover:text-brand-primary transition-colors duration-300">
                {course.title}
              </h3>
              
              <p className="text-slate-500 font-medium mb-10 line-clamp-3 leading-relaxed relative z-10">
                {course.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 w-full flex justify-between items-center relative z-10">
                <span className="font-bold text-slate-400 text-sm group-hover:text-slate-600 transition-colors duration-300">View Program Details</span>
                <Link
                  href="/courses"
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-2xl border border-slate-200 hover:border-brand-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 tracking-wide"
          >
            View All Programs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
