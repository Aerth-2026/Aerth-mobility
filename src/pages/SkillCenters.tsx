import React from "react";

export default function SkillCenters() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30 transition-all duration-1000" 
          alt="EV Skill Center" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Training Excellence</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            Skill Centers
          </h1>
          <p className="font-headline text-lg md:text-2xl text-tertiary font-medium max-w-2xl leading-tight">
            Empowering the Nation’s First Hyper-Local EV Service Ecosystem — One District at a Time.
          </p>
        </div>

        {/* Main Content Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight text-on-surface">
                Training the Next Generation of <span className="text-primary">EV Experts.</span>
              </h2>
              <p className="text-body text-lg leading-relaxed text-on-surface-variant/80">
                Our skill centers are equipped with the latest EV diagnostic and repair equipment. We provide comprehensive training on battery management systems, motor controllers, and vehicle telemetry. Our goal is to create a skilled workforce that can support the rapid growth of the EV industry in India.
              </p>
            </div>

            {/* Facility Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">biotech</span>
                <h4 className="text-xl font-headline font-bold mb-2">Advanced Labs</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Equipped with cell-level diagnostic tools and battery testing chambers.</p>
              </div>
              <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:bg-surface-container-high transition-colors group">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-6">engineering</span>
                <h4 className="text-xl font-headline font-bold mb-2">Expert Mentors</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Learn from industry veterans with decades of experience in power electronics.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual/Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100" 
                alt="Training Facility" 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">verified</span>
                    </div>
                    <div>
                      <div className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-1">Certification</div>
                      <div className="text-sm font-headline font-bold">NSDC Approved Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Section - Simple Grid */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/10 pb-8">
            <div className="space-y-2">
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">Our Centers</h2>
              <p className="text-on-surface-variant font-medium">Strategic training hubs across the region.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rudrapur Center */}
            <div className="bg-surface-container-low rounded-[40px] p-12 border border-outline-variant/10 relative overflow-hidden group hover:bg-surface-container-high transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">school</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">Rudrapur Center</h3>
              </div>
            </div>

            {/* New Delhi Center */}
            <div className="bg-surface-container-low rounded-[40px] p-12 border border-outline-variant/10 relative overflow-hidden group hover:bg-surface-container-high transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-3xl">school</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">New Delhi Center</h3>
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
