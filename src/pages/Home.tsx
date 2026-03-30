import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Zap, Battery, Settings, Handshake, ShieldCheck, Lightbulb, Headphones, Target, Award, CheckCircle2, Globe } from "lucide-react";

const Marquee = ({ children, reverse = false, speed = "40s" }: { children: React.ReactNode, reverse?: boolean, speed?: string }) => {
  return (
    <div className="flex overflow-hidden select-none gap-8 group py-4">
      <div 
        className={`flex flex-nowrap gap-8 min-w-full shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:pause`}
        style={speed ? { animationDuration: speed } : {}}
      >
        {children}
      </div>
      <div 
        className={`flex flex-nowrap gap-8 min-w-full shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:pause`}
        style={speed ? { animationDuration: speed } : {}}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('integrity');

  const solutions = [
    {
      title: "1️⃣ Hyperlocal EV Service Network Development",
      desc: "--PIN Code-wise expansion model\n--Standardized workshop setup framework\n--SOP-driven repair & diagnostics system\n--Quality control & audit mechanism\n--Multi-brand E2W & E3W support",
      icon: <Target className="w-8 h-8" />,
      link: "/service-centers",
      color: "primary",
      size: "large",
      bg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "2️⃣ Advanced Technical Expertise (EV Core Systems)",
      desc: "Deep capability in:\n--BLDC & PMSM Motor diagnostics & repair\n--Motor controllers troubleshooting\n--Lithium-ion battery repair & BMS diagnostics\n--EV chargers servicing\n--Wiring & fault isolation systems",
      icon: <Settings className="w-8 h-8" />,
      link: "/component-repair",
      color: "tertiary",
      size: "small"
    },
    {
      title: "3️⃣ EV Parts Aggregation & Distribution",
      desc: "--Genuine parts sourcing ecosystem\n--Centralized + regional warehousing model\n--Fast-moving parts intelligence\n--OEM & component manufacturer partnerships\n--Supply chain optimization",
      icon: <Zap className="w-8 h-8" />,
      link: "/services",
      color: "primary",
      size: "small"
    },
    {
      title: "4️⃣ Skill Development & Certification",
      desc: "--Structured EV technician curriculum\n--Practical lab-based training modules\n--Certification standards\n--Zonal(/State)-level training centers\n--Continuous upskilling model",
      icon: <Award className="w-8 h-8" />,
      link: "/skill-development",
      color: "tertiary",
      size: "small"
    },
    {
      title: "5️⃣ Entrepreneur-Led Franchise Model",
      desc: "--Low-capex standardized franchise blueprint\n--Revenue-sharing systems\n--Training + operational support\n--Local business mentoring\n--Performance analytics dashboard",
      icon: <Handshake className="w-8 h-8" />,
      link: "/contact",
      color: "primary",
      size: "small"
    },
    {
      title: "6️⃣ Technology & Digital Platform (360° IT System)",
      desc: "--Service booking platform\n--Parts inventory management\n--Technician tracking\n--Warranty & claim management\n--Data analytics engine\n--Customer loyalty & cashback system",
      icon: <ShieldCheck className="w-8 h-8" />,
      link: "/core",
      color: "tertiary",
      size: "large"
    },
    {
      title: "7️⃣ Brand Trust & Quality Governance",
      desc: "--Standard repair pricing framework\n--Transparent billing\n--Customer rating system\n--Compliance & safety standards\n--Insurance & fleet partnerships",
      icon: <CheckCircle2 className="w-8 h-8" />,
      link: "/about",
      color: "primary",
      size: "small"
    }
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40" 
            alt="Sustainable Mobility" 
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Unlock the Potential of Sustainable Mobility</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-headline text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-glow mb-8"
            >
              Powering the <span className="text-primary italic">EV Ecosystem</span> Through Skill & Innovation!
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-headline text-lg md:text-2xl text-on-surface-variant max-w-3xl mb-12 leading-tight"
            >
              India’s First Integrated Hyper-Local Service Centers for Electric Vehicles & EV Parts. 
              <span className="text-white block mt-2">AERTH MOBILITY is the EV Service & Infrastructure Backbone of India.</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/about" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline font-bold text-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 group animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
                Discover More <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative z-20 py-32 px-6 bg-surface-container-lowest/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-[40px] overflow-hidden border border-outline-variant/10 aspect-square group">
                <img 
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100" 
                  alt="Aerth Mobility Infrastructure" 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl border border-outline-variant/20 shadow-2xl max-w-xs">
                <div className="text-4xl font-headline font-bold text-primary mb-1">PAN India</div>
                <div className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Network Vision</div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-primary animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">The Infrastructure Layer</span>
              </div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Building the <span className="text-tertiary">Network</span> for India's Electric Future.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  AERTH MOBILITY PRIVATE LIMITED is building the future we want to see. We are the <span className="text-white">Infrastructure Layer</span> that empowers individuals, industries, and governments to transition toward low-carbon mobility through our <span className="text-white">PAN India Network</span>.
                </p>
                <p>
                  By providing the <span className="text-white">Enablement Platform</span> for hyper-local EV service centers and smart city infrastructure, we are creating the backbone that the electric revolution needs. Our focus is on <span className="text-white">Multi-city presence</span> and <span className="text-white">OEM partnerships</span> to ensure reliability at every PIN code.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about" className="bg-surface-container-high text-on-surface px-8 py-4 rounded-2xl font-headline font-bold hover:bg-surface-container-highest transition-all border border-outline-variant/20">
                  More About Us
                </Link>
                <Link to="/contact" className="text-primary font-headline font-bold px-8 py-4 flex items-center gap-2 hover:gap-4 transition-all">
                  Check our services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Sliding Box */}
      <section className="relative z-20 py-32 px-6 overflow-hidden bg-surface-container-lowest/30">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-primary animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Our People</span>
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">Core <span className="text-primary italic">Team</span></h2>
        </div>
        
        <Marquee speed="40s">
          {[
            "https://i.postimg.cc/cgwPBBfw/f1.jpg",
            "https://i.postimg.cc/TLgBJJnn/f2.jpg",
            "https://i.postimg.cc/Q91vJJcp/f3.jpg",
            "https://i.postimg.cc/YGYTzzQh/f4.jpg",
          ].map((image, i) => (
            <div key={i} className="w-80 glass-card rounded-[40px] border border-outline-variant/10 overflow-hidden group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image} 
                  alt={`Team Member ${i + 1}`} 
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Esteemed Customers Marquee */}
      <section className="relative z-20 py-32 px-6 overflow-hidden bg-surface-container-lowest/30 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-tertiary animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Esteemed Customers</span>
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">Trusted by <span className="text-primary italic">Industry Leaders</span></h2>
        </div>
        <Marquee speed="40s">
          {[
            "https://i.postimg.cc/TLgBJJnL/b1.jpg",
            "https://i.postimg.cc/YGYTzzQL/b2.jpg",
            "https://i.postimg.cc/34mzFF2v/b3.jpg",
            "https://i.postimg.cc/Vrn2WWXb/b4.jpg",
          ].map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-4 py-4 min-w-[320px] h-48 transition-all group">
              <img 
                src={logo} 
                alt={`Partner ${i + 1}`} 
                className="max-h-32 w-full object-contain transition-opacity" 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </Marquee>
      </section>

      {/* Solutions Bento Grid */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-tertiary animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Our Solutions</span>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Core Capabilities of <span className="text-primary">AERTH MOBILITY</span>
            </h2>
            <p className="text-on-surface-variant text-lg">Precision Engineering & Infrastructure Platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {solutions.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-500 group flex flex-col justify-between relative overflow-hidden ${item.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                {item.bg && (
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img src={item.bg} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
                <div className="relative z-10 flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-2xl ${item.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-tertiary/10 text-tertiary'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <Link to={item.link} className="p-3 rounded-full bg-surface-container-highest/50 opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-on-primary">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="relative z-10">
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed whitespace-pre-line">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="relative z-20 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558444479-c8f02e627c05?auto=format&fit=crop&q=80&w=2070" 
            alt="Future Vision" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6 mx-auto">
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-primary animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Our Vision</span>
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-glow">
              Our Vision for a <span className="text-primary">Sustainable Future</span>
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              We envision an India where clean mobility is accessible to all, powered by a workforce that is skilled, empowered, and ready for the challenges of tomorrow. Our hyper-local service centers are the first step in building this nationwide ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="p-8 rounded-[32px] bg-surface-container-high/50 border border-outline-variant/10">
                <div className="text-4xl font-headline font-bold text-primary mb-2">500+</div>
                <div className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant">Service Centers Planned</div>
              </div>
              <div className="p-8 rounded-[32px] bg-surface-container-high/50 border border-outline-variant/10">
                <div className="text-4xl font-headline font-bold text-tertiary mb-2">10k+</div>
                <div className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant">Technicians Trained</div>
              </div>
              <div className="p-8 rounded-[32px] bg-surface-container-high/50 border border-outline-variant/10">
                <div className="text-4xl font-headline font-bold text-primary mb-2">1M+</div>
                <div className="text-sm font-label font-bold uppercase tracking-widest text-on-surface-variant">Carbon Tons Reduced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-tertiary animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">The Problem Statement</span>
              </div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Why <span className="text-primary italic">Aerth</span>?
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed pt-4">
                India is moving towards electric mobility, but the infrastructure is fragmented. We solve the <span className="text-white">Service Gap</span> and <span className="text-white">Skill Gap</span> to build a reliable ecosystem.
              </p>
              
              <div className="space-y-6 pt-8">
                <div className="glass-card p-6 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-xl mb-1">Scale Vision</h4>
                      <p className="text-on-surface-variant text-sm">Building a PAN India network with multi-city presence and OEM partnerships.</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-3xl border border-outline-variant/10 hover:border-tertiary/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-xl mb-1">Reduced Operational Noise</h4>
                      <p className="text-on-surface-variant text-sm">Streamlined processes and hyper-local support to ensure zero downtime for your fleet.</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-xl mb-1">Ecosystem Enablement</h4>
                      <p className="text-on-surface-variant text-sm">A platform that integrates repair, training, and entrepreneurship at every PIN code.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="glass-card p-10 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
                  <div className="flex justify-between items-end mb-6">
                    <Settings className="text-primary w-12 h-12" />
                    <span className="text-4xl font-headline font-bold text-on-surface">PAN India</span>
                  </div>
                  <h4 className="text-xl font-headline font-bold mb-2">Network Reach</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Expanding rapidly to cover every major city and rural hub in India.</p>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full mt-6 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
                
                <div className="glass-card p-10 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
                  <div className="flex justify-between items-end mb-6">
                    <Battery className="text-tertiary w-12 h-12" />
                    <span className="text-4xl font-headline font-bold text-on-surface">OEM</span>
                  </div>
                  <h4 className="text-xl font-headline font-bold mb-2">Strategic Partnerships</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Collaborating with top EV brands to provide authorized service support.</p>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full mt-6 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      className="h-full bg-tertiary"
                    ></motion.div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 pt-12">
                <div className="glass-card p-10 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
                  <Lightbulb className="text-primary w-12 h-12 mb-6" />
                  <h4 className="text-xl font-headline font-bold mb-2">Infrastructure Layer</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Building the physical and digital backbone for the electric revolution.</p>
                </div>
                
                <div className="glass-card p-10 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
                  <ShieldCheck className="text-tertiary w-12 h-12 mb-6" />
                  <h4 className="text-xl font-headline font-bold mb-2">Trust & Reliability</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Ensuring every EV owner has access to expert care at their local PIN code.</p>
                </div>

                <div className="glass-card p-10 rounded-[40px] border border-outline-variant/10 hover:bg-surface-container-high transition-all group">
                  <Headphones className="text-primary w-12 h-12 mb-6" />
                  <h4 className="text-xl font-headline font-bold mb-2">24/7 Support</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Always available to keep India's electric fleet moving forward.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card p-16 rounded-[60px] border border-outline-variant/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
              Ready to <span className="text-primary">Power the Future</span>?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Join us in our mission to build India's most integrated EV service network. Whether you're a partner, a technician, or an EV owner, there's a place for you in the Aerth ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline font-bold text-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-2xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
                Partner With Us
              </Link>
              <Link to="/contact" className="bg-surface-container-high text-on-surface px-10 py-5 rounded-2xl font-headline font-bold text-xl hover:bg-surface-container-highest transition-all border border-outline-variant/20">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Floating Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px] z-10"></div>
    </main>
  );
}
