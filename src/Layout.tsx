import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Globe, Share2, AtSign, Mail, Phone, MapPin, X, Menu, Loader2 } from "lucide-react";

const TOP_BANNER_PAGES = [
  { label: "AERTH MOBILITY PRIVATE LIMITED | India’s First Integrated Hyper-Local Service Centers for Electric Vehicles & EV Parts", to: "/" },
  { label: "ABOUT US | Learn about our mission and vision for India's EV future", to: "/about" },
  { label: "AERTH CORE | The Nerve Center of EV Innovation and Technology", to: "/core" },
  { label: "LEADERSHIP COUNCIL | Meet the visionaries building the EV backbone", to: "/council" },
  { label: "SKILL DEVELOPMENT | Join our 30-day EV technician certification program", to: "/skill-development" },
  { label: "BATTERY SERVICING | Advanced cell-level diagnostics and BMS optimization", to: "/battery-servicing" },
  { label: "COMPONENT REPAIR | Precision diagnostics for complex EV electronics", to: "/component-repair" },
  { label: "OEM COLLABORATION | Supporting manufacturers with hyper-local networks", to: "/oem-collaboration" },
  { label: "SERVICE CENTERS | Find a standardized AERTH workshop near you", to: "/service-centers" },
  { label: "SKILL CENTERS | Practical lab-based training for the next gen", to: "/skill-centers" },
  { label: "PARTNERS | Strategic alliances driving the EV revolution", to: "/partners" },
  { label: "CONTACT US | Get in touch with our support and growth teams", to: "/contact" },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBannerIdx, setCurrentBannerIdx] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIdx((prev) => (prev + 1) % TOP_BANNER_PAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Bar with Animated Gradient and Rotating Links */}
          <Link 
            to={TOP_BANNER_PAGES[currentBannerIdx].to}
            className="flex justify-center items-center py-2 px-4 animate-top-banner transition-all duration-1000 overflow-hidden group relative min-h-[32px]"
          >
            {/* Timer Progress Bar */}
            <motion.div 
              key={currentBannerIdx}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 h-[2px] bg-white/30 z-10"
            />
            
            <div className="flex items-center gap-3 relative z-20">
              <Loader2 className="w-3 h-3 text-white animate-spin-slow" />
              <p className="text-[10px] font-headline font-bold tracking-widest uppercase text-white text-center">
                {TOP_BANNER_PAGES[currentBannerIdx].label}
              </p>
            </div>
          </Link>
          
          <div className="flex justify-between items-center px-6 py-3">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <img 
                src="https://i.postimg.cc/4dKSQYSC/Pi7-cropped-Group-4.png" 
                alt="Aerth Mobility Logo" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            
            <div className="hidden xl:flex items-center gap-6">
              <NavLink to="/" label="Home" />
              
              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="font-headline font-bold tracking-tight text-on-surface/70 hover:text-primary transition-all text-sm uppercase tracking-wider flex items-center gap-1">
                  About Us
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-4 z-50">
                  <DropdownLink to="/about" label="About Us" />
                  <DropdownLink to="/core" label="Aerth Core" />
                  <DropdownLink to="/council" label="Leadership Council" />
                </div>
              </div>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="font-headline font-bold tracking-tight text-on-surface/70 hover:text-primary transition-all text-sm uppercase tracking-wider flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-4 z-50">
                  <DropdownLink to="/skill-development" label="Skill Development & EV Ecosystem" />
                  <DropdownLink to="/battery-servicing" label="Lithium Battery & Controller Servicing" />
                  <DropdownLink to="/component-repair" label="EV Component Repair & Diagnostics" />
                  <DropdownLink to="/oem-collaboration" label="OEM Collaboration & Support" />
                </div>
              </div>

              <NavLink to="/service-centers" label="EV Service Centers" />
              <NavLink to="/skill-centers" label="EV Skill Centers" />
              <NavLink to="/partners" label="EV Partners" />
              <NavLink to="/contact" label="Contact Us" />
            </div>

            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden sm:block bg-primary text-on-primary px-6 py-2 rounded-full font-headline font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
                Get In Touch
              </Link>
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden p-2 text-on-surface hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-in from Left */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] xl:hidden"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-surface z-[70] xl:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                <img 
                  src="https://i.postimg.cc/4dKSQYSC/Pi7-cropped-Group-4.png" 
                  alt="Aerth Mobility Logo" 
                  className="h-8 w-auto object-contain"
                />
                <button onClick={closeMenu} className="p-2 text-on-surface">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <MobileNavLink to="/" label="Home" onClick={closeMenu} />
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline px-4">About Us</p>
                  <MobileNavLink to="/about" label="About Us" onClick={closeMenu} />
                  <MobileNavLink to="/core" label="Aerth Core" onClick={closeMenu} />
                  <MobileNavLink to="/council" label="Leadership Council" onClick={closeMenu} />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-outline px-4">Services</p>
                  <MobileNavLink to="/skill-development" label="Skill Development" onClick={closeMenu} />
                  <MobileNavLink to="/battery-servicing" label="Battery Servicing" onClick={closeMenu} />
                  <MobileNavLink to="/component-repair" label="Component Repair" onClick={closeMenu} />
                  <MobileNavLink to="/oem-collaboration" label="OEM Collaboration" onClick={closeMenu} />
                </div>
                <MobileNavLink to="/service-centers" label="EV Service Centers" onClick={closeMenu} />
                <MobileNavLink to="/skill-centers" label="EV Skill Centers" onClick={closeMenu} />
                <MobileNavLink to="/partners" label="EV Partners" onClick={closeMenu} />
                <MobileNavLink to="/contact" label="Contact Us" onClick={closeMenu} />
              </div>
              <div className="p-6 border-t border-outline-variant/10">
                <Link 
                  to="/contact" 
                  onClick={closeMenu}
                  className="block w-full bg-primary text-on-primary text-center py-4 rounded-xl font-headline font-bold"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <Outlet />
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918279773212" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl animate-whatsapp-glow hover:scale-110 transition-transform group"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-10 h-10 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="relative bg-[#0a0a0a] pt-24 pb-12 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <img 
            src="https://picsum.photos/seed/ev-bg/1920/1080" 
            alt="EV Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Logo and Quotes */}
            <div className="lg:col-span-4 space-y-8">
              <img 
                src="https://i.postimg.cc/4dKSQYSC/Pi7-cropped-Group-4.png" 
                alt="Aerth Mobility Logo" 
                className="h-16 w-auto object-contain"
              />
              <div className="space-y-6">
                <Quote icon="⚡" text="Building India’s EV Service & Infrastructure Backbone." />
                <Quote icon="🔧" text="Creating the Infrastructure Layer for the Electric Revolution." />
                <Quote icon="🌱" text="Enabling Sustainable Mobility through our PAN India Network." />
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-5">
              <h4 className="text-white font-headline font-black text-xl mb-8 uppercase tracking-widest italic">Company & Platform</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Navigation</p>
                  <FooterLink to="/" label="Home" />
                  <FooterLink to="/about" label="About Us" />
                  <FooterLink to="/core" label="Aerth Core" />
                  <FooterLink to="/council" label="Leadership Council" />
                  <FooterLink to="/legal" label="Legal" />
                  <FooterLink to="/contact" label="Contact Us" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Infrastructure</p>
                  <FooterLink to="/service-centers" label="Service Centers" />
                  <FooterLink to="/skill-centers" label="Skill Centers" />
                  <FooterLink to="/partners" label="EV Partners" />
                  <FooterLink to="/news" label="News & Media" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Enablement</p>
                  <FooterLink to="/skill-development" label="Skill Development" />
                  <FooterLink to="/battery-servicing" label="Battery Servicing" />
                  <FooterLink to="/component-repair" label="Component Repair" />
                  <FooterLink to="/oem-collaboration" label="OEM Support" />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-headline font-black text-xl mb-8 uppercase tracking-widest italic">Contact</h4>
              <div className="space-y-6">
                <ContactItem 
                  icon={<MapPin className="text-primary w-5 h-5" />} 
                  title="Locations" 
                  content={
                    <div className="space-y-1">
                      <p>Rudrapur, Uttarakhand</p>
                      <p>Rohini, New Delhi</p>
                    </div>
                  } 
                />
                <ContactItem 
                  icon={<Phone className="text-primary w-5 h-5" />} 
                  title="Phone / WhatsApp" 
                  content="+91 82797 73212" 
                />
                <ContactItem 
                  icon={<Mail className="text-primary w-5 h-5" />} 
                  title="Support" 
                  content="Support@AerthMobility.com" 
                />
                <ContactItem 
                  icon={<Mail className="text-primary w-5 h-5" />} 
                  title="General" 
                  content="AerthMobility@gmail.com" 
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <SocialLink href="https://www.instagram.com/aerthmobility/" icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            } label="Instagram" />
            <SocialLink href="https://www.facebook.com/AerthMobility/" icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            } label="Facebook" />
            <SocialLink href="https://www.youtube.com/@aerthmobility" icon={
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-4.07-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            } label="YouTube" />
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-on-surface/40 text-xs">
              © 2026 AERTH MOBILITY PRIVATE LIMITED. India’s EV Service & Infrastructure Backbone.
            </p>
            <div className="flex gap-8">
              <Link to="/legal" className="text-on-surface/40 hover:text-primary text-xs transition-colors">Legal</Link>
              <a href="#" className="text-on-surface/40 hover:text-primary text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-on-surface/40 hover:text-primary text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, label }: { to: string, label: string }) {
  return (
    <Link 
      className="font-headline font-bold tracking-tight text-on-surface/70 hover:text-primary transition-all text-sm uppercase tracking-wider" 
      to={to}
    >
      {label}
    </Link>
  );
}

