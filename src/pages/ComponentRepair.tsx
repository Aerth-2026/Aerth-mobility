import React from "react";
import { motion } from "motion/react";
import { Settings, ShieldCheck, Zap, Cpu, Activity, Gauge, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ComponentRepair() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="EV Component Repair" 
            className="w-full h-full object-cover opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDX7L5pbngdYvvMK9rWxcb-sgNN_U25ye9n5GJmzFUP4xAoczT9ygg-u58LRGzhNCusKsyBagLzzseUqlCD72rF6-o7dVIfBVdm0Cox8o7JolJ_myieFb5cM-1iNzuJp8RYWjmguyE14Sv5REvenySPhFgKF_Lx5Ff4kUXViZXC4f9g7tZZm2ncqmaVdG7XBksKP6X2jW7bs8TGl8E-NrIyMSZ9hs631raQy87BxU3zPDGrqW4bjuwbWJZq19seeor2bL14XOOcwMJ"
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
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent font-label">Precision Engineering</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none"
          >
            Powering the Future with <span className="text-tertiary text-glow italic">Precision</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Advanced diagnostics and professional repair services for complex EV electronics, controllers, and powertrain components.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link className="group relative px-8 py-4 bg-primary text-on-primary rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm kinetic-scale-down overflow-hidden shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]" to="/contact">
              <span className="relative z-10">Our Services</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link className="px-8 py-4 bg-surface-container-high border border-outline-variant text-on-surface rounded-lg font-headline font-bold uppercase tracking-widest text-sm kinetic-scale-down hover:bg-surface-container-highest transition-colors" to="/contact">
              Book Diagnostic
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StatCard icon={<Cpu className="w-8 h-8 text-primary" />} value="99.9%" label="Diagnostic Accuracy" />
            <StatCard icon={<Activity className="w-8 h-8 text-tertiary" />} value="48h" label="Average Turnaround" />
            <StatCard icon={<ShieldCheck className="w-8 h-8 text-primary" />} value="100%" label="Genuine Parts" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-surface-container-low relative overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <h3 className="font-headline text-3xl md:text-5xl font-bold mb-4 tracking-tight">Component Repair & Diagnostics</h3>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Comprehensive solutions for every critical EV component.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Zap className="w-10 h-10" />}
              title="Controller Repair"
              desc="Expert diagnostics and circuit-level repair for motor controllers and power electronics."
              features={["BMS Interfacing", "Thermal Analysis"]}
            />
            <ServiceCard 
              icon={<Gauge className="w-10 h-10" />}
              title="Instrument Cluster"
              desc="Repair and calibration of digital displays, speedometers, and infotainment systems."
              features={["Pixel Repair", "Software Updates"]}
            />
            <ServiceCard 
              icon={<Settings className="w-10 h-10" />}
              title="Powertrain Diagnostics"
              desc="Full system health checks for motors, transmissions, and drive units."
              features={["Vibration Analysis", "Efficiency Testing"]}
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Why Choose Our <br/><span className="text-primary">Repair Center?</span></h3>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  We combine state-of-the-art diagnostic equipment with years of specialized EV expertise. Our technicians are trained to handle high-voltage systems with the utmost safety and precision.
                </p>
              </div>
              <div className="space-y-6">
                <FeatureItem title="Advanced Diagnostic Tools" desc="We use OEM-grade scanners and oscilloscopes for precise fault finding." />
                <FeatureItem title="Certified Technicians" desc="Our team holds international certifications in EV maintenance and repair." />
                <FeatureItem title="Warranty Support" desc="All our repairs come with a comprehensive service warranty." />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="rounded-3xl overflow-hidden border border-outline-variant/30 aspect-square relative">
                <img 
                  alt="Diagnostic Lab" 
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
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div className="glass-card p-16 rounded-[3rem] border border-outline-variant/30 shadow-[0_20px_50px_rgba(154,203,255,0.05)]">
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-8 leading-tight">Get Your EV <span className="text-primary">Back on Track</span></h2>
            <p className="font-body text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">
              Don't let a component failure slow you down. Schedule a professional diagnostic today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-primary text-on-primary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:scale-95 transition-transform duration-200 shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
                Book Service Now
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-transparent border-2 border-tertiary text-tertiary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, value, label }: any) {
  return (
    <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 text-center hover:bg-surface-container-high transition-all">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-headline font-bold text-on-surface mb-1">{value}</div>
      <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">{label}</div>
    </div>
  );
}

function ServiceCard({ icon, title, desc, features }: any) {
  return (
    <div className="glass-card p-8 rounded-3xl border border-outline-variant/20 hover:scale-105 transition-all duration-500 group">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
        {icon}
      </div>
      <h4 className="font-headline text-2xl font-bold mb-4">{title}</h4>
      <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">{desc}</p>
      <ul className="space-y-3 mb-8">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-outline">
            <ArrowRight className="w-4 h-4 text-primary" /> {f}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="text-primary font-headline font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function FeatureItem({ title, desc }: any) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <ShieldCheck className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h5 className="font-headline font-bold text-lg mb-1">{title}</h5>
        <p className="text-on-surface-variant text-sm">{desc}</p>
      </div>
    </div>
  );
}
