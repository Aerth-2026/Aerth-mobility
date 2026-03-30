import React from "react";

export default function IndustrySolutions() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30 transition-all duration-1000" 
          alt="Industry Solutions" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Enterprise Support</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            Industry <span className="text-tertiary">Solutions</span>
          </h1>
          <p className="font-headline text-lg md:text-2xl text-primary font-medium max-w-2xl leading-tight mx-auto lg:mx-0">
            Tailored EV solutions for fleet operators, manufacturers, and service providers.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <SolutionCard 
            icon="fleet_management" 
            title="Fleet Management" 
            desc="Real-time tracking, battery health monitoring, and maintenance scheduling for EV fleets."
            color="primary"
          />
          <SolutionCard 
            icon="analytics" 
            title="Data Analytics" 
            desc="Actionable insights into vehicle performance and battery health using proprietary telemetry."
            color="tertiary"
          />
          <SolutionCard 
            icon="support_agent" 
            title="Expert Support" 
            desc="24/7 technical support and emergency assistance for all your EV needs."
            color="primary"
          />
          <SolutionCard 
            icon="verified_user" 
            title="Compliance" 
            desc="Ensuring your EV operations meet all safety and regulatory standards."
            color="tertiary"
          />
        </div>

        {/* Detailed Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-on-surface">
              Empowering the <span className="text-primary">EV Ecosystem</span> with Smart Support.
            </h2>
            <p className="text-body text-lg leading-relaxed text-on-surface-variant/80">
              We provide the tools and support you need to succeed in the rapidly evolving electric vehicle landscape. From small fleet operators to large-scale manufacturers, our solutions are designed to optimize performance, reduce costs, and ensure reliability.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Customized maintenance programs for diverse fleets.</span>
              </li>
              <li className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Advanced diagnostic tools for rapid troubleshooting.</span>
              </li>
              <li className="flex items-center gap-4 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Strategic consulting for EV infrastructure deployment.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW" 
              alt="Industry Support" 
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-outline-variant/10 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Aesthetic Floating Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-tertiary/5 rounded-full blur-[100px] z-10"></div>
    </main>
  );
}

function SolutionCard({ icon, title, desc, color }: { icon: string, title: string, desc: string, color: 'primary' | 'tertiary' }) {
  const iconColor = color === 'primary' ? 'text-primary' : 'text-tertiary';
  return (
    <div className="glass-card p-8 rounded-3xl border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-500 group text-center lg:text-left">
      <div className={`w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center mb-6 border border-outline-variant/10 mx-auto lg:mx-0 group-hover:scale-110 transition-transform`}>
        <span className={`material-symbols-outlined ${iconColor} text-4xl`}>{icon}</span>
      </div>
      <h3 className="text-xl font-headline font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
