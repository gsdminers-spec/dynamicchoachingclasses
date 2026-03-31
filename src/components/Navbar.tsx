"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Results", href: "/results" },
    { name: "Gallery", href: "/gallery" },
    { name: "Notices", href: "/notices" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 px-6 md:px-12 flex justify-between items-center shadow-sm"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-sm border border-slate-100 group-hover:shadow-md transition-all">
          <Image src="/images/logo.jpeg" alt="Dynamic Coaching Classes" fill className="object-cover" />
        </div>
        <div className="hidden md:block">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-primary transition-colors">DYNAMIC</h2>
          <span className="text-[10px] font-semibold tracking-widest text-brand-accent uppercase">Coaching Classes</span>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors relative group py-2">
            {link.name}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute top-[110%] left-4 right-4 bg-white rounded-2xl border border-slate-100 shadow-xl flex flex-col overflow-hidden md:hidden"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="py-4 px-6 text-sm font-medium text-slate-700 border-b border-slate-50 last:border-0 hover:bg-slate-50 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
