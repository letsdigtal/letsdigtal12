import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Services';
import RecentWork from './components/RecentWork';
import AboutShopifyFAQ from './components/AboutShopifyFAQ';
import Testimonials from './components/Testimonials';
import ContactSpotlight from './components/ContactSpotlight';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('HOME');

  // Watch scroll positions to auto-update active navbar links
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', name: 'HOME' },
        { id: 'about', name: 'ABOUT' },
        { id: 'services', name: 'SERVICES' },
        { id: 'portfolio', name: 'PORTFOLIO' },
        { id: 'contact', name: 'CONTACT' },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-black text-white relative font-sans selection:bg-[#FFD600] selection:text-black">
      {/* Soft neon glow Custom cursor dot for desktop clients */}
      <CustomCursor />

      {/* Transparent Sticky Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single-View Segment Modules */}
      <main id="portfolio-main-content">
        {/* HERO: Introducing typewriter, client trackers, orbiting rings */}
        <Hero />

        {/* MISSION & WHAT WE DO: Interactive mouse word highlights & custom dashboard player */}
        <WhatWeDo />

        {/* SERVICES: 3x3 tilt follow cards & neon corner slides */}
        <Services />

        {/* RECENT WORK: Case study collections with 5deg card tilt overlays */}
        <RecentWork />

        {/* ABOUT SHOPIFY & FAQ: White contrasting layout + smooth height FAQ accordions */}
        <AboutShopifyFAQ />

        {/* TESTIMONIALS: 2-card carousel autoplay & yellow/pink split profile frame */}
        <Testimonials />

        {/* CONTACT SPOTLIGHT: Radial gradient mouse spotlight and frosted contact form */}
        <ContactSpotlight />
      </main>

      {/* FOOTER: Copiable email banner & hovered payment logos */}
      <Footer />
    </div>
  );
}
