import React from "react";
import { motion } from "motion/react";
import { Battery, Zap, Activity, ShieldCheck, ArrowRight, Gauge, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function BatteryServicing() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Lithium Battery Lab" 
            className="w-full h-full object-cover opacity-50" 
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-8"
          >
            <Battery className="w-4 h-4 text-tertiary" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent font-label">The Power Core</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none"
          >
            Lithium Battery <span className="text-primary text-glow italic">Servicing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Advanced cell-level diagnostics, BMS optimization, and professional refurbishment for high-performance EV battery packs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link className="group relative px-8 py-4 bg-primary text-on-primary rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm kinetic-scale-down overflow-hidden shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]" to="/contact">
              <span className="relative z-10">Diagnostics</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link className="px-8 py-4 bg-surface-container-high border border-outline-variant text-on-surface rounded-lg font-headline font-bold uppercase tracking-widest text-sm kinetic-scale-down hover:bg-surface-container-highest transition-colors" to="/contact">
              Book Health Check
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-surface" id="diagnostics">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Precision <span className="text-primary">Battery Care</span></h3>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  The battery is the most expensive and critical component of an EV. Our specialized servicing ensures maximum longevity, safety, and performance through scientific analysis and expert intervention.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Feature icon={<Zap className="w-6 h-6 text-primary" />} title="Cell Balancing" desc="Ensuring uniform charge across all cells for maximum range." />
                <Feature icon={<Activity className="w-6 h-6 text-tertiary" />} title="BMS Optimization" desc="Fine-tuning the Battery Management System for efficiency." />
                <Feature icon={<Gauge className="w-6 h-6 text-primary" />} title="Capacity Testing" desc="Accurate measurement of State of Health (SoH)." />
                <Feature icon={<ShieldCheck className="w-6 h-6 text-tertiary" />} title="Thermal Analysis" desc="Identifying and resolving overheating issues." />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="rounded-3xl overflow-hidden border border-outline-variant/30 aspect-square relative">
                <img 
                  alt="Battery Diagnostics" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072"
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
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-8 leading-tight">Maximize Your <span className="text-primary">EV Range</span></h2>
            <p className="font-body text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">
              Don't wait for a breakdown. Regular battery servicing can double the life of your EV power pack.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-primary text-on-primary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:scale-95 transition-transform duration-200 shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
                Schedule Service
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-transparent border-2 border-tertiary text-tertiary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
                Get a Quote
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
