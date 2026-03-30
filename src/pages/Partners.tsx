import React from "react";

export default function Partners() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-20" 
          alt="EV Ecosystem Partners" 
          src="https://picsum.photos/seed/partners-hero/1920/1080"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Strategic Alliances</span>
          </div>
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter text-glow mb-8 leading-[0.85]">
            GLOBAL <br />
            <span className="text-primary">PARTNERS</span>
          </h1>
          <p className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Building the Nation’s First Hyper-Local EV Service Ecosystem with Global Standards.
          </p>
        </div>

        {/* Main Content Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-on-surface">
                Collaborating for a <span className="text-tertiary italic">Sustainable Future.</span>
              </h2>
              <p className="text-body text-lg leading-relaxed text-on-surface-variant/80">
                We partner with leading EV manufacturers, battery suppliers, and technology providers to create a seamless service experience. Our partners benefit from our hyper-local presence and advanced diagnostic capabilities, ensuring their customers receive the best possible support across India.
              </p>
            </div>

            {/* Coming Soon Message */}
            <div className="pt-12">
              <div className="inline-block px-16 py-10 rounded-[50px] bg-surface-container-high/50 backdrop-blur-xl border border-primary/30 shadow-[0_0_50px_rgba(0,255,0,0.1)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-glow animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent uppercase relative z-10">
                  Coming Soon
                </h3>
                <p className="text-sm font-label font-bold uppercase tracking-[0.4em] text-on-surface-variant mt-4 relative z-10 opacity-80">
                  Strategic Alliances in Progress
                </p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Floating Element */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-10"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px] z-10"></div>
    </main>
  );
}
