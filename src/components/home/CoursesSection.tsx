"use client";

import { motion } from "framer-motion";
import { courses } from "@/data/mockData";
import Link from "next/link";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-brand-light relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-brand-dark text-white font-black text-sm uppercase tracking-widest mb-6 border-b-4 border-brand-blue"
          >
            Academic Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter"
          >
            Choose Your <span className="text-brand-blue">Path</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course: any, i: number) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative bg-white border-l-[12px] border-brand-dark shadow-[8px_8px_0px_0px_rgba(10,10,10,1)] hover:shadow-[12px_12px_0px_0px_rgba(211,47,47,1)] transition-all duration-300 p-8 flex flex-col items-start"
            >
              <div className="mb-6 rounded-none bg-brand-blue/10 px-4 py-2 font-bold text-brand-blue uppercase text-sm tracking-widest">
                {course.duration} Track
              </div>
              <h3 className="text-3xl font-black text-brand-dark mb-4 capitalize leading-tight">
                {course.title}
              </h3>
              <p className="text-gray-600 font-medium mb-8 line-clamp-3 leading-relaxed">
                {course.description}
              </p>
              <div className="mt-auto pt-6 border-t-2 border-dashed border-gray-200 w-full flex justify-between items-center">
                <span className="font-bold text-brand-dark text-lg">{course.duration}</span>
                <Link
                  href="/courses"
                  className="px-6 py-2 bg-brand-dark text-brand-gold font-bold uppercase text-sm hover:bg-brand-red hover:text-white transition-colors duration-300 transform group-hover:translate-x-2"
                >
                  Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/courses"
            className="inline-block px-8 py-4 bg-brand-dark text-white font-black uppercase tracking-widest border-2 border-brand-dark hover:bg-white hover:text-brand-dark transition-colors duration-300 shadow-[4px_4px_0px_0px_#D32F2F]"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
