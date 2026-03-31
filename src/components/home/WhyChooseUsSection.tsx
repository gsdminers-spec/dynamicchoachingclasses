"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  { title: "Rigorous Curriculum", desc: "Designed to conquer the toughest concepts of Physics, Chemistry, and Biology." },
  { title: "Elite Faculty", desc: "Learn directly from Altamash Sir (Maths) and Imran Ali Sir (Chemistry)." },
  { title: "High Output Testing", desc: "Weekly brutal mock exams modeled on actual NEET and JEE formats." },
  { title: "Tactical Execution", desc: "Clear strategies, time management, and no-nonsense concept clarification." }
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-brand-dark py-24 relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-brand-gold text-brand-dark font-black text-sm uppercase tracking-widest border-l-4 border-white">
            The Difference
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Our Protocol</span> works
          </h2>
          <p className="text-gray-400 font-medium text-lg max-w-lg">
            We don&apos;t just teach; we drill. Structural learning architectures built to extract the maximum potential from every student.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-8">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-zinc-900 border-t-[6px] border-brand-red p-6 hover:bg-zinc-800 transition-colors duration-300"
              >
                <CheckCircle className="text-brand-gold w-8 h-8 mb-4" />
                <h4 className="text-white font-bold text-xl uppercase mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Abstract Brutalist Art / Image area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="relative h-full min-h-[400px] lg:min-h-[600px] bg-zinc-800 flex items-center justify-center p-8 border-r-[16px] border-brand-gold relative overflow-hidden"
        >
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "40px 40px" }} />
           
           <div className="relative z-10 w-full h-[80%] bg-zinc-900 border-4 border-brand-red flex flex-col justify-center items-center text-center p-8 shadow-[12px_12px_0px_0px_#FFB300]">
              <div className="text-8xl font-black text-transparent -webkit-text-stroke-2 -webkit-text-stroke-white opacity-20 absolute top-4 left-4">
                DOMINATE
              </div>
              <p className="text-2xl font-bold text-white uppercase tracking-widest z-10 mt-12 bg-black px-4 py-2 border-l-4 border-brand-red">
                Excellence is a habit. <br/><span className="text-brand-gold">Not an act.</span>
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
