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
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-dark border-b-4 border-brand-red py-4 px-6 md:px-12 flex justify-between items-center shadow-[0_8px_0px_0px_#0A0A0A]"
    >
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-12 h-12 overflow-hidden border-2 border-brand-gold bg-zinc-200">
          <Image src="/images/logo.jpeg" alt="Dynamic Coaching Classes" fill className="object-cover" />
        </div>
        <div className="hidden md:block">
          <h2 className="text-xl font-bold leading-tight">DYNAMIC</h2>
          <span className="text-xs tracking-widest text-brand-gold uppercase">Coaching Classes</span>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-red transition-colors relative group">
            {link.name}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white hover:text-brand-red transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-4 right-4 bg-brand-dark border-4 border-brand-red shadow-[8px_8px_0px_0px_#D32F2F] flex flex-col p-4 md:hidden mt-2"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="py-3 text-center border-b border-white/5 hover:bg-white/5 hover:text-brand-red transition-all"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
