"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { faculty } from "@/data/mockData";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-light pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="bg-brand-dark py-20 relative">
        <div className="absolute inset-0 bg-[url('/images/classes_full.jpeg')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 bg-brand-red text-white uppercase tracking-widest font-black text-sm mb-6"
          >
            Realise Your Self Confidence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            About <span className="text-brand-gold">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white border-8 border-brand-dark shadow-[16px_16px_0px_0px_#D32F2F]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-full w-full bg-brand-blue"
          >
            <Image
              src="/images/faculty_chemistry.jpeg"
              alt="Imran Ali Khan"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Brutalist Tag */}
            <div className="absolute bottom-4 left-4 bg-brand-gold text-brand-dark px-4 py-2 font-black uppercase text-xl shadow-[4px_4px_0px_0px_#0A0A0A]">
              Director
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 lg:p-12"
          >
            <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-2">
              Imran Ali Khan
            </h2>
            <div className="text-brand-red font-bold text-lg mb-6 uppercase tracking-widest">
              M.Sc (Chemistry), NET Qualified
            </div>
            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8">
              "Excellence is not an accident; it is the result of relentless drill and unbreakable confidence." 
            </p>
            <p className="text-gray-600 mb-8">
              Imran Ali Sir is a passionate educator dedicated to helping students achieve success in NEET, JEE, and Board exams. His teaching method focuses on strong conceptual clarity, regular practice, and motivation to build student confidence. With over 14 years of experience, he has mentored countless students to top-tier engineering and medical institutes.
            </p>
            
            <div className="flex gap-4 border-t-2 border-gray-200 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-blue" />
                <span className="font-bold text-brand-dark uppercase">14+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / Vision */}
      <section className="bg-brand-gold py-20 relative border-y-8 border-brand-dark overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark text-white p-12 shadow-[8px_8px_0px_0px_#FFFFFF]"
          >
            <h3 className="text-3xl font-black uppercase tracking-widest mb-4">Our Vision</h3>
            <p className="text-gray-300 font-medium text-lg">
              To create disciplined, confident, and successful students through quality teaching and proper guidance. We engineer an environment where success is the only predictable outcome.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-red text-white p-12 shadow-[8px_8px_0px_0px_#0A0A0A]"
          >
            <h3 className="text-3xl font-black uppercase tracking-widest mb-4">The Foundation</h3>
            <p className="text-gray-100 font-medium text-lg">
              Dynamic Coaching Classes was established with the aggressive aim of providing unparalleled education in Akola, dominating competitive exams and shaping formidable intellects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Elite Faculty Setup */}
      <section className="py-24 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-brand-dark text-white font-black text-sm uppercase tracking-widest mb-6 border-b-4 border-brand-red"
        >
          The Vanguard
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase tracking-tighter mb-16">
          Elite <span className="text-brand-red">Faculty</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {faculty.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white border-4 border-brand-dark group hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#0A0A0A]"
            >
              <div className="relative h-64 w-full bg-zinc-200 border-b-4 border-brand-dark overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-brand-gold text-brand-dark font-black px-2 py-1 text-xs uppercase shadow-[2px_2px_0px_0px_#0A0A0A]">
                  {member.subject}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black text-brand-dark uppercase mb-1">{member.name}</h4>
                <div className="text-brand-red font-bold text-xs uppercase tracking-widest mb-4">
                  {member.experience}
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
