import React from "react";

export default function JointVentures() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-20" 
          alt="Joint Ventures" 
          src="https://picsum.photos/seed/jv-hero/1920/1080"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Global Alliances</span>
          </div>
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter text-glow mb-8 leading-[0.85]">
            JOINT <br />
            <span className="text-primary">VENTURES</span>
          </h1>
          <p className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Collaborating with global leaders to accelerate the adoption of electric vehicles in India and beyond.
          </p>
        </div>

        {/* Main Content Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-on-surface">
                Strategic Partnerships for a <span className="text-primary italic">Sustainable Future.</span>
              </h2>
              <p className="text-body text-lg leading-relaxed text-on-surface-variant/80">
                Aerth Mobility actively seeks partnerships with technology providers, manufacturers, and infrastructure developers to create a robust and interconnected EV ecosystem. Our joint ventures focus on technology transfer, local manufacturing, and the deployment of smart mobility solutions across India.
              </p>
            </div>

            {/* Collaboration Items */}
            <div className="space-y-8">
              <JVItem 
                icon="handshake" 
                title="Strategic Alliances" 
                desc="Partnering with top EV manufacturers and battery technology companies worldwide."
              />
              <JVItem 
                icon="public" 
                title="Technology Transfer" 
                desc="Bringing cutting-edge EV technology to India through global collaborations."
              />
              <JVItem 
                icon="trending_up" 
                title="Market Expansion" 
                desc="Jointly scaling EV infrastructure and services across new regions and markets."
              />
            </div>
          </div>

          {/* Right Column: Visuals & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-1 rounded-[40px] border border-outline-variant/10 overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/jv-meeting/800/600" 
                alt="Collaboration Meeting" 
                className="w-full h-auto rounded-[38px] transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-8 rounded-[40px] border border-outline-variant/10 text-center hover:bg-surface-container-high transition-colors group">
                <div className="text-4xl font-headline font-bold text-primary mb-1 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Global Partners</div>
              </div>
              <div className="glass-card p-8 rounded-[40px] border border-outline-variant/10 text-center hover:bg-surface-container-high transition-colors group">
                <div className="text-4xl font-headline font-bold text-tertiary mb-1 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Joint Ventures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Floating Element */}
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-[110px] z-10"></div>
      <div className="absolute top-20 right-20 w-60 h-60 bg-tertiary/5 rounded-full blur-[90px] z-10"></div>
    </main>
  );
}

function JVItem({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center border border-outline-variant/10 group-hover:bg-primary/10 transition-colors">
        <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">{icon}</span>
      </div>
      <div>
        <h4 className="text-xl font-headline font-bold mb-2 text-on-surface group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-on-surface-variant leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
}
