import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30 transition-all duration-1000" 
          alt="EV Services Workshop" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Core Capabilities</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            Our <span className="text-primary italic">Services</span>
          </h1>
          <p className="font-headline text-lg md:text-2xl text-tertiary font-medium max-w-2xl leading-tight">
            From hyper-local maintenance to advanced battery diagnostics, we provide end-to-end solutions for the EV ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon="battery_charging_full" 
            title="Battery Diagnostics" 
            desc="Proprietary telemetry tools for cell-level health monitoring and impedance analysis." 
            color="primary"
          />
          <ServiceCard 
            icon="monitoring" 
            title="Motor Maintenance" 
            desc="Precision repair and performance optimization for EV motors and controllers." 
            color="tertiary"
          />
          <ServiceCard 
            icon="memory" 
            title="BMS Calibration" 
            desc="Expert firmware updates and calibration for Battery Management Systems." 
            color="primary"
          />
          <ServiceCard 
            icon="hub" 
            title="Fleet Management" 
            desc="Real-time tracking and predictive maintenance for commercial EV fleets." 
            color="tertiary"
          />
          <ServiceCard 
            icon="home_repair_service" 
            title="Hyper-Local Repair" 
            desc="Certified service centers across 450+ locations for quick on-road support." 
            color="primary"
          />
          <ServiceCard 
            icon="verified_user" 
            title="Safety Audits" 
            desc="Comprehensive safety inspections to ensure your EV meets all regulatory standards." 
            color="tertiary"
          />
        </div>

        {/* CTA Section */}
        <div className="mt-24 glass-card p-12 rounded-[40px] border border-outline-variant/10 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Ready to <span className="text-primary italic">Experience</span> the Future?</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
              Join India's first integrated hyper-local EV service ecosystem and ensure your vehicle gets the precision care it deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-full font-headline font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/20">
                Book a Service
              </Link>
              <Link to="/service-centers" className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-headline font-bold text-lg border border-outline-variant/20 hover:bg-surface-container-high transition-all">
                Find a Center
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700"></div>
        </div>
      </section>

      {/* Aesthetic Floating Elements */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-10"></div>
      <div className="absolute top-40 left-10 w-48 h-48 bg-tertiary/5 rounded-full blur-[80px] z-10"></div>
    </main>
  );
}

function ServiceCard({ icon, title, desc, color }: { icon: string, title: string, desc: string, color: "primary" | "tertiary" }) {
  const colorClass = color === "primary" ? "text-primary" : "text-tertiary";
  const borderClass = color === "primary" ? "border-primary/20" : "border-tertiary/20";

  return (
    <div className={`glass-card p-10 rounded-3xl border border-outline-variant/10 hover:bg-surface-container-high transition-all group relative overflow-hidden`}>
      <div className={`w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center mb-8 border ${borderClass} group-hover:scale-110 transition-transform`}>
        <span className={`material-symbols-outlined ${colorClass} text-4xl`}>{icon}</span>
      </div>
      <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed text-sm">{desc}</p>
      
      {/* Decorative corner element */}
      <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-${color}/5 rounded-full blur-2xl group-hover:bg-${color}/10 transition-all`}></div>
    </div>
  );
}