function DropdownLink({ to, label }: { to: string, label: string }) {
  return (
    <Link 
      className="block px-6 py-3 text-sm font-headline font-bold text-on-surface/70 hover:text-primary hover:bg-primary/5 transition-all" 
      to={to}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }: { to: string, label: string, onClick: () => void }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="block px-4 py-3 rounded-xl font-headline font-bold text-on-surface/70 hover:text-primary hover:bg-primary/5 transition-all uppercase tracking-widest text-xs"
    >
      {label}
    </Link>
  );
}

function Quote({ icon, text }: { icon: string, text: string }) {
  return (
    <div className="flex gap-4 items-start group">
      <span className="text-2xl transition-all">{icon}</span>
      <p className="text-on-surface/60 text-sm italic leading-relaxed">“{text}”</p>
    </div>
  );
}

function FooterLink({ to, label }: { to: string, label: string }) {
  return (
    <Link 
      className="text-on-surface/50 hover:text-primary transition-all text-xs leading-relaxed hover:translate-x-1 inline-block" 
      to={to}
    >
      {label}
    </Link>
  );
}

function ContactItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{title}</div>
        <div className="text-on-surface/80 text-sm font-medium">{content}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface/60 hover:text-primary hover:bg-primary/10 transition-all border border-outline-variant/10"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
