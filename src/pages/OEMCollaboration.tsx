import React from "react";
import { motion } from "motion/react";
import { Handshake, Factory, Globe, ShieldCheck, ArrowRight, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function OEMCollaboration() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="OEM Collaboration" 
            className="w-full h-full object-cover opacity-50" 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent font-label">Strategic Partnership</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none"
          >
            OEM <span className="text-tertiary text-glow italic">Collaboration</span> & Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Powering the EV Industry Through Partnership. Supporting manufacturers with hyper-local service networks and technical expertise.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link className="group relative px-8 py-4 bg-primary text-on-primary rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm kinetic-scale-down overflow-hidden shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]" to="/contact">
              <span className="relative z-10">Partner with Us</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link className="px-8 py-4 bg-surface-container-high border border-outline-variant text-on-surface rounded-lg font-headline font-bold uppercase tracking-widest text-sm kinetic-scale-down hover:bg-surface-container-highest transition-colors" to="/contact">
              Contact Support
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-32 bg-surface" id="partnership">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Building a <span className="text-primary">Nationwide Network</span></h3>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  Aerth Mobility acts as the bridge between EV manufacturers and their customers. We provide the infrastructure, technical skill, and local presence that OEMs need to scale their operations across India.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Feature icon={<Factory className="w-6 h-6 text-primary" />} title="Service Network" desc="Hyper-local service centers for efficient customer support." />
                <Feature icon={<ShieldCheck className="w-6 h-6 text-tertiary" />} title="Quality Assurance" desc="Maintaining OEM standards in every repair and service." />
                <Feature icon={<Globe className="w-6 h-6 text-primary" />} title="Last-Mile Support" desc="Ensuring service availability in remote and urban areas." />
                <Feature icon={<Target className="w-6 h-6 text-tertiary" />} title="Technical Training" desc="Upskilling local technicians on OEM-specific technology." />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="rounded-3xl overflow-hidden border border-outline-variant/30 aspect-square relative">
                <img 
                  alt="OEM Collaboration" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div className="glass-card p-16 rounded-[3rem] border border-outline-variant/30 shadow-[0_20px_50px_rgba(154,203,255,0.05)]">
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-8 leading-tight">Scale Your <span className="text-primary">EV Business</span></h2>
            <p className="font-body text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">
              Partner with Aerth Mobility to provide world-class service and support to your customers across India.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-primary text-on-primary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:scale-95 transition-transform duration-200 shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
                Become a Partner
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-transparent border-2 border-tertiary text-tertiary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
                Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="space-y-3">
      <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center border border-outline-variant/20">
        {icon}
      </div>
      <h5 className="font-headline font-bold text-lg">{title}</h5>
      <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
