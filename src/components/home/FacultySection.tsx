"use client";

import { motion } from "framer-motion";
import { faculty } from "@/data/mockData";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FacultySection() {
  return (
    <section id="faculty" className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-emerald-50 text-brand-emerald font-bold text-sm tracking-wide border border-emerald-100"
          >
            Elite Educators
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Learn from the <span className="text-brand-emerald">Vanguard</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-slate-600 mt-6 text-lg"
          >
            Our faculty members are subject-matter experts dedicated to providing crystalline conceptual clarity and building your confidence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {faculty.slice(0, 4).map((member, i) => (
            <Link key={member.id} href={`/faculty/${member.id}`} className="group block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start overflow-hidden hover:-translate-y-2 h-full"
              >
                <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-brand-primary font-semibold px-3 py-1 rounded-full text-xs shadow-sm">
                    {member.subject}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow w-full">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 capitalize leading-tight group-hover:text-brand-emerald transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <div className="text-brand-primary font-semibold text-sm tracking-wide mb-3">
                    {member.experience} Experience
                  </div>
                  
                  <p className="text-slate-500 font-medium mb-6 line-clamp-2 leading-relaxed flex-grow">
                    {member.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-200 w-full flex justify-between items-center group-hover:border-emerald-100 transition-colors duration-300">
                    <span className="font-bold text-slate-400 text-sm group-hover:text-brand-emerald transition-colors duration-300">View Profile</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-brand-emerald group-hover:text-white group-hover:border-brand-emerald transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-brand-emerald hover:text-brand-emerald hover:shadow-lg hover:-translate-y-1 transition-all duration-300 tracking-wide"
          >
            Meet All Faculty <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
