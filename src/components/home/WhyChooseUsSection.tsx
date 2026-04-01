"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Target, BookOpen } from "lucide-react";

const benefits = [
  { 
    title: "Rigorous Curriculum", 
    desc: "Comprehensive study material designed to master the toughest concepts of Physics, Chemistry, and Biology.",
    icon: <BookOpen className="w-6 h-6 text-brand-primary" />
  },
  { 
    title: "Elite Faculty", 
    desc: "Learn directly from Altamash Sir (Maths) and Imran Ali Sir (Chemistry) with proven track records.",
    icon: <Trophy className="w-6 h-6 text-brand-accent" />
  },
  { 
    title: "High Output Testing", 
    desc: "Weekly mock exams modeled strictly on the latest NEET and JEE formats.",
    icon: <Target className="w-6 h-6 text-blue-500" />
  },
  { 
    title: "Tactical Execution", 
    desc: "Clear strategies, structured time management, and personalized mentorship.",
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 grid xl:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-20px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-6 md:space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-brand-accent font-bold text-sm tracking-wide border border-emerald-100">
            The Dynamic Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Our Protocol</span> Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium max-w-lg leading-relaxed">
            We don't just teach; we empower. Our structured learning architectures are built to extract the maximum potential from every aspiring student.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 pt-4 md:pt-8 xl:pr-10">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.1 + (i * 0.1) }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-5 md:p-6 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-slate-900 font-extrabold text-base md:text-lg mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Abstract Info Graphic / Image Area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-20px" }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative w-full h-full min-h-[350px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center p-6 md:p-8 rounded-[32px] md:rounded-[40px] bg-slate-900 overflow-hidden shadow-2xl"
        >
           {/* Decorative Background grid/dots */}
           <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(white 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
           
           {/* Soft glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]" />

           <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col justify-center items-center text-center shadow-2xl">
              <div className="w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-brand-primary to-blue-400 flex items-center justify-center shadow-lg shadow-brand-primary/30">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Excellence is a habit. <br/><span className="text-brand-accent">Not an act.</span>
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 w-full">
                <p className="text-slate-300 font-medium">Join the ranks of top achievers who chose Dynamic Coaching.</p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
