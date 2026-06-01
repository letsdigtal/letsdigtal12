import { useState, useEffect } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string, name: string) => {
    setMobileMenuOpen(false);
    setActiveSection(name);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#000000]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with crown */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home', 'HOME');
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative">
            {/* Pulsing crown logo */}
            <Crown className="w-5 h-5 text-[#FFD600] filter drop-shadow-[0_0_8px_#FFD600] transition-transform duration-300 group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF2D92]" />
          </div>
          <span className="font-sans font-extrabold text-[1.4rem] tracking-tight text-white flex items-center">
            LD <span className="text-[#FFD600] font-light text-base ml-1.5 opacity-90">Let's Digital</span>
          </span>
        </a>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.name);
                }}
                className={`relative font-sans text-xs tracking-widest font-semibold py-2 transition-all duration-300 ${
                  isActive
                    ? 'text-[#FFD600] drop-shadow-[0_0_8px_rgba(255,214,0,0.6)]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {/* Underline slide translation */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] bg-[#FFD600] transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_10px_#FFD600]' : 'w-0 hover-target'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Action Button: Hire Me Shortcut */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact', 'CONTACT');
            }}
            className="relative inline-flex items-center justify-center px-4 py-2 font-semibold text-xs tracking-wider rounded-lg border border-[#FFD600]/30 hover:border-[#FFD600] text-white hover:text-black bg-transparent hover:bg-[#FFD600] transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,214,0,0.05)] hover:shadow-[0_0_20px_rgba(255,214,0,0.4)]"
          >
            LET'S CHAT
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/90 hover:text-[#FFD600] focus:outline-none p-1 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href, link.name);
                    }}
                    className={`font-sans tracking-widest text-sm font-semibold pb-1 transition-all ${
                      isActive
                        ? 'text-[#FFD600] border-b-2 border-[#FFD600] max-w-max'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact', 'CONTACT');
                }}
                className="inline-flex items-center justify-center py-2.5 rounded-lg font-bold text-xs tracking-widest text-center mt-2 border border-[#FFD600] text-[#FFD600] hover:bg-[#FFD600] hover:text-black transition-colors"
              >
                HIRE ME NOW!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
