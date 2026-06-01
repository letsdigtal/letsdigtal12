import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, Copy, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sf03461795@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Payment SVG icons which transit from grayscale to color on hover as requested
  const paymentIcons = [
    {
      id: 'visa',
      name: 'Visa',
      color: '#1A1F71',
      svg: (
        <svg className="w-10 h-7 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2.5 17h3L8 7H5l-2.5 10zM14 7h-3L8.5 17h3l2.5-10z" />
          <path d="M19 7h-4.5l-1.5 5h3.5l.5-1.5h-2l.5-1.5h1.5L19 7zm3 0h-2.5L18 17h2.5l1.5-10z" />
        </svg>
      )
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      color: '#EB001B',
      svg: (
        <svg className="w-10 h-7" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="9" cy="12" r="6" fillOpacity="0.8" />
          <circle cx="15" cy="12" r="6" fillOpacity="0.8" />
        </svg>
      )
    },
    {
      id: 'paypal',
      name: 'PayPal',
      color: '#003087',
      svg: (
        <svg className="w-10 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.06 7.66c-.1.74-.43 2.1-1.01 4.09l-.16.54c-.61 2.05-1.12 3.8-1.54 5.25-.13.43-.37.66-.72.68h-2.31c-.34 0-.58-.16-.72-.49l-1.52-5.41c-.08-.34-.33-.51-.73-.51H9.86l-1.89 6.41H5L7.75 5h5.4c1.17 0 2.07.27 2.7.8 1.15.97 1.48 2.22 lineh-1 3.51-.54 1.83-2.09 3.51-2.09 3.51z" />
        </svg>
      )
    },
    {
      id: 'applepay',
      name: 'Apple Pay',
      color: '#555555',
      svg: (
        <svg className="w-10 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.95-.42-1.85-.4-2.82 0-1.2.51-1.95.42-2.82-.4-1.85-1.95-3.15-5.32-3.15-7.75 0-3.86 2.37-5.91 4.79-5.91.95 0 1.83.35 2.44.8 1.12-.6 2.22-.8 3.55-.8 2.45 0 4.3 1.85 4.3 4.3 0 1.85-1.15 4.15-2.22 6.1s-.41 3.26.01 3.26zm-4.14-17c1.3-.1 2.45-.9 2.55-2.2-.1-.9-.9-1.85-2.2-2.2-.8.1-1.85.9-2.05 2.2.1.9.9 1.85 1.7 2.2z" />
        </svg>
      )
    },
    {
      id: 'shopify',
      name: 'Shopify Pay',
      color: '#96BF48',
      svg: (
        <svg className="w-10 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6L13.5 2L8 6V11L13.5 15L19 11V6ZM13.5 4.5L16.5 6.7L13.5 8.9L10.5 6.7L13.5 4.5ZM13.5 13.1L10 10.6V7.4L13.5 9.9L17 7.4V10.6L13.5 13.1Z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-[#000000] text-white pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#7B2FF7]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Core quote block exact text requested: "Let's Creating Something That Matters!" */}
        <h2 className="font-sans font-black text-2xl sm:text-4xl text-center tracking-tight mb-8 uppercase max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">
          "Let's Creating Something That Matters!"
        </h2>

        {/* Email copiable block: "sf03461795@gmail.com (click to copy animation)" */}
        <div 
          onClick={handleCopyEmail}
          className="group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#FFD600] transition-colors duration-300 shadow-xl max-w-max mx-auto mb-16 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-[#FFD600]/10 flex items-center justify-center text-[#FFD600] border border-[#FFD600]/20">
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Mail className="w-4 h-4" />}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">CLICK TO COPY EMAIL</span>
            <span className="text-sm sm:text-base font-sans font-black text-white group-hover:text-[#FFD600] transition-colors">
              sf03461795@gmail.com
            </span>
          </div>

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 5 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[#FFD600] text-black font-sans font-extrabold text-[10px] tracking-widest uppercase border border-[#FFD600] shadow-[0_5px_15px_rgba(255,214,0,0.5)] z-20"
              >
                Copied to Clipboard!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Link directories: Fiverr, Upwork, LinkedIn with hover underline */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-16">
          <a
            href="https://fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-sans text-xs tracking-widest font-black py-2 text-white/60 hover:text-white flex items-center gap-1.5"
          >
            FIVERR PROFESSIONAL
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFD600] group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href="https://upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-sans text-xs tracking-widest font-black py-2 text-white/60 hover:text-white flex items-center gap-1.5"
          >
            UPWORK EXCEL
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00E5FF] group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-sans text-xs tracking-widest font-black py-2 text-white/60 hover:text-white flex items-center gap-1.5"
          >
            LINKEDIN DIRECT
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF2D92] group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        {/* Separator line */}
        <div className="w-full h-[1px] bg-white/10 mb-10" />

        {/* BOTTOM BAR: copyright & payment cards */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-between">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <span className="font-sans text-xs text-white/40">
              © {new Date().getFullYear()} Let's Digital. All Rights Reserved.
            </span>
            <span className="flex items-center gap-1 text-[9px] font-mono text-white/20 uppercase tracking-widest">
              Built with High Performance Solid State Elements
            </span>
          </div>

          {/* Grayscale to color payment icons as requested:
              " copyright and payment icons (Visa, Mastercard, PayPal etc.) with subtle grayscale to color on hover" */}
          <div className="flex items-center gap-4">
            {paymentIcons.map((card) => (
              <div
                key={card.id}
                title={card.name}
                className="text-white/30 transition-all duration-300 hover:scale-115 cursor-help"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = card.color;
                  e.currentTarget.style.filter = 'drop-shadow(0 0 5px ' + card.color + '55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                  e.currentTarget.style.filter = '';
                }}
              >
                {card.svg}
              </div>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
