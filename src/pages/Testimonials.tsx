import React from "react";

export default function Testimonials() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30 transition-all duration-1000" 
          alt="EV Community" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Community Voices</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            Testimonials & <span className="text-primary italic">Feedback</span>
          </h1>
          <p className="font-headline text-lg md:text-2xl text-on-surface-variant font-medium max-w-2xl leading-tight">
            Hear from our partners, technicians, and EV owners who are part of the Aerth Mobility ecosystem.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Rahul Sharma"
            role="EV Service Center Partner"
            text="Joining the Aerth Mobility network has transformed my business. The proprietary diagnostic tools and technical support are unmatched in the industry."
          />
          <TestimonialCard 
            name="Priya Patel"
            role="Skill Development Graduate"
            text="The hands-on training at the EV Skill Center gave me the confidence to work on advanced battery systems. I'm now a certified EV technician."
          />
          <TestimonialCard 
            name="Amit Verma"
            role="Fleet Operator"
            text="Aerth's real-time telemetry and predictive maintenance have significantly reduced our fleet's downtime. Their hyper-local support is a game-changer."
          />
          <TestimonialCard 
            name="Suresh Kumar"
            role="EV Owner"
            text="I finally feel confident owning an EV knowing that professional care is just around the corner. The service is fast and the diagnostics are very precise."
          />
          <TestimonialCard 
            name="Anjali Gupta"
            role="Manufacturing Partner"
            text="The MaaS model allowed us to scale our production rapidly without the heavy upfront infrastructure costs. Their engineering team is top-notch."
          />
          <TestimonialCard 
            name="Vikram Singh"
            role="Joint Venture Partner"
            text="Our collaboration with Aerth has been incredibly productive. They have a deep understanding of the Indian EV market and a clear vision for the future."
          />
        </div>
      </section>

      {/* Aesthetic Floating Elements */}
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-10"></div>
      <div className="absolute top-40 right-10 w-48 h-48 bg-tertiary/5 rounded-full blur-[80px] z-10"></div>
    </main>
  );
}

function TestimonialCard({ name, role, text }: { name: string, role: string, text: string }) {
  return (
    <div className="glass-card p-10 rounded-[32px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group flex flex-col justify-between relative overflow-hidden">
      <div className="space-y-6 relative z-10">
        <div className="flex gap-1 text-primary">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
          ))}
        </div>
        <div className="relative">
          <span className="material-symbols-outlined absolute -top-4 -left-4 text-6xl text-primary/5 -z-10">format_quote</span>
          <p className="text-on-surface-variant text-lg italic leading-relaxed">“{text}”</p>
        </div>
      </div>
      
      <div className="pt-10 flex items-center gap-4 border-t border-outline-variant/10 mt-10 relative z-10">
        <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant/10 overflow-hidden">
          <span className="material-symbols-outlined text-on-surface/20 text-4xl">account_circle</span>
        </div>
        <div>
          <h4 className="text-xl font-headline font-bold group-hover:text-primary transition-colors">{name}</h4>
          <p className="text-[10px] font-label font-bold uppercase tracking-widest text-primary">{role}</p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
    </div>
  );
}
