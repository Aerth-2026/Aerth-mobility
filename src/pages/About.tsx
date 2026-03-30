import React from "react";
import { Link } from "react-router-dom";
import { Globe, Share2, AtSign } from "lucide-react";

export default function About() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30 transition-all duration-1000" 
          alt="Futuristic dark laboratory workshop" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Precision Engineering</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            About <span className="text-primary italic">Us</span>
          </h1>
          <p className="font-headline text-lg md:text-2xl text-on-surface-variant font-medium max-w-2xl leading-tight">
            Building India’s Integrated Hyper-Local EV Service & Infrastructure Backbone.
          </p>
        </div>

        {/* Main Content Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight text-on-surface">
                We are the <span className="text-tertiary">Infrastructure Layer</span> for the Electric Revolution.
              </h2>
              <h3 className="font-headline text-xl md:text-2xl font-medium text-on-surface-variant border-l-4 border-primary pl-6 py-2">
                AERTH MOBILITY PRIVATE LIMITED - Accelerating India’s Shift to Clean, Inclusive Transport
              </h3>
              <p className="text-body text-lg leading-relaxed text-on-surface-variant/80">
                AERTH MOBILITY PRIVATE LIMITED is building the future we want to see. We are the infrastructure layer that empowers individuals, industries, and governments to transition toward low-carbon mobility through our PAN India Network. By providing the enablement platform for hyper-local EV service centers and smart city infrastructure, we are creating the backbone that the electric revolution needs.
              </p>
            </div>

            {/* Social Links for About Us */}
            <div className="flex gap-4 pt-4">
              <SocialLink href="https://www.instagram.com/aerthmobility/" icon={<Globe className="w-6 h-6" />} label="Instagram" />
              <SocialLink href="https://www.facebook.com/AerthMobility/" icon={<Share2 className="w-6 h-6" />} label="Facebook" />
              <SocialLink href="https://www.youtube.com/@aerthmobility" icon={<AtSign className="w-6 h-6" />} label="YouTube" />
            </div>

            {/* Progress Bars Section */}
            <div className="space-y-8 glass-card p-8 rounded-3xl border border-outline-variant/10 shadow-2xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-label font-bold uppercase tracking-wider text-on-surface">EV Component Repair & Diagnostics</span>
                    <span className="text-2xl font-headline font-bold text-primary italic">97%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary glow-primary" style={{ width: '97%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-label font-bold uppercase tracking-wider text-on-surface">Lithium Battery & Controller Servicing</span>
                    <span className="text-2xl font-headline font-bold text-tertiary italic">88%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="group relative flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-lg kinetic-hover overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(154,203,255,0.3)] animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
                <span className="relative z-10">More About Us</span>
                <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>

          {/* Right Column: Stats Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">7+</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Project Done</div>
              </div>
            </div>
            {/* Stat 2 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square mt-8 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-tertiary text-4xl">handshake</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-tertiary transition-colors">8+</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Clients Satisfied</div>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square -mt-8 hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl">groups</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">5+</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Expert Teams</div>
              </div>
            </div>
            {/* Stat 4 */}
            <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between aspect-square hover:bg-surface-container-high transition-colors group">
              <span className="material-symbols-outlined text-tertiary text-4xl">map</span>
              <div>
                <div className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-1 group-hover:text-tertiary transition-colors">5+</div>
                <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Upcoming Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* WHY AERTH EXISTS SECTION */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[60px] blur-3xl -z-10"></div>
          <div className="glass-card p-12 md:p-20 rounded-[60px] border border-outline-variant/20 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight italic text-primary">WHY AERTH EXISTS</h2>
                <div className="h-1.5 w-24 bg-tertiary mx-auto rounded-full"></div>
              </div>

              <div className="space-y-8 text-lg md:text-xl text-on-surface-variant leading-relaxed">
                <p className="font-medium text-on-surface">
                  India is moving towards electric mobility. But infrastructure, skilled manpower, and reliable service networks are still fragmented.
                </p>
                
                <p>
                  Electric vehicles need more than manufacturing. They need service. They need trained technicians. They need local entrepreneurs. They need trust at every PIN Code.
                </p>

                <div className="p-8 bg-surface-container-high/50 rounded-3xl border border-outline-variant/10">
                  <p className="text-2xl font-headline font-bold text-primary italic mb-4">AERTH MOBILITY was founded to bridge this gap.</p>
                  <p>We exist to build a hyperlocal, entrepreneur-led EV ecosystem that integrates:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-tertiary rounded-full"></span> Repair & Service</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-tertiary rounded-full"></span> EV Parts Distribution</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-tertiary rounded-full"></span> BLDC & PMSM Motor Support</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-tertiary rounded-full"></span> Controllers, Chargers & Batteries</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-tertiary rounded-full"></span> Skill Development & Technical Training</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-tertiary rounded-full"></span> District-Level EV Entrepreneurship</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <p className="text-2xl font-headline font-bold text-on-surface">Our belief is simple:</p>
                  <p className="italic text-primary text-2xl font-medium">
                    "If every PIN Code has access to reliable EV service, India’s electric transition will accelerate faster, stronger, and more sustainably."
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  <div className="space-y-2">
                    <h4 className="font-headline font-bold text-tertiary">Infrastructure</h4>
                    <p className="text-sm">We are building infrastructure — not just workshops.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline font-bold text-tertiary">Livelihoods</h4>
                    <p className="text-sm">We are creating livelihoods — not just revenue.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline font-bold text-tertiary">Backbone</h4>
                    <p className="text-sm">We are strengthening Bharat’s electric backbone.</p>
                  </div>
                </div>

                <div className="pt-12 text-center space-y-6">
                  <p className="text-on-surface font-medium">
                    AERTH MOBILITY is not a short-term startup. It is a long-term national commitment to:
                  </p>
                  <div className="text-3xl md:text-5xl font-headline font-black tracking-tighter text-glow animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent uppercase">
                    Electrify. Skill. Empower.
                  </div>
                  <p className="text-sm font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">
                    Across cities. Across towns. Across every PIN Code of India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Aesthetic Floating Element */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-10"></div>
      <div className="absolute top-40 left-10 w-48 h-48 bg-tertiary/5 rounded-full blur-[80px] z-10"></div>
      {/* Subtle Kinetic Decorative Lines */}
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-outline-variant/10 to-transparent z-0"></div>
      <div className="absolute top-0 right-[40%] w-px h-full bg-gradient-to-b from-transparent via-outline-variant/10 to-transparent z-0"></div>
    </main>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface/60 hover:text-primary hover:bg-primary/10 transition-all border border-outline-variant/10"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
