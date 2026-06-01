import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  ShoppingBag, 
  Palette, 
  Search, 
  Cpu, 
  Layers, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  PenTool, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  const servicesData: ServiceItem[] = [
    {
      id: 1,
      title: "Shopify Store Setup",
      description: "Complete Shopify store blueprinting. Complete configuration of native settings, payment terminals, catalog schemas, and shipping calculators.",
      image: "/src/assets/images/shopify_store_ui_1780320288455.png",
      icon: ShoppingBag,
      accentColor: "#FFD600"
    },
    {
      id: 2,
      title: "Shopify Store Design",
      description: "Custom UI/UX designed solely for extreme commerce conversion rates. Dynamic hero modules, optimized grid layouts, and modular design details.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
      icon: Palette,
      accentColor: "#FF2D92"
    },
    {
      id: 3,
      title: "Shopify Store SEO",
      description: "Comprehensive SEO architecture: search-friendly URLs, meta schema payloads, Google rich snippet setups, and speed indexing maps.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      icon: Search,
      accentColor: "#00E5FF"
    },
    {
      id: 4,
      title: "Shopify Theme Development",
      description: "Bespoke Liquid theme development from Figma prototypes. Modular custom sections, custom blocks, and reactive responsive frameworks.",
      image: "/src/assets/images/theme_coding_ui_1780320311391.png",
      icon: Cpu,
      accentColor: "#7B2FF7"
    },
    {
      id: 5,
      title: "Shopify Integration Services",
      description: "Seamless integration of ERP databases, inventory systems, CRM marketing suites, custom dropshipping networks, and complex middleware API layers.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
      icon: Layers,
      accentColor: "#FFD600"
    },
    {
      id: 6,
      title: "Digital Marketing Services",
      description: "Deep data attribution, setup of pixels, custom dynamic catalog feeds, automated email capture schemes, and extreme conversion retargeting.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f311?auto=format&fit=crop&q=80&w=600",
      icon: TrendingUp,
      accentColor: "#FF2D92"
    },
    {
      id: 7,
      title: "WooCommerce Development",
      description: "Cross-platform migration, setup of custom WooCommerce systems, custom actions/filters, and extreme WordPress speed integration frameworks.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      icon: DollarSign,
      accentColor: "#00E5FF"
    },
    {
      id: 8,
      title: "Speed Optimization",
      description: "95+ on Google PageSpeed Insights. Complete stylesheet stripping, image WebP compression, lazy loading injection, and script execution delays.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      icon: Zap,
      accentColor: "#7B2FF7"
    },
    {
      id: 9,
      title: "Canva Design",
      description: "Visually striking banners, product graphics, animated store promo models, and custom ad creatives tailored to drive immediate brand engagement.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      icon: PenTool,
      accentColor: "#FFD600"
    }
  ];

  return (
    <section
      id="services"
      className="relative py-28 bg-[#000000] overflow-hidden px-6 border-b border-white/5"
    >
      {/* Background neon visual indicators */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#FFD600]/3 filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF2D92]/3 filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans font-black text-xs tracking-widest text-[#FFD600] uppercase mb-4"
          >
            Extreme Architecture For High Commerce
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-[2.5rem] sm:text-[3.5rem] leading-tight text-white mb-6"
          >
            OUR PREMIUM SERVICES
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeadingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[3px] bg-gradient-to-r from-[#FFD600] to-[#FF2D92] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeadingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto"
          >
            We don't buy pre-made templates. We layout and engineer modular Shopify code bases tailored for elite digital brands that demand speed, scale, and high conversion rates.
          </motion.p>
        </div>

        {/* 3x3 Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Dynamic callout CTA Button section with reversing gradient */}
        <div className="flex flex-col items-center justify-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-5 font-sans">
              Need a completely custom, tailor-made setup?
            </p>
            
            {/* CTA Button as requested:
                "HIRE ME NOW!" with pink to blue gradient
                Hover: gradient reverses, scale 1.05, pulse glow, small icon spins */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 font-sans font-black text-xs sm:text-sm tracking-widest text-white rounded-full bg-gradient-to-r from-[#FF2D92] to-[#00E5FF] shadow-[0_4px_30px_rgba(255,45,146,0.3)] hover:shadow-[0_4px_35px_rgba(0,229,255,0.6)] cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95"
            >
              {/* CSS Gradient Reverse on Hover */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#FF2D92] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10">HIRE ME NOW!</span>
              <ExternalLink className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:rotate-[360deg]" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* Service Card with 3D Tilt, Neon glow layers, and running line animations */
function ServiceCard({ service, index }: { service: ServiceItem; index: number; key?: any }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Relative position normalized to center
    const centerX = box.width / 2;
    const centerY = box.height / 2;

    // Angle calculations (max tilt +- 10 degrees)
    const rotateX = (centerY - y) / 14; 
    const rotateY = (x - centerX) / 14;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const IconComponent = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${isHovered ? 'scale(1.04)' : 'scale(1)'}`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out',
      }}
      className={`relative w-full rounded-2xl p-[2px] transition-all duration-350 cursor-pointer bg-gradient-to-r ${
        isHovered 
          ? 'from-[#FF2D92] via-[#7B2FF7] to-[#00E5FF]' 
          : 'from-white/10 via-white/5 to-white/10'
      } bg-[length:200%_200%] animate-border-flow shadow-lg`}
    >
      {/* Main Inner card wrapper - Styled to be a full image box */}
      <div 
        className="relative w-full h-[400px] rounded-2xl overflow-hidden p-6 flex flex-col justify-end z-10 group border border-white/5"
      >
        {/* Full Image Background layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          {/* Frosted gradient darken overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30 group-hover:via-black/75 transition-all duration-300" />
        </div>

        {/* Sliding corner accents: slides in relative from outers on hover */}
        {/* Top-Left Accent lines (pink) */}
        <span 
          className="absolute top-0 left-0 w-10 h-[3px] bg-[#FF2D92] transition-transform duration-500 rounded-r-full pointer-events-none z-30"
          style={{ transform: isHovered ? 'translateX(0)' : 'translateX(-100%)' }}
        />
        <span 
          className="absolute top-0 left-0 w-[3px] h-10 bg-[#FF2D92] transition-transform duration-500 rounded-b-full pointer-events-none z-30"
          style={{ transform: isHovered ? 'translateY(0)' : 'translateY(-100%)' }}
        />

        {/* Bottom-Right Accent lines (cyan) */}
        <span 
          className="absolute bottom-0 right-0 w-10 h-[3px] bg-[#00E5FF] transition-transform duration-500 rounded-l-full pointer-events-none z-30"
          style={{ transform: isHovered ? 'translateX(0)' : 'translateX(100%)' }}
        />
        <span 
          className="absolute bottom-0 right-0 w-[3px] h-10 bg-[#00E5FF] transition-transform duration-500 rounded-t-full pointer-events-none z-30"
          style={{ transform: isHovered ? 'translateY(0)' : 'translateY(100%)' }}
        />

        {/* Content on top */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          
          {/* Top: Floating Micro Icon with vibrant glow */}
          <div className="flex justify-between items-start">
            <div 
              className="p-2.5 rounded-xl justify-center items-center flex border transition-all duration-300"
              style={{ 
                backgroundColor: service.accentColor,
                borderColor: service.accentColor,
                boxShadow: isHovered ? `0 0 20px ${service.accentColor}` : `0 0 8px ${service.accentColor}cc`
              }}
            >
              <IconComponent className="w-5.5 h-5.5 text-black" />
            </div>

            {/* Micro badge indicator */}
            <span className="text-[10px] uppercase font-mono text-white/30 tracking-widest font-bold">
              MODULE 0{index + 1}
            </span>
          </div>

          {/* Bottom segment: Text & Action nesting inside */}
          <div className="mt-auto space-y-3">
            {/* Title inside the image */}
            <h3 className="font-sans font-black text-xl text-white tracking-tight group-hover:text-[#FFD600] transition-colors duration-300">
              {service.title}
            </h3>
            
            {/* Description - legible and clear over darkened backdrop */}
            <p className="font-sans text-xs text-white/75 leading-relaxed group-hover:text-white/95 transition-colors duration-300">
              {service.description}
            </p>

            <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#FFD600]/90 group-hover:text-[#FFD600] pt-2 transition-colors duration-300">
              <span>DISCOVER SCHEMA</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
