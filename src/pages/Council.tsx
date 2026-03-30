import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Globe, Share2, Star } from "lucide-react";

export default function Council() {
  const stats = [
    { label: "Years Field Experience", value: "1+" },
    { label: "Operational Centers", value: "2" },
    { label: "Upcoming Locations", value: "7" },
    { label: "Skill Centers", value: "2" },
    { label: "EV Parts Repaired", value: "750+" },
    { label: "EV Brands Served", value: "5+" },
  ];

  const partners = [
    "https://i.postimg.cc/TLgBJJnL/b1.jpg",
    "https://i.postimg.cc/YGYTzzQL/b2.jpg",
    "https://i.postimg.cc/34mzFF2v/b3.jpg",
    "https://i.postimg.cc/Vrn2WWXb/b4.jpg",
  ];

  const team = [
    { name: "Founder 1", role: "Core Team", img: "https://i.postimg.cc/cgwPBBfw/f1.jpg" },
    { name: "Founder 2", role: "Growth Partner", img: "https://i.postimg.cc/TLgBJJnn/f2.jpg" },
    { name: "Member 1", role: "Mentor", img: "https://i.postimg.cc/Q91vJJcp/f3.jpg" },
    { name: "Member 2", role: "Guru", img: "https://i.postimg.cc/YGYTzzQh/f4.jpg" },
  ];

  return (
    <div className="bg-background text-on-surface font-body overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-8 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
        <div className="max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-tertiary font-label text-xs tracking-[0.3em] uppercase mb-6 block"
          >
            The Steering Committee
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-headline font-bold text-5xl md:text-7xl tracking-tighter text-on-surface mb-8 leading-none"
          >
            Leadership Council of <span className="text-primary text-glow">AERTH MOBILITY</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-16"
          >
            Core Team • Growth Partners • Mentors • Gurus
          </motion.p>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-tertiary font-headline font-bold text-3xl">{stat.value}</div>
                <div className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="px-8 py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
              <img 
                alt="Founder Portrait" 
                className="relative rounded-3xl w-full h-[600px] object-cover transition-all duration-700 shadow-2xl" 
                src="https://i.postimg.cc/cgwPBBfw/f1.jpg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline font-bold text-4xl text-on-surface mb-8">Founder’s Message</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  When electric mobility began gaining momentum in India, I noticed something important.
                </p>
                <p>
                  While companies were focusing on manufacturing electric vehicles, very few were building the <span className="text-white">service infrastructure needed to support them at scale.</span>
                </p>
                <p>
                  Without a strong service ecosystem, even the best vehicles cannot deliver a reliable ownership experience. That realization became the foundation of <span className="text-primary font-bold">AERTH Mobility.</span>
                </p>
                <p>
                  Our vision is simple but ambitious: to build a <span className="text-white">trusted nationwide service network</span> dedicated to electric two-wheelers and three-wheelers.
                </p>
                <p>
                  We want EV owners, fleet operators, and manufacturers to know that wherever their vehicles travel, professional service support will be available.
                </p>
                <p>
                  AERTH Mobility is not just a company. It is a mission to create the <span className="text-white">service backbone</span> of India’s electric mobility revolution.
                </p>
                <p className="italic text-primary font-headline text-xl mt-12">
                  — Founder, AERTH Mobility
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">The Core Team</h2>
            <p className="text-on-surface-variant">Visionaries driving the electric revolution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4]">
                  <img 
                    src={member.img} 
                    alt="Team Member" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="px-8 py-24 relative overflow-hidden bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">Vision 2030</h2>
            <p className="text-on-surface-variant text-lg mb-8">
              By 2030, AERTH Mobility aims to become <span className="text-primary font-bold italic">India’s most trusted EV service ecosystem.</span>
            </p>
            <ul className="space-y-6">
              {[
                { icon: "network_node", title: "A PAN-India network of EV service centres" },
                { icon: "engineering", title: "Thousands of trained EV technicians" },
                { icon: "handshake", title: "Strategic partnerships with EV manufacturers and battery companies" },
                { icon: "biotech", title: "Advanced diagnostic and repair technologies" },
                { icon: "analytics", title: "A nationwide platform supporting millions of electric vehicles" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-tertiary">{item.icon}</span>
                  <h4 className="font-headline font-bold text-xl text-on-surface group-hover:text-tertiary transition-colors">{item.title}</h4>
                </li>
              ))}
            </ul>
            <p className="mt-12 text-on-surface-variant italic">
              As electric mobility scales across India, AERTH Mobility intends to become the <span className="text-white font-bold">after-sales infrastructure powering this transformation.</span>
            </p>
          </div>
          <div className="order-1 lg:order-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img 
              alt="Futuristic EV infrastructure" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/vision2030/800/600"
            />
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-bold text-4xl text-on-surface mb-12">The AERTH Mobility Manifesto</h2>
          <div className="p-12 rounded-3xl border border-outline-variant/20 relative glass-card text-left">
            <span className="material-symbols-outlined text-6xl text-primary/20 absolute top-4 left-4">format_quote</span>
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant relative z-10">
              <p className="text-2xl font-headline text-on-surface font-bold">
                We believe electric mobility will reshape the future of transportation.
              </p>
              <p>
                But vehicles alone cannot build a revolution. Every electric vehicle needs reliable service, skilled technicians, and a dependable ecosystem behind it.
              </p>
              <div className="space-y-4 py-4">
                <p className="font-bold text-on-surface">At AERTH Mobility, we believe:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>EV owners deserve reliable and transparent service</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Technicians deserve specialized training and opportunities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Manufacturers need trusted service partners</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Electric mobility must be supported by strong infrastructure</span>
                  </li>
                </ul>
              </div>
              <p className="text-xl font-medium text-on-surface">
                We are building a future where <span className="text-primary italic">electric vehicle ownership is simple, reliable, and worry-free.</span>
              </p>
              <p className="font-bold text-white">
                Our mission is to power the service ecosystem that electric mobility depends on.
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-2">
              <div className="w-12 h-1 bg-tertiary"></div>
              <div className="w-4 h-1 bg-primary"></div>
              <div className="w-2 h-1 bg-outline"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Presence */}
      <section className="px-8 py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline font-bold text-4xl text-on-surface">Network Presence</h2>
            <p className="text-on-surface-variant mt-2">Operational Excellence & Rapid Expansion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Functional Centers */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 glass-card p-8 rounded-3xl border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></span>
                <h3 className="font-headline font-bold text-xl">India : Rudrapur | New Delhi (Functional Centers)</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-surface-container-high px-6 py-4 rounded-xl flex-1 min-w-[150px]">
                  <span className="text-sm font-label text-on-surface-variant block mb-1">Uttarakhand HQ</span>
                  <span className="text-xl font-bold font-headline">Rudrapur</span>
                </div>
                <div className="bg-surface-container-high px-6 py-4 rounded-xl flex-1 min-w-[150px]">
                  <span className="text-sm font-label text-on-surface-variant block mb-1">Capital Region</span>
                  <span className="text-xl font-bold font-headline">New Delhi</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-surface-container-high/50 rounded-xl">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Delhi Centre Address</p>
                <p className="text-sm text-on-surface-variant">Ground Floor, Manokamna Apartment, Pocket-1, Sector-34, Rohini, New Delhi-110042</p>
              </div>
            </div>

            {/* Upcoming Centers */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2 glass-card p-8 rounded-3xl border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <h3 className="font-headline font-bold text-xl">India : Rudrapur | Rohini (Upcoming Centers)</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Rudrapur", "Rohini"].map((city) => (
                  <div key={city} className="bg-surface-container-high/50 px-4 py-3 rounded-xl border border-primary/10">
                    <span className="text-lg font-headline">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact HQ */}
            <div className="col-span-1 md:col-span-3 lg:col-span-4 grid lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2 bg-surface-container-low rounded-3xl overflow-hidden h-64 contrast-125">
                <img 
                  alt="Map location" 
                  className="w-full h-full object-cover opacity-50" 
                  src="https://picsum.photos/seed/map/1200/400"
                />
              </div>
              <div className="bg-tertiary text-on-tertiary p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <h3 className="font-headline font-bold text-2xl mb-4">Contact HQ</h3>
                  <div className="text-sm font-medium mb-6 opacity-90 space-y-1">
                    <p>Rudrapur, Uttarakhand</p>
                    <p>Rohini, New Delhi</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <a className="flex items-center gap-3 font-bold hover:underline" href="tel:+918279773212">
                    <Phone size={20} />
                    +91 8279773212
                  </a>
                  <a className="flex items-center gap-3 font-bold hover:underline" href="mailto:Support@AerthMobility.com">
                    <Mail size={20} />
                    Support@AerthMobility.com
                  </a>
                  <a className="flex items-center gap-3 font-bold hover:underline text-xs" href="mailto:AerthMobility@gmail.com">
                    <Mail size={16} />
                    AerthMobility@gmail.com
                  </a>
                  <a className="flex items-center gap-3 font-bold hover:underline" href="https://www.AerthMobility.com" target="_blank" rel="noreferrer">
                    <Globe size={20} />
                    www.AerthMobility.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-24 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <h2 className="font-headline font-bold text-3xl text-on-surface">Strategic Partners <span className="text-tertiary">& Alliances</span></h2>
        </div>
        <div className="flex gap-8 overflow-x-hidden py-4 relative group">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((img, idx) => (
              <div key={idx} className="w-64 h-32 flex items-center justify-center transition-all p-4">
                <img alt="Partner" className="h-full w-full object-contain" src={img} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
