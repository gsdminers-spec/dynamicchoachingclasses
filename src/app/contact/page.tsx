"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, MessagesSquare } from "lucide-react";

export default function ContactPage() {
  const WHATSAPP_NUMBER = "919765244367";

  return (
    <main className="min-h-screen bg-brand-light pt-24 pb-16 overflow-hidden">
      <section className="bg-brand-red py-20 relative border-b-8 border-brand-dark">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 bg-brand-dark text-white uppercase tracking-widest font-black text-sm mb-6"
          >
            Direct Line
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Connect <span className="text-brand-dark">Command</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 item-start">
          {/* Contact Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark text-white p-12 border-8 border-brand-dark shadow-[16px_16px_0px_0px_#FFB300]"
          >
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 border-b-2 border-brand-red pb-4">
              Operational Base
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="bg-brand-red p-4 shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl text-brand-gold mb-2">Headquarters</h3>
                  <p className="text-gray-300 font-medium text-lg leading-relaxed">
                    Dynamic Coaching Classes <br />
                    Akola, Maharashtra <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-brand-blue p-4 shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-xl text-brand-gold mb-2">Comms Line</h3>
                  <p className="text-gray-300 font-black text-2xl tracking-widest">
                    +91 97652 44367
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-600">
               <h3 className="font-black uppercase text-xl text-white mb-6">Immediate Action</h3>
               <a 
                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20want%20to%20enroll%20in%20the%20courses.`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#25D366] transition-colors duration-300"
               >
                  <MessagesSquare className="w-6 h-6" />
                  Request Enrollment via WhatsApp
               </a>
            </div>
          </motion.div>

          {/* Contact Form Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 lg:p-16 border-8 border-brand-dark shadow-[16px_16px_0px_0px_#1565C0] h-full flex flex-col"
          >
            <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-8">
               Dispatch Signal
            </h2>
            <form className="space-y-8 flex-grow flex flex-col" onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'); }}>
               <div>
                  <label className="block font-black text-brand-dark uppercase tracking-widest text-sm mb-2">
                     Cadet Name
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-zinc-100 border-4 border-brand-dark p-4 font-bold text-lg focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                  />
               </div>
               <div>
                  <label className="block font-black text-brand-dark uppercase tracking-widest text-sm mb-2">
                     Comm Link (Phone / Email)
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-zinc-100 border-4 border-brand-dark p-4 font-bold text-lg focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
                  />
               </div>
               <div>
                  <label className="block font-black text-brand-dark uppercase tracking-widest text-sm mb-2">
                     Transmission Payload
                  </label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-zinc-100 border-4 border-brand-dark p-4 font-bold text-lg focus:outline-none focus:border-brand-red focus:bg-white transition-colors resize-none"
                  ></textarea>
               </div>
               <button 
                  type="submit"
                  className="mt-auto w-full py-5 bg-brand-dark text-white font-black uppercase tracking-widest hover:bg-brand-red hover:-translate-y-1 transition-all duration-300 shadow-[8px_8px_0px_0px_#0A0A0A] active:translate-y-0 active:shadow-none"
               >
                  Transmit Data
               </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
