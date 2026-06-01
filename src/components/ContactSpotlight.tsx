import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, HelpCircle } from 'lucide-react';

export default function ContactSpotlight() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [goal, setGoal] = useState('Brand Setup');
  const [message, setMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  // Button ripple effects trigger array
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlight({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sf03461795@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Emit ripple loop on button hover/click as requested: "CONTACT ME button with same gradient. Hover: button emits ripple effect"
  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    setRipples((prev) => [...prev, newRipple]);

    // Cleanup ripple
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      // reset
      setName('');
      setEmail('');
      setWhatsapp('');
      setMessage('');
      setTimeout(() => setSendSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-28 bg-[#000000] overflow-hidden px-6 text-white border-b border-white/5 cursor-crosshair"
      style={{
        backgroundImage: isHovered
          ? `radial-gradient(circle 350px at ${spotlight.x}px ${spotlight.y}px, rgba(255, 214, 0, 0.08), rgba(0, 229, 255, 0.02) 40%, transparent 80%)`
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Spotlight indicator text line */}
        <div className="flex justify-center items-center gap-1.5 mb-2 font-mono text-[9px] tracking-widest text-[#FFD600] uppercase font-bold decoration-0 select-none">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>Interactive Cursor Spotlight Active</span>
        </div>

        <div className="text-center mb-16">
          <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none mb-4">
            START YOUR PROJECT
          </h2>
          <p className="text-white/60 text-xs sm:text-sm max-w-lg mx-auto">
            Design and engineering solutions tailored specifically to capture high margin customer checkouts. Shoot us a ping!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Block: Contact coordinates, Email copy, Interactive Google Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick stats board */}
            <div className="glass p-6 rounded-2xl border border-white/10 text-left">
              <span className="text-[10px] font-mono text-[#00E5FF] tracking-widest block mb-1">CRAFT OFFICE PK</span>
              <h3 className="font-sans font-black text-xl text-white mb-6">Let's Digital HQ</h3>

              <div className="flex flex-col gap-5">
                <div 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFD600]/10 flex items-center justify-center text-[#FFD600] border border-[#FFD600]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/50">DIRECT EMAIL</span>
                    <span className="text-sm font-sans font-extrabold text-white group-hover:text-[#FFD600] transition-colors flex items-center gap-1.5">
                      sf03461795@gmail.com
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-xl transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#FF2D92]/10 flex items-center justify-center text-[#FF2D92] border border-[#FF2D92]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/50">WHATSAPP CHAT</span>
                    <span className="text-sm font-sans font-extrabold text-white">+92 (336) 0150346</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-xl transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] border border-[#00E5FF]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/50">LOCATION RANGE</span>
                    <span className="text-sm font-sans font-extrabold text-white">Lahore, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map of Lahore, Pakistan (Targeting "Shopify Store Developer Pakistan") */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative h-64 bg-zinc-900">
              <iframe
                title="Shopify Store Developer Pakistan Lahore Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108871.95475283457!2d74.25700755913926!3d31.520448135894127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a140f09235%3A0xe54fb1d2ea49a1!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717242851493!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.95)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded-md text-[9px] font-mono text-white/60 uppercase border border-white/10 backdrop-blur-md">
                Shopify Developer Location Range
              </div>
            </div>

          </div>

          {/* Right Block: Glass Effect Contact Form and Spotlight CONTACT ME button */}
          <div className="lg:col-span-7">
            
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 text-left relative overflow-hidden shadow-2xl">
              
              {/* Backglow layer inside card */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00E5FF]/5 rounded-full blur-2xl pointer-events-none" />

              <h1 className="font-sans font-black text-lg sm:text-2xl text-white mb-1.5 uppercase">
                Send a Secure Signal
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-8">
                Shah Faisal will audit your shopify goals and draft a complete responsive roadmap proposal.
              </p>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-fullname" className="text-[10px] font-mono tracking-wider text-[#FFD600] uppercase font-bold">Your Persona / Full Name</label>
                    <input
                      id="form-fullname"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#050505]/80 border border-white/10 px-4 py-3 rounded-xl focus:border-[#FFD600] focus:outline-none font-sans text-xs sm:text-sm transition-colors text-white placeholder-white/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="text-[10px] font-mono tracking-wider text-[#FF2D92] uppercase font-bold">Email Coordinate</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. john@brand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#050505]/80 border border-white/10 px-4 py-3 rounded-xl focus:border-[#FF2D92] focus:outline-none font-sans text-xs sm:text-sm transition-colors text-white placeholder-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-whatsapp" className="text-[10px] font-mono tracking-wider text-[#00E5FF] uppercase font-bold">WhatsApp / Cell (Optional)</label>
                    <input
                      id="form-whatsapp"
                      type="text"
                      placeholder="e.g. +1 (310) 555-0199"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-[#050505]/80 border border-white/10 px-4 py-3 rounded-xl focus:border-[#00E5FF] focus:outline-none font-sans text-xs sm:text-sm transition-colors text-white placeholder-white/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-goal" className="text-[10px] font-mono tracking-wider text-[#7B2FF7] uppercase font-bold">Primary Shopify Goal</label>
                    <select
                      id="form-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-[#050505]/80 border border-white/10 px-4 py-3.5 rounded-xl focus:border-[#7B2FF7] focus:outline-none font-sans text-xs sm:text-sm transition-colors text-white cursor-pointer"
                    >
                      <option value="Brand Setup">Custom Shopify Brand Setup</option>
                      <option value="Store Optimization">95+ Page Speed Optimization</option>
                      <option value="Store Redesign">Conversion Store Redesign</option>
                      <option value="Custom Themes">Custom Liquid 2.0 Themes</option>
                      <option value="WooCommerce Migration">WooCommerce / Magento Migration</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-[10px] font-mono tracking-wider text-[#FFD600] uppercase font-bold">Project Payload / Specific Requirements</label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    placeholder="Provide site timeline coordinates, target products, or competitor sites you wish to beat..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0a0a0a]/80 border border-white/10 px-4 py-3 rounded-xl focus:border-[#FFD600] focus:outline-none font-sans text-xs sm:text-sm transition-colors text-white placeholder-white/30 resize-none"
                  />
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div className="text-[10.5px] font-mono text-white/40 max-w-sm text-left leading-relaxed">
                    By submitting, your payload is packaged directly to sf03461795@gmail.com with instant SMS notifications.
                  </div>

                  {/* CONTACT ME Button with same gradient emitting ripple effect on hover
                      Hover: Button emits ripple effect */}
                  <div className="relative group/btn overflow-visible rounded-xl">
                    <button
                      type="submit"
                      disabled={isSending}
                      onMouseEnter={handleButtonMouseEnter}
                      className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 font-sans font-black text-xs sm:text-sm tracking-widest text-black uppercase rounded-xl bg-gradient-to-r from-[#FFD600] to-[#FF2D92] shadow-[0_5px_15px_rgba(255,214,0,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer w-full sm:w-auto"
                    >
                      {isSending ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>CONTACT ME</span>
                          <Send className="w-4 h-4 text-black" />
                        </>
                      )}

                      {/* Custom ripple waves rendered dynamically on mouse position */}
                      {ripples.map((rip) => (
                        <span
                          key={rip.id}
                          className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
                          style={{
                            left: `${rip.x}px`,
                            top: `${rip.y}px`,
                            width: '4px',
                            height: '4px',
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      ))}
                    </button>
                  </div>

                </div>

                {/* Secure transmission response banner */}
                <AnimatePresence>
                  {sendSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 rounded-xl border border-green-500/30 bg-green-950/20 text-green-400 font-sans text-xs sm:text-sm flex items-center gap-3 justify-center"
                    >
                      <Check className="w-4 h-4 animate-bounce shrink-0" />
                      <span>SIGNALS DEPLOYED! Faisal will respond within 4 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
