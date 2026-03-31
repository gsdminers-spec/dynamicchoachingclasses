"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/classes_full.jpeg", title: "Core Facility" },
  { id: 2, src: "/images/alumni.jpeg", title: "Alumni Batch" },
  { id: 3, src: "/images/faculty_maths.jpeg", title: "Mathematics Desk" },
  { id: 4, src: "/images/faculty_physics.jpeg", title: "Physics Lab" },
  { id: 5, src: "/images/faculty_chemistry.jpeg", title: "Chemistry Demo" },
  { id: 6, src: "/images/faculty_biology.jpeg", title: "Botany Practical" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-brand-light pt-24 pb-16 overflow-hidden">
      <section className="bg-brand-dark py-20 relative border-b-8 border-brand-red">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 bg-brand-gold text-brand-dark uppercase tracking-widest font-black text-sm mb-6"
          >
            Visual Evidence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            The <span className="text-brand-red">Gallery</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-brand-dark border-8 border-brand-dark overflow-hidden shadow-[12px_12px_0px_0px_#FFB300] hover:shadow-[16px_16px_0px_0px_#D32F2F] transition-all duration-300"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                
                {/* Brutalist Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 text-brand-dark p-4 font-black uppercase tracking-widest text-sm border-l-8 border-brand-red transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {img.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
