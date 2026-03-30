import React from "react";
import { motion } from "motion/react";

export default function Core() {
  return (
    <div className="relative overflow-hidden bg-background text-on-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <img 
            alt="EV Chassis" 
            className="w-full h-full object-cover opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTY8sAOnpBNyEP9ZP34n_soLGB6Yj9UQ1XcUWwiA5Dj9x06RRPxLWROVlKgLVl-3WQ7xDhoaQl2RMCFNqCW2pU-2poDK8Wy2IRfg45qXRoLhgXLdno5a4zsON4bQkj0Qg2NFzc_SL9sIUm7znRRQckkOPJKQHp1-cZ-FEV-_Vdn_zr__pbd-Ra_en7ZC83DSWtWg85eIdFZBH4OkKEIAg0fzI59kjGToBy7HMYqIPkBm-8lYulhEfxTPoEEB0FpyY561JIeGilp1WE"
          />
        </div>
        <div className="relative z-20 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 mb-6 border border-tertiary/30 rounded-full bg-tertiary/5"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-tertiary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Precision Kinetics Active
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface leading-tight"
          >
            AERTH CORE: Powering the <span className="text-primary text-glow">[Future]</span> of Mobility
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed"
          >
            The architectural foundation of India's first integrated hyper-local EV service ecosystem.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <button className="px-8 py-4 bg-tertiary text-on-tertiary rounded-lg font-bold kinetic-hover flex items-center gap-3">
              Launch Dashboard
              <span className="material-symbols-outlined">rocket_launch</span>
            </button>
            <button className="px-8 py-4 border border-outline-variant hover:bg-surface-variant/30 rounded-lg font-bold transition-all flex items-center gap-3">
              Technical Specs
              <span className="material-symbols-outlined">file_download</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities Section (Asymmetric Bento Grid) */}
      <section className="relative py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Core Capabilities</h2>
            <div className="w-24 h-1 bg-primary mt-4"></div>
          </div>
          <p className="text-on-surface-variant text-right max-w-md hidden md:block">
            Operational excellence engineered for the electric revolution through precision diagnostics and scalable infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Hyperlocal Network */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container p-8 min-h-[400px] flex flex-col justify-between border border-primary/5 hover:border-primary/20 transition-all">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">hub</span>
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Infrastructure Layer</span>
              <h3 className="text-3xl font-headline font-bold mt-4">1️⃣ Hyperlocal EV Service Network Development</h3>
              <ul className="mt-6 space-y-2 text-on-surface-variant max-w-md">
                <li>--PIN Code-wise expansion model</li>
                <li>--Standardized workshop setup framework</li>
                <li>--SOP-driven repair & diagnostics system</li>
                <li>--Quality control & audit mechanism</li>
                <li>--Multi-brand E2W & E3W support</li>
              </ul>
            </div>
            <div className="flex gap-4 mt-8 flex-wrap">
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-mono">PIN-Expansion</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-mono">SOP-Diagnostics</span>
              <span className="px-3 py-1 bg-surface-container-high rounded text-xs font-mono">Multi-Brand</span>
            </div>
          </div>
          {/* 2. Technical Expertise */}
          <div className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col border-l-4 border-l-tertiary">
            <div className="mb-6 w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">settings_suggest</span>
            </div>
            <h3 className="text-2xl font-headline font-bold">2️⃣ Advanced Technical Expertise (EV Core Systems)</h3>
            <p className="mt-4 text-sm font-bold text-on-surface">Deep capability in:</p>
            <ul className="mt-4 space-y-4">
              {[
                "BLDC & PMSM Motor diagnostics & repair",
                "Motor controllers troubleshooting",
                "Lithium-ion battery repair & BMS diagnostics",
                "EV chargers servicing",
                "Wiring & fault isolation systems"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* 3. EV Parts */}
          <div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-headline font-bold">3️⃣ EV Parts Aggregation & Distribution</h3>
              <ul className="mt-6 space-y-2 text-sm text-on-surface-variant">
                <li>--Genuine parts sourcing ecosystem</li>
                <li>--Centralized + regional warehousing model</li>
                <li>--Fast-moving parts intelligence</li>
                <li>--OEM & component manufacturer partnerships</li>
                <li>--Supply chain optimization</li>
              </ul>
            </div>
          </div>
          {/* 4. Technology & Digital */}
          <div className="md:col-span-5 bg-primary-container/20 rounded-3xl p-8 relative border border-primary/20">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-headline font-bold text-primary">Technology &amp; Digital Platform</h3>
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <div className="mt-8 space-y-3">
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4 shadow-[0_0_10px_rgba(154,203,255,0.5)]"></div>
              </div>
              <p className="text-xs font-mono text-primary/70 uppercase">360° IT Integrated System</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-3 bg-background/40 rounded-xl text-xs">
                <span className="block font-bold">Booking</span>
                Real-time sync
              </div>
              <div className="p-3 bg-background/40 rounded-xl text-xs">
                <span className="block font-bold">Inventory</span>
                Auto-replenish
              </div>
            </div>
          </div>
          {/* 5. Skill Development */}
          <div className="md:col-span-3 bg-surface-container rounded-3xl p-8 border border-white/5">
            <span className="material-symbols-outlined text-tertiary mb-4">school</span>
            <h3 className="text-xl font-headline font-bold">4️⃣ Skill Development & Certification</h3>
            <ul className="mt-6 space-y-2 text-sm text-on-surface-variant">
              <li>--Structured EV technician curriculum</li>
              <li>--Practical lab-based training modules</li>
              <li>--Certification standards</li>
              <li>--Zonal(/State)-level training centers</li>
              <li>--Continuous upskilling model</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary/20"></div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-tertiary/20"></div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-secondary/20"></div>
              </div>
            </div>
          </div>
          {/* 6. Franchise Model */}
          <div className="md:col-span-6 bg-surface-container rounded-3xl p-8 flex gap-8 items-center border border-white/5">
            <div className="hidden sm:block shrink-0 w-32 h-32 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-secondary">storefront</span>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold">Franchise Model</h3>
              <p className="mt-2 text-on-surface-variant">Low-capex blueprint with revenue-sharing and deep operational mentoring.</p>
              <a className="mt-4 inline-flex items-center text-secondary font-bold text-sm gap-2 kinetic-border-expand relative" href="#">
                View Blueprint
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* 7. Brand Trust */}
          <div className="md:col-span-6 bg-surface-container rounded-3xl p-8 border border-white/5 flex flex-col justify-center text-center">
            <div className="flex justify-center gap-1 mb-4 text-tertiary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <h3 className="text-2xl font-headline font-bold">Brand Trust &amp; Quality</h3>
            <p className="mt-2 text-on-surface-variant">Transparent pricing and insurance partnerships.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface-container-low border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-5xl font-headline font-black text-primary">500+</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mt-2">PIN Codes Covered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-headline font-black text-tertiary">50k+</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mt-2">Battery Repairs</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-headline font-black text-on-surface">99%</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mt-2">Parts Availability</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-headline font-black text-secondary">24h</div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mt-2">Technician TAT</div>
          </div>
        </div>
      </section>

      {/* Image Callout Asymmetry */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[100px]"></div>
            <div className="rounded-3xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-surface-container shadow-2xl">
              <img 
                alt="Engineering Lab" 
                className="w-full h-auto transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdF26HK8BXJp72TGzkIE1JDIiVJLOuAmYp-OFikeQJxMTVEMzQzB5OF0TQKgoSrNQHfeN2Ditf2HWH21cG8CGPDjvp7tFqtBIoJAjlrU-6WBMEVhUQ4onM5InPX-K0_8YZJACrrsDfYd0SADOO5338c88YjOgXBTAtXIQhk-7nsO-G1ZyWAzFBrVbbbpFfNTJSooF2mth3DJXAp-rcrPrOxBhYTGjyOV5QdvUkdnlBSWCXczFGq6JV71xQvF8H_CVeuXCY6TBDHMit"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl font-headline font-bold mb-6">The Future is Modular.</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Aerth Core isn't just a platform; it's a modular nervous system designed to adapt to the rapid evolution of EV technology. From 2-wheelers to heavy-duty logistics, our core capabilities provide the stability required for mass-scale adoption.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-white/5">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                <span className="text-sm font-bold">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-white/5">
                <span className="material-symbols-outlined text-tertiary text-sm">verified</span>
                <span className="text-sm font-bold">Government Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
