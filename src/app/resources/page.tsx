"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resources } from "@/data/mockData";
import { BookOpen, Download, ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

  const filteredResources =
    activeCategory === "All" ? resources : resources.filter((r) => r.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50/50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px]" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-brand-primary font-semibold text-sm mb-6 shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            Study Materials & Library
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-indigo-600">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Access our curated collection of free NCERT textbooks, reference materials, and past competitive exam papers.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container mx-auto px-4">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? "bg-brand-primary text-white shadow-soft"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={resource.id}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-100">
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-brand-primary transition-colors">
                  {resource.title}
                </h3>
                
                <div className="text-sm font-medium text-brand-accent mb-4">
                  By {resource.author}
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {resource.description}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-6">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-slate-50 hover:bg-brand-primary text-slate-700 hover:text-white rounded-xl font-semibold transition-all duration-300 group/btn"
                  >
                    {resource.link === "#" ? (
                      <>
                        <Download className="w-4 h-4" />
                        Download PDF
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Read Online
                      </>
                    )}
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Resources Found</h3>
            <p className="text-slate-600">Please try selecting a different category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
