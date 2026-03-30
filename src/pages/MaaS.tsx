import React from "react";

export default function MaaS() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30 transition-all duration-1000" 
          alt="EV Manufacturing" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Scalable Production</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            MaaS
          </h1>
          <p className="font-headline text-lg md:text-2xl text-primary font-medium max-w-2xl leading-tight">
            Manufacturing as a Service – Accelerating India’s Shift to Clean, Inclusive Transport.
          </p>
        </div>

        {/* Main Content Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight text-on-surface">
                On-Demand Manufacturing for the <span className="text-tertiary">EV Revolution.</span>
              </h2>
              <h3 className="font-headline text-xl md:text-2xl font-medium text-on-surface-variant border-l-4 border-primary pl-6 py-2">
                Manufacturing as a Service (MaaS)
              </h3>
              <p className="text-body text-lg leading-relaxed text-on-surface-variant/80">
                Our MaaS platform allows EV startups and established manufacturers to scale their production without the need for massive capital expenditure. We provide access to state-of-the-art manufacturing facilities, supply chain management, and quality control systems, ensuring your vehicles are built to the highest standards.
              </p>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">factory</span>
                <h4 className="text-xl font-headline font-bold mb-2">Flexible Capacity</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Scale production up or down based on market demand with our modular facilities.</p>
              </div>
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-6">inventory_2</span>
                <h4 className="text-xl font-headline font-bold mb-2">Supply Chain</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">End-to-end management of components, from sourcing to final assembly.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">10k+</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Units Produced</div>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square mt-8 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-tertiary text-4xl">speed</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-tertiary transition-colors">30%</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Cost Reduction</div>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square -mt-8 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl">verified</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">ISO</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Certified Quality</div>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-tertiary text-4xl">rocket_launch</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-tertiary transition-colors">2x</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Faster Time-to-Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Floating Element */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-10"></div>
      <div className="absolute top-40 left-10 w-48 h-48 bg-tertiary/5 rounded-full blur-[80px] z-10"></div>
    </main>
  );
}
