"use client";

import { motion } from "framer-motion";
import { pastResults } from "@/data/mockData";
import { Trophy, Star, ArrowRight, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/2"></div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 text-blue-200 font-medium text-sm mb-6 border border-blue-700/50 backdrop-blur-md"
          >
            <Trophy className="w-4 h-4 text-yellow-400" />
            Hall of Fame
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Legacy</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Numbers don&apos;t lie. Year after year, our comprehensive approach yields top-tier ranks in India&apos;s toughest medical and engineering entrance exams.
          </motion.p>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20 md:py-28 container mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
             Recent <span className="text-brand-primary">Triumphs</span>
           </h2>
           <p className="text-slate-500 mt-4 text-lg">Celebrating the hard work and dedication of our top achievers.</p>
         </div>
         
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastResults.map((student, i) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col"
              >
                {/* Score Badge */}
                <div className="absolute -top-5 -right-5 bg-gradient-to-br from-brand-primary to-indigo-600 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-lg shadow-blue-900/20 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-10">
                   <span className="font-bold text-xl leading-none">{student.score.split('/')[0]}</span>
                   <span className="text-[10px] font-medium text-blue-100 uppercase tracking-wider mt-1">Score</span>
                </div>
                
                {/* Year Badge */}
                <div className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs uppercase tracking-wider mb-6 w-fit border border-slate-200">
                  Class of {student.year}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-brand-primary transition-colors">
                  {student.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-8 bg-amber-50 rounded-xl px-4 py-3 border border-amber-100 w-fit">
                  <Star className="text-amber-500 w-5 h-5 fill-current" />
                  <span className="font-bold text-amber-700">{student.rank}</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4 text-brand-primary" />
                    Admitted To
                  </div>
                  <div className="font-bold text-slate-800 text-lg">
                    {student.college}
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Inspirational Footer Section */}
      <section className="container mx-auto px-4 pb-24">
         <div className="grid lg:grid-cols-2 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10 transition-opacity duration-700 hover:opacity-0"></div>
              <Image 
                src="/images/alumni.jpeg" 
                alt="Our Alumni" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-10 md:p-16 flex flex-col justify-center"
               >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                 You are the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-indigo-600">Next Success Story</span>
               </h2>
               <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10">
                 The results above are not miracles. They are the sum of thousands of hours of intense focus, dedicated problem-solving, and unwavering discipline. 
               </p>
               <Link 
                 href="/courses" 
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-medium rounded-2xl hover:bg-blue-700 shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 transition-all active:scale-95 w-fit"
               >
                 Discover Our Programs
                 <ArrowRight className="w-5 h-5" />
               </Link>
            </motion.div>
         </div>
      </section>
    </main>
  );
}
