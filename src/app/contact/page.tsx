"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, MessagesSquare, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const WHATSAPP_NUMBER = "919765244367";

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-6 border border-blue-200/50"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            We're here to help
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-indigo-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our courses or admissions? Our team is ready to provide you with the information you need.
          </motion.p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-brand-primary text-white p-10 md:p-12 rounded-3xl shadow-xl shadow-blue-900/10 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Contact Information
              </h2>
              <p className="text-blue-100 mb-10 text-lg">
                Reach out to us directly using the details below.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl shrink-0 border border-white/10 backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-1">Our Location</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Dynamic Coaching Classes <br />
                      Akola, Maharashtra <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl shrink-0 border border-white/10 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-1">Phone Number</h3>
                    <p className="text-blue-100 font-medium text-xl">
                      +91 97652 44367
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl shrink-0 border border-white/10 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-1">Email Address</h3>
                    <p className="text-blue-100">
                      info@dynamicclasses.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                 <h3 className="font-medium text-white/80 mb-4 uppercase tracking-wider text-sm">Quick Connect</h3>
                 <a 
                   href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20have%20an%20inquiry%20regarding%20enrollment.`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-medium rounded-2xl hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:shadow-[#25D366]/20 active:scale-[0.98]"
                 >
                    <MessagesSquare className="w-5 h-5" />
                    Chat on WhatsApp
                 </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col"
          >
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
               Send a Message
            </h2>
            <p className="text-slate-500 mb-8">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="space-y-6 flex-grow flex flex-col" onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'); }}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="block font-medium text-slate-700 text-sm">
                       Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-primary transition-all"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="block font-medium text-slate-700 text-sm">
                       Phone Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-primary transition-all"
                    />
                 </div>
               </div>
               
               <div className="space-y-2">
                  <label className="block font-medium text-slate-700 text-sm">
                     Email Address (Optional)
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-primary transition-all"
                  />
               </div>

               <div className="space-y-2 flex-grow flex flex-col">
                  <label className="block font-medium text-slate-700 text-sm">
                     Your Message
                  </label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="How can we help you today?"
                    className="w-full flex-grow bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-brand-primary transition-all resize-none"
                  ></textarea>
               </div>
               
               <button 
                  type="submit"
                  className="mt-6 w-full py-4 bg-brand-primary text-white font-medium rounded-2xl hover:brightness-110 shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
               >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
               </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
