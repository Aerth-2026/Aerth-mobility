import React from "react";

export default function News() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000" 
          alt="EV News Media" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant">Latest Updates</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            News & <span className="text-primary italic">Media</span>
          </h1>
          <p className="font-headline text-lg md:text-2xl text-on-surface-variant font-medium max-w-2xl leading-tight">
            Stay updated with the latest developments in the EV ecosystem and Aerth Mobility's journey.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsCard 
            image="https://picsum.photos/seed/news1/800/600"
            date="Oct 15, 2024"
            title="Aerth Mobility Expands to 450+ Service Centers Across India"
            desc="Our hyper-local network reaches a new milestone, ensuring professional EV care is accessible to more users."
          />
          <NewsCard 
            image="https://picsum.photos/seed/news2/800/600"
            date="Sep 28, 2024"
            title="New Skill Development Program Launched for EV Technicians"
            desc="Empowering 12,000+ graduates with hands-on training in battery diagnostics and motor repair."
          />
          <NewsCard 
            image="https://picsum.photos/seed/news3/800/600"
            date="Aug 12, 2024"
            title="Strategic Partnership with Global Battery Tech Leaders"
            desc="Joint venture to bring cutting-edge cell impedance analysis technology to the Indian market."
          />
        </div>
      </section>

      {/* Aesthetic Floating Elements */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-10"></div>
      <div className="absolute top-40 left-10 w-48 h-48 bg-tertiary/5 rounded-full blur-[80px] z-10"></div>
    </main>
  );
}

function NewsCard({ image, date, title, desc }: { image: string, date: string, title: string, desc: string }) {
  return (
    <div className="glass-card rounded-[32px] overflow-hidden border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 bg-primary text-on-primary px-4 py-1.5 rounded-full text-[10px] font-label font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">calendar_today</span> {date}
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-2xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
        <div className="pt-6 flex justify-between items-center border-t border-outline-variant/10">
          <button className="text-primary font-headline font-bold text-sm flex items-center gap-2 group/btn">
            Read More 
            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <span className="material-symbols-outlined text-on-surface/40 hover:text-primary cursor-pointer text-xl transition-colors">share</span>
        </div>
      </div>
    </div>
  );
}
