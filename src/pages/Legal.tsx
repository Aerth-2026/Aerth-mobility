import React from "react";
import { motion } from "motion/react";

export default function Legal() {
  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <main className="relative min-h-screen pt-40 pb-32 px-6 md:px-12 lg:px-24">
        {/* Kinetic Monolith Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-secondary-container/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 monolith-layer opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-label text-tertiary tracking-[0.4em] uppercase text-xs mb-4 block">Regulatory Framework</span>
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none kinetic-glow">
                Legal <br/><span className="text-primary-container">Terms &amp; Conditions</span>
              </h1>
            </div>
          </div>

          {/* Content Grid: Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Section 01: Acceptance */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-12 relative overflow-hidden group hover:bg-surface-container-high transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8">
                <span className="font-headline text-6xl font-bold text-outline-variant/20">01</span>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl">gavel</span>
                <h2 className="font-headline text-2xl font-bold mb-6 text-primary">Acceptance of Terms</h2>
                <p className="font-body text-lg leading-relaxed text-on-surface/80 max-w-xl">
                  By accessing this website, you agree to comply with these terms and all applicable laws. If you do not agree, you must stop using the website immediately. Continued use forms a binding agreement with <span className="text-on-surface font-bold">AERTH MOBILITY</span>.
                </p>
              </div>
            </div>

            {/* Section 02: Content Ownership */}
            <div className="lg:col-span-5 glass-panel rounded-3xl p-12 border-l-4 border-tertiary group">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="font-headline text-4xl font-bold text-outline-variant/20 block mb-4">02</span>
                  <h2 className="font-headline text-2xl font-bold mb-6 text-tertiary">Content Ownership &amp; Rights Protection</h2>
                  <p className="font-body text-base leading-relaxed text-on-surface/70">
                    All content on this website—including text, visuals, branding, design, and technology—is exclusively owned by AERTH MOBILITY and protected by law. Any unauthorized use, copying, modification, or distribution is strictly prohibited. Violations will result in legal complaints and strict action without notice.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-4">
                  <span className="material-symbols-outlined text-tertiary">copyright</span>
                  <span className="font-label text-[10px] tracking-widest uppercase text-tertiary">Proprietary Assets Locked</span>
                </div>
              </div>
            </div>

            {/* Section 03: Usage Rules */}
            <div className="lg:col-span-6 glass-panel rounded-3xl p-12 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col justify-center border-r border-outline-variant/20 pr-8">
                <span className="font-headline text-6xl font-bold text-outline-variant/20">03</span>
                <h2 className="font-headline text-2xl font-bold mt-4">Usage Rules &amp; Restrictions</h2>
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-4 font-body text-on-surface/70">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-error text-sm mt-1">block</span>
                    <span>No unauthorized access or disruption of systems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-error text-sm mt-1">smart_toy</span>
                    <span>No bots, scraping tools, or automation allowed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-error text-sm mt-1">settings_backup_restore</span>
                    <span>Prohibited from reverse-engineering any code</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-error text-sm mt-1">dangerous</span>
                    <span>Zero tolerance for illegal or harmful content sharing</span>
                  </li>
                </ul>
                <p className="mt-6 font-label text-[10px] text-error uppercase tracking-widest bg-error-container/20 p-2 rounded inline-block">Misuse leads to legal action</p>
              </div>
            </div>

            {/* Section 04: Disclaimer */}
            <div className="lg:col-span-6 glass-panel rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-64 h-64 border-[40px] border-outline-variant/5 rounded-full"></div>
              <div className="relative z-10">
                <span className="font-headline text-4xl font-bold text-outline-variant/20 block mb-4">04</span>
                <h2 className="font-headline text-2xl font-bold mb-6 text-primary-container">Disclaimer &amp; Third-Party Links</h2>
                <p className="font-body text-base leading-relaxed text-on-surface/70">
                  This website is provided “as is” without any guarantees. <span className="text-on-surface">AERTH MOBILITY</span> is not responsible for errors, interruptions, or damages arising from usage. We are not liable for content or practices of third-party websites linked from this platform.
                </p>
              </div>
            </div>

            {/* Section 05: Authority */}
            <div className="lg:col-span-12 glass-panel rounded-[4rem] p-16 border-t border-primary/20 bg-gradient-to-br from-surface-container to-background">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                  <span className="font-headline text-8xl font-bold text-outline-variant/10 leading-none">05</span>
                  <h2 className="font-headline text-4xl font-bold mb-8 -mt-8">Legal Authority &amp; Enforcement</h2>
                  <p className="font-body text-xl text-on-surface/80 leading-relaxed italic">
                    "These terms are governed by the laws of India, with exclusive jurisdiction in Hyderabad, Telangana."
                  </p>
                </div>
                <div className="hidden md:grid md:grid-cols-2 lg:w-1/2 gap-4">
                  <div className="bg-surface-container-high p-8 rounded-2xl flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-tertiary text-4xl mb-4">balance</span>
                    <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Jurisdiction</h4>
                    <p className="font-body text-xs text-on-surface-variant mt-2">Hyderabad, Telangana</p>
                  </div>
                  <div className="bg-surface-container-high p-8 rounded-2xl flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4">shield</span>
                    <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Enforcement</h4>
                    <p className="font-body text-xs text-on-surface-variant mt-2">Strict Legal Pursuit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
