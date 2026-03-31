"use client";

import { motion } from "framer-motion";
import { pastResults } from "@/data/mockData";
import { Trophy, Star } from "lucide-react";
import Image from "next/image";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-brand-light pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="bg-brand-dark py-20 relative border-b-8 border-brand-gold overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #0A0A0A 25%, transparent 25%, transparent 75%, #0A0A0A 75%, #0A0A0A), linear-gradient(45deg, #0A0A0A 25%, transparent 25%, transparent 75%, #0A0A0A 75%, #0A0A0A)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }} />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold text-brand-dark uppercase tracking-widest font-black text-sm mb-6"
          >
            <Trophy className="w-4 h-4" />
            Hall of Fame
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Our <span className="text-brand-red">Legacy</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-gray-400 mt-6 max-w-2xl mx-auto font-medium text-lg"
          >
            Numbers don&apos;t lie. Year after year, our aggressive protocol yields top-tier ranks in India&apos;s toughest medical and engineering entrance exams.
          </motion.p>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-24 container mx-auto">
         <div className="text-center mb-16">
           <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter shadow-sm">
             Recent <span className="text-brand-blue">Triumphs</span>
           </h2>
         </div>
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastResults.map((student, i) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border-4 border-brand-dark p-6 relative group hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_#1565C0] hover:shadow-[12px_12px_0px_0px_#D32F2F]"
              >
                {/* Score Badge */}
                <div className="absolute -top-5 -right-5 bg-brand-red text-white w-16 h-16 flex flex-col items-center justify-center border-4 border-brand-dark transform rotate-12 group-hover:rotate-0 transition-transform duration-300 z-10">
                   <span className="font-black text-sm leading-none">{student.score.split('/')[0]}</span>
                   <span className="text-[10px] font-bold">score</span>
                </div>
                
                {/* Year Badge */}
                <div className="inline-block px-3 py-1 bg-brand-dark text-white font-black text-xs uppercase tracking-widest mb-4">
                  Class of {student.year}
                </div>
                
                <h3 className="text-2xl font-black text-brand-dark uppercase mb-1 leading-tight tracking-tight">
                  {student.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-brand-gold w-4 h-4 fill-current" />
                  <span className="font-bold text-brand-blue">{student.rank}</span>
                </div>
                
                <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-300">
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                    Admitted To
                  </div>
                  <div className="font-black text-brand-dark uppercase text-sm">
                    {student.college}
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Inspirational Footer Section */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
         <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] bg-zinc-800 border-8 border-brand-red"
            >
              <Image 
                src="/images/alumni.jpeg" 
                alt="Our Alumni" 
                fill 
                className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-8 lg:p-12 border-l-[12px] border-brand-gold bg-zinc-900"
            >
               <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
                 "You are the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">Next Success Story</span>"
               </h2>
               <p className="text-gray-400 font-medium text-lg leading-relaxed mb-8">
                 The results above are not miracles. They are the sum of thousands of hours of intense focus, ruthless problem-solving, and unwavering discipline. 
               </p>
               <a href="/contact" className="inline-block px-8 py-4 bg-brand-red text-white font-black uppercase tracking-widest hover:bg-white hover:text-brand-red transition-colors duration-300">
                 Join The Protocol
               </a>
            </motion.div>
         </div>
      </section>
    </main>
  );
}
