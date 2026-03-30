import React from "react";
import { motion } from "motion/react";
import { Bolt, CheckCircle2, PersonStanding, Rocket, Factory, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function SkillDevelopment() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="VR Training Center" 
            className="w-full h-full object-cover opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwHqMHRnjai-0sdkIGQIVQux7IX0HpAkvNg3bVFqwBgTHbG8ULy8nCFf-hBnsi_IhauhxaLCIomBN8GgMWN1_7M5iscgir6FsdpmhMVB83F_YEcdXXg1MbJyfHM93WkOhNL4wAlRaUDA3DQmbjPxYk9-xoDFKjMN6VrEYwxusPLjfeZuQtyJD5DZNzZswBeO7xKCbSzNG6vHlxq6qsOPNPADvyoeZXXJSuxgjKIN3ZlWyBlmg7BOM2sizLWoCvP1ORjXrTowQ7y7rF"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-8"
          >
            <Bolt className="w-4 h-4 text-tertiary" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent font-label">The Future of Workforce</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none"
          >
            Empowering the <span className="text-primary text-glow italic">Skill</span> Force
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Bridging the gap between traditional engineering and the electric revolution through immersive technical education and hands-on mastery.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link className="group relative px-8 py-4 bg-primary text-on-primary rounded-lg font-headline font-extrabold uppercase tracking-widest text-sm kinetic-scale-down overflow-hidden shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]" to="/contact">
              <span className="relative z-10">Explore Ecosystem</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link className="px-8 py-4 bg-surface-container-high border border-outline-variant text-on-surface rounded-lg font-headline font-bold uppercase tracking-widest text-sm kinetic-scale-down hover:bg-surface-container-highest transition-colors" to="/contact">
              Learn More
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-outline animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Signature Quote Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
                Learn the <span className="text-tertiary">Skill</span>.<br/>
                Earn the <span className="text-primary">Future</span>.
              </h2>
            </div>
            <div className="flex-1 border-l border-outline-variant/30 pl-12">
              <p className="font-body text-xl text-on-surface-variant italic mb-6">
                "The transition to electric mobility isn't just about changing engines; it's about re-wiring the entire workforce for a cleaner, smarter world."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="font-headline font-bold uppercase tracking-widest text-sm animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Aerth Mobility Mission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section className="py-32 bg-surface-container-low relative overflow-hidden" id="ecosystem">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h3 className="font-headline text-3xl md:text-5xl font-bold mb-4 tracking-tight">EV Ecosystem Segments</h3>
            <div className="w-24 h-1 bg-tertiary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 relative">
            <EcosystemCard 
              icon={<PersonStanding className="w-10 h-10" />}
              title="Job Seekers"
              desc="Master specialized EV maintenance, battery technology, and smart grid integration to secure your place in the new industrial era."
              features={["Certification Programs", "Placement Support"]}
              color="primary"
            />
            <EcosystemCard 
              icon={<Rocket className="w-10 h-10" />}
              title="Entrepreneurs"
              desc="Launch your EV venture with our incubation framework. From charging networks to micro-mobility startups."
              highlight="Start Small. Grow Big."
              color="tertiary"
              translateY="lg:translate-y-12"
            />
            <EcosystemCard 
              icon={<Factory className="w-10 h-10" />}
              title="Manufacturers"
              desc="Upskill your existing workforce with precision engineering modules tailored for high-volume EV production lines."
              features={["Rapid Re-skilling", "Quality Control"]}
              color="primary"
              translateY="lg:translate-y-4"
            />
            <EcosystemCard 
              icon={<Zap className="w-10 h-10" />}
              title="EV Users"
              desc="Educational workshops for vehicle owners to maximize battery life, efficiency, and smart feature utilization."
              badge="Certified Training"
              color="tertiary"
              translateY="lg:translate-y-16"
            />
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-tertiary/20 rounded-full blur-3xl"></div>
              <div className="rounded-3xl overflow-hidden border border-outline-variant/30 aspect-[4/5] relative">
                <img 
                  alt="Advanced EV Technology" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-neutral-950 to-transparent">
                  <p className="text-primary font-headline font-bold text-xs uppercase tracking-[0.4em] mb-2 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Live Training</p>
                  <p className="font-headline text-2xl font-bold">Hands-on Battery Analytics</p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Advanced EV <br/><span className="text-primary">Mastery Center</span></h3>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  Our Skill Development centers are equipped with the latest automotive diagnostic tools, high-voltage safety gear, and simulator bays. We don't just teach theory; we build competence through rigorous physical application.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="font-headline text-3xl font-bold text-tertiary mb-1">98%</h5>
                  <p className="font-label text-[10px] font-bold uppercase tracking-widest text-outline animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Placement Rate</p>
                </div>
                <div>
                  <h5 className="font-headline text-3xl font-bold text-primary mb-1">500+</h5>
                  <p className="font-label text-[10px] font-bold uppercase tracking-widest text-outline animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Partners Enrolled</p>
                </div>
              </div>
              <div className="p-8 bg-surface-container-high rounded-2xl border-l-4 border-tertiary">
                <p className="font-body text-on-surface leading-relaxed">
                  Join the elite circle of EV experts. Our curriculum is developed in collaboration with top global OEMs to ensure industry-readiness from Day 1.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div className="glass-card p-16 rounded-[3rem] border border-outline-variant/30 shadow-[0_20px_50px_rgba(154,203,255,0.05)]">
            <h2 className="font-headline text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to <span className="text-tertiary">Electrify</span> Your Career?</h2>
            <p className="font-body text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">
              Whether you're starting fresh or scaling an enterprise, the future of mobility waits for no one.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link className="px-10 py-5 bg-tertiary text-on-tertiary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:scale-95 transition-transform duration-200 shadow-xl shadow-tertiary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]" to="/contact">
                Apply For Training
              </Link>
              <Link className="px-10 py-5 bg-transparent border-2 border-primary text-primary rounded-lg font-headline font-black uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-on-primary transition-all duration-300" to="/contact">
                Partnership Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function EcosystemCard({ icon, title, desc, features, highlight, badge, color, translateY = "" }: any) {
  return (
    <div className={`glass-card p-8 rounded-3xl border border-outline-variant/20 ${translateY} lg:-ml-4 hover:z-20 hover:scale-105 transition-all duration-500 group relative shadow-2xl`}>
      <div className={`mb-6 text-${color}`}>
        {icon}
      </div>
      <h4 className="font-headline text-2xl font-bold mb-4">{title}</h4>
      <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">
        {desc}
      </p>
      {features && (
        <ul className="space-y-3 mb-10">
          {features.map((f: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-outline">
              <CheckCircle2 className="w-4 h-4 text-tertiary" /> {f}
            </li>
          ))}
        </ul>
      )}
      {highlight && (
        <div className="p-4 bg-surface-container rounded-xl mb-10 border border-tertiary/10">
          <p className="text-tertiary font-headline font-bold text-xs uppercase tracking-tighter animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Highlight</p>
          <p className="text-on-surface text-sm font-bold">{highlight}</p>
        </div>
      )}
      {badge && (
        <div className="flex items-center gap-2 mb-10 text-on-surface">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">{badge}</span>
        </div>
      )}
      <Link className={`w-full py-3 ${color === 'primary' ? 'bg-primary text-on-primary' : 'bg-surface-container-highest border border-outline-variant text-on-surface hover:bg-tertiary hover:text-on-tertiary'} rounded-lg font-headline font-bold text-xs uppercase tracking-widest transition-all hover:shadow-lg kinetic-scale-down text-center block animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]`} to="/contact">
        Contact Us
      </Link>
    </div>
  );
}
