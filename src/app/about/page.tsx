"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { faculty } from "@/data/mockData";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-light pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="bg-slate-50 py-24 relative overflow-hidden border-b border-slate-200">
        {/* Soft, airy gradient background mimicking premium educational platforms */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50/30 opacity-80" />
        {/* Subtle decorative "orbs" */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-emerald/10 rounded-full blur-[100px]" />

        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-brand-primary font-semibold text-sm mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            Empowering Your True Potential
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-emerald">Dynamic Coaching</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
             Excellence is not an accident; it is the result of relentless drill, high intention, and unbreakable confidence.
          </motion.p>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-24 container mx-auto">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center glass-card rounded-3xl p-6 md:p-10 border border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-soft"
          >
            <Image
              src="/images/faculty_chemistry.jpeg"
              alt="Imran Ali Khan"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Elegant Tag */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-slate-900 px-6 py-3 rounded-full font-bold shadow-soft flex items-center gap-2">
              <span className="w-2 relative h-2 rounded-full bg-brand-primary flex-shrink-0" />
              Director & Founder
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-primary rounded-full text-sm font-semibold mb-6">
              Leadership
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              Imran Ali Khan
            </h2>
            <div className="text-brand-primary font-medium text-lg mb-6">
              M.Sc (Chemistry) • NET Qualified
            </div>
            
            <blockquote className="border-l-4 border-brand-emerald pl-6 mb-8 py-2">
               <p className="text-slate-700 font-medium text-lg italic leading-relaxed">
                 "Excellence is not an accident; it is the result of relentless drill and unbreakable confidence." 
               </p>
            </blockquote>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Imran Ali Sir is a passionate educator dedicated to helping students achieve remarkable success in NEET, JEE, and Board exams. His teaching philosophy focuses on crystalline conceptual clarity, disciplined practice, and continuous motivation to build invincible student confidence. With over 14 years of experience, he has mentored countless students to top-tier engineering and medical institutes.
            </p>
            
            <div className="flex gap-4 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle className="text-brand-primary w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-slate-900">14+ Years</span>
                  <span className="text-sm text-slate-500 font-medium tracking-wide">Teaching Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Vision */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-[0.02]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Our Core Philosophy</h2>
            <p className="text-slate-600 text-lg">Building the foundation for your academic and professional success.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-3xl shadow-soft border border-slate-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To engineer disciplined, confident, and highly successful students through uncompromising quality teaching and personalized guidance. We create an environment where success is the only predictable outcome.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-12 rounded-3xl shadow-soft border border-slate-100 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-emerald" />
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">The Foundation</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Dynamic Coaching Classes was established with the ambitious objective of providing unparalleled education in Akola—dominating competitive exams and shaping the formidable intellects of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elite Faculty Setup */}
      <section className="py-24 container mx-auto px-4 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-primary font-semibold text-sm mb-4"
          >
            Experts & Mentors
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-emerald">Vanguard</span>
          </h2>
          <p className="text-slate-600 text-lg">Learn directly from individuals deeply committed to turning complexity into clarity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, i) => (
            <Link href={`/faculty/${member.id}`} key={member.id} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 hover:border-slate-200 overflow-hidden shadow-sm hover:shadow-soft transition-all duration-300"
            >
              <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
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
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-1">{member.name}</h4>
                <div className="text-brand-emerald font-semibold text-sm tracking-wide mb-4">
                  {member.experience}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
