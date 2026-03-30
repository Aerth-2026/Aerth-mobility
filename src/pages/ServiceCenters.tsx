import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCenters() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-20" 
          alt="Service Centers" 
          src="https://picsum.photos/seed/service-hero/1920/1080"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Our Network</span>
          </div>
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter text-glow mb-8 leading-[0.85]">
            SERVICE <br />
            <span className="text-primary">CENTERS</span>
          </h1>
          <p className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            State-of-the-art facilities providing expert care for your electric vehicle.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rudrapur Center */}
          <div className="glass-card p-8 md:p-12 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-headline font-bold">Rudrapur Center</h3>
          </div>

          {/* New Delhi Center */}
          <div className="glass-card p-8 md:p-12 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-4xl">location_on</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-headline font-bold">New Delhi Center</h3>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link to="/contact" className="inline-flex items-center gap-4 bg-primary text-on-primary px-12 py-6 rounded-2xl font-headline font-bold text-xl hover:scale-95 transition-all shadow-2xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
            Book Service Appointment
            <span className="material-symbols-outlined">calendar_month</span>
          </Link>
        </div>
      </section>

      {/* Aesthetic Floating Element */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-10"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px] z-10"></div>
    </main>
  );
}
