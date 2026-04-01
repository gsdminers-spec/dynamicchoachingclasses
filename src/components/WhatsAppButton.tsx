"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919765244367";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Dynamic%20Coaching%20Classes,%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 md:w-8 md:h-8 fill-white">
        {/* FontAwesome WhatsApp Icon path */}
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 411.4c-33.2 0-66.5-8.9-95.4-25.8l-6.8-4-71 18.6 18.9-69.2-4.4-7C45.4 290 35.8 257.6 35.8 223.9c0-103.8 84.4-188.2 188.2-188.2 50.3 0 97.5 19.6 133.1 55.2 35.6 35.6 55.2 82.8 55.2 133.1 0 103.8-84.4 188.2-188.2 188.2zM327.4 278.4c-5.7-2.8-33.8-16.7-39-18.6-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.7 18.6-18 22.4-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24.1-8.9-45.9-28.3-17-15.1-28.5-33.8-31.8-39.5-3.3-5.7-.4-8.8 2.5-11.6 2.5-2.5 5.7-6.6 8.5-9.9 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10-1.4-2.8-12.8-30.9-17.5-42.3-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-10 1.4-15.2 7.1-5.2 5.7-20 19.6-20 47.7s20.5 55 23.3 58.8c2.8 3.8 40.1 61.2 97.1 85.8 13.6 5.9 24.2 9.4 32.5 12 13.6 4.3 26.1 3.7 35.9 2.2 10.9-1.6 33.8-13.8 38.5-27.1 4.7-13.3 4.7-24.8 3.3-27.1-1.4-2.3-5.2-3.8-10.9-6.6z" />
      </svg>
    </motion.a>
  );
}
