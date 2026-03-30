import React from "react";
import { Globe, Share2, AtSign } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-20 transition-all duration-1000" 
          alt="Contact Us" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtV_rDgzILWNhfdaWmDm5dVEUH1EiupcwO7sKfvH5A-j_esi0sGcVC0EULBBnuMAgdXidTNJ5l75hV-CVc6MJDtP0ce1KwEd6ETWLJ0bBcGIjrhX2sXwPCtFIPPrJy3G8S59phLi_ukkxMOr5Ly7Deev9X6EE04HP1luymLa7U1yghyaOBnNbgyvJb_tDScDWwboENfyXtEpYLfd2KUyH1FQAgeCfsfSd81AIIHXEqZ4VbyzcQFgG6Opwa-nBeA0SrWRX9AOobEBoW"
          referrerPolicy="no-referrer"
        />
      </div>

      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header Identity */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-on-surface-variant animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto] bg-clip-text text-transparent">Get In Touch</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-glow mb-4">
            Contact <span className="text-tertiary">Us</span>
          </h1>
          <p className="font-headline text-lg md:text-2xl text-primary font-medium max-w-2xl leading-tight">
            Have questions? We're here to help you navigate the electric revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight text-on-surface">
                Let's Build the <span className="text-primary">Future Together.</span>
              </h2>
              <p className="text-body text-lg leading-relaxed text-on-surface-variant/80">
                Whether you're a fleet operator, a potential partner, or an EV enthusiast, we'd love to hear from you. Reach out to us through any of the channels below.
              </p>
            </div>

              <div className="space-y-8">
                <ContactInfoItem 
                  icon="location_on" 
                  title="Our Offices" 
                  content={
                    <div className="space-y-1">
                      <p>Rudrapur, Uttarakhand</p>
                      <p>Rohini, New Delhi</p>
                    </div>
                  } 
                />
                <a href="https://wa.me/918279773212" target="_blank" rel="noopener noreferrer" className="block group">
                  <ContactInfoItem 
                    icon="call" 
                    title="Phone / WhatsApp" 
                    content="+91 82797 73212" 
                  />
                </a>
                <div className="space-y-4">
                  <a href="mailto:Support@AerthMobility.com" className="block group">
                    <ContactInfoItem 
                      icon="mail" 
                      title="Support Email" 
                      content="Support@AerthMobility.com" 
                    />
                  </a>
                  <a href="mailto:AerthMobility@gmail.com" className="block group">
                    <ContactInfoItem 
                      icon="mail" 
                      title="General Inquiry" 
                      content="AerthMobility@gmail.com" 
                    />
                  </a>
                </div>

                {/* Social Links for Contact Page */}
                <div className="flex gap-4 pt-8 border-t border-outline-variant/10">
                  <SocialLink href="https://www.instagram.com/aerthmobility/" icon={
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  } label="Instagram" />
                  <SocialLink href="https://www.facebook.com/AerthMobility/" icon={
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  } label="Facebook" />
                  <SocialLink href="https://www.youtube.com/@aerthmobility" icon={
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-4.07-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  } label="YouTube" />
                </div>
              </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 rounded-[40px] border border-outline-variant/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
              
              <form className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                    <input type="text" className="w-full bg-surface-container-low/50 border border-outline-variant/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:bg-surface-container transition-all text-on-surface" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                    <input type="email" className="w-full bg-surface-container-low/50 border border-outline-variant/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:bg-surface-container transition-all text-on-surface" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Inquiry Type / Service</label>
                  <select className="w-full bg-surface-container-low/50 border border-outline-variant/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:bg-surface-container transition-all text-on-surface appearance-none">
                    <option value="" className="bg-surface-container">Select an Option</option>
                    <option value="ev-services" className="bg-surface-container">EV Services</option>
                    <option value="trainings" className="bg-surface-container">EV Trainings & Skill Development</option>
                    <option value="battery-servicing" className="bg-surface-container">Battery & Component Servicing</option>
                    <option value="oem-support" className="bg-surface-container">OEM Support & Collaboration</option>
                    <option value="franchise" className="bg-surface-container">Franchise & Skill Center Inquiry</option>
                    <option value="other" className="bg-surface-container">Other General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
                  <textarea rows={5} className="w-full bg-surface-container-low/50 border border-outline-variant/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:bg-surface-container transition-all text-on-surface resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                <button className="w-full bg-primary text-on-primary py-5 rounded-2xl font-headline font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 animate-gradient-text bg-gradient-to-r from-[#00ff00] via-[#00ccff] to-[#00ff00] bg-[length:200%_auto]">
                  Send Message 
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Floating Element */}
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-10"></div>
      <div className="absolute top-40 left-10 w-48 h-48 bg-tertiary/5 rounded-full blur-[80px] z-10"></div>
    </main>
  );
}

function ContactInfoItem({ icon, title, content }: { icon: string, title: string, content: React.ReactNode }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center border border-outline-variant/10 group-hover:bg-primary/10 transition-colors">
        <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">{icon}</span>
      </div>
      <div>
        <h3 className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant mb-1">{title}</h3>
        <p className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{content}</p>
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
      className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface/60 hover:text-primary hover:bg-primary/10 transition-all border border-outline-variant/10"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
