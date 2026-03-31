"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  { id: 1, src: "/images/classes_full.jpeg", title: "Classroom Session", description: "Interactive learning environment" },
  { id: 2, src: "/images/alumni.jpeg", title: "Alumni Batch 2023", description: "Celebrating our top achievers" },
  { id: 3, src: "/images/faculty_maths.jpeg", title: "Mathematics Lecture", description: "Advanced problem-solving strategies" },
  { id: 4, src: "/images/faculty_physics.jpeg", title: "Physics Lab", description: "Practical demonstrations for clarity" },
  { id: 5, src: "/images/faculty_chemistry.jpeg", title: "Chemistry Demo", description: "Understanding complex reactions" },
  { id: 6, src: "/images/faculty_biology.jpeg", title: "Botany Practical", description: "Hands-on biological studies" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Page Header */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/50 text-indigo-700 font-medium text-sm mb-6 border border-indigo-200/50"
          >
            <Camera className="w-4 h-4" />
            Visual Archive
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-indigo-600">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Take a glimpse into our engaging classroom environments, dedicated faculty, and vibrant student community.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 h-[380px]"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                />
                
                {/* Overlay Soft Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Elegant Caption */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {img.title}
                    </h3>
                    <p className="text-blue-100/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
