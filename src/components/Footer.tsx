"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-16 px-6 md:px-12 mt-20 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1 max-w-sm">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-700 group-hover:border-brand-primary transition-colors bg-white">
              <Image src="/images/logo.jpeg" alt="Dynamic Coaching Classes" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white leading-tight tracking-tight">DYNAMIC</h2>
              <span className="text-[10px] font-semibold tracking-widest text-brand-accent uppercase">Coaching Classes</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Empowering students to achieve excellence in NEET and board exams with personalized coaching, expert faculty, and a commitment to success.
          </p>
        </div>

        <div className="flex flex-wrap gap-16 md:gap-24">
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-brand-primary transition-colors flex items-center gap-2"><span className="text-brand-primary/50 text-xs">→</span> About Us</Link></li>
              <li><Link href="/courses" className="hover:text-brand-primary transition-colors flex items-center gap-2"><span className="text-brand-primary/50 text-xs">→</span> Courses</Link></li>
              <li><Link href="/results" className="hover:text-brand-primary transition-colors flex items-center gap-2"><span className="text-brand-primary/50 text-xs">→</span> Results</Link></li>
              <li><Link href="/notices" className="hover:text-brand-primary transition-colors flex items-center gap-2"><span className="text-brand-primary/50 text-xs">→</span> Notices</Link></li>
              <li><Link href="/resources" className="hover:text-brand-primary transition-colors flex items-center gap-2"><span className="text-brand-primary/50 text-xs">→</span> Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-brand-primary shadow-inner">📍</span>
                <span className="mt-1">Nagpur, Maharashtra</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-brand-accent shadow-inner">📞</span>
                <span className="mt-1">+91 97652 44367</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>© {new Date().getFullYear()} Dynamic Coaching Classes. All rights reserved.</p>
        <p className="text-slate-500">Designed by <span className="text-brand-primary">GSDMiners</span></p>
      </div>
    </footer>
  );
}
