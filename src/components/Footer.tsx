"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark border-t border-brand-red/20 py-12 px-6 md:px-12 mt-20 text-brand-light/70 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold">
              <Image src="/images/logo.jpeg" alt="Dynamic Coaching Classes" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white leading-tight">DYNAMIC</h2>
              <span className="text-xs tracking-widest text-brand-gold uppercase">Coaching Classes</span>
            </div>
          </Link>
          <p className="max-w-xs text-sm">
            Empowering students to achieve excellence in NEET and board exams with personalized coaching and expert faculty.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-brand-red transition-colors">Courses</Link></li>
              <li><Link href="/results" className="hover:text-brand-red transition-colors">Results</Link></li>
              <li><Link href="/notices" className="hover:text-brand-red transition-colors">Notices</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-brand-red/20 flex items-center justify-center text-[10px] text-brand-red">📍</span>
                Nagpur, Maharashtra
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-brand-gold/20 flex items-center justify-center text-[10px] text-brand-gold">📞</span>
                +91 97652 44367
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Dynamic Coaching Classes. All rights reserved.</p>
        <p>Designed by GSDMiners</p>
      </div>
    </footer>
  );
}
