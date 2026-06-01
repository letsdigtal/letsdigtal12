import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  photo: string;
  rating: number;
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: "Sohail Ahmed",
      role: "CEO & Co-Founder",
      company: "Allurebeauty",
      quote: "Shah Faisal engineered our custom Liquid storefront from scratch. The mobile speed of our catalog went from a sluggish 42 to a screaming 96 score. Our sales conversions bumped by over 28% within the first month. An absolute Shopify developer prodigy at Let's Digital!",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      rating: 5
    },
    {
      id: 2,
      name: "Sabrina Ghani",
      role: "Director of Operations",
      company: "Saeed Ghani",
      quote: "Migrating over 50,000 historical customer records and nested collections onto Shopify was a major technical roadblock. Shah Faisal designed custom API bridges and schema maps that imported everything beautifully without a minute of downtime. Brilliant speed optimizations!",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
      rating: 5
    },
    {
      id: 3,
      name: "Timothy Edwards",
      role: "Co-Founder",
      company: "Rollie Nation",
      quote: "We spent thousands on bloated Shopify theme templates that crushed our page loads. Shah Faisal rebuilt our checkout flow using clean modular Liquid 2.0. Our checkout latency dropped to under 1s. 'Let's Digital' is the best investment we've ever made.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
      rating: 5
    },
    {
      id: 4,
      name: "Hassan Al-Zubair",
      role: "Founder",
      company: "Fruits Sabzi Delivery",
      quote: "Faisal optimized our complex multi-warehouse physical delivery grid and synced it seamlessly with Shopify POS. Orders now route instantly to closest riders. Speed scores are flawless, and customer feedback is incredibly positive. Strongly recommend!",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval: rotates cards every 4 seconds as requested
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 2 < testimonialsData.length ? prev + 2 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 2 >= 0 ? prev - 2 : testimonialsData.length - 2));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 2 < testimonialsData.length ? prev + 2 : 0));
  };

  // Get active pair of testimonials
  const activePair = [
    testimonialsData[activeIndex],
    testimonialsData[activeIndex + 1]
  ];

  return (
    <section
      id="clients"
      ref={containerRef}
      className="relative py-28 bg-[#000000] overflow-hidden px-6 border-b border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF2D92]/3 filter blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFD600]/3 filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans font-black text-xs tracking-widest text-[#FFD600] uppercase mb-4"
          >
            ENDOURSED BY ELITE BRANDS
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-[2.5rem] sm:text-[3.2rem] text-white leading-tight mb-4"
          >
            What Clients Says
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-xs sm:text-sm max-w-lg mx-auto"
          >
            Real results from visionary Shopify founders and operational directors who trusted Let's Digital to scale their digital architectures.
          </motion.p>
        </div>

        {/* Testimonials 2-Card Row Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {activePair.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Carousel Manual Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full border border-white/10 bg-zinc-950 text-white hover:border-[#FFD600] hover:text-[#FFD600] hover:scale-105 active:scale-95 transition-all text-sm select-none cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-white/40">
              {activeIndex / 2 + 1} / {Math.ceil(testimonialsData.length / 2)}
            </span>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full border border-white/10 bg-zinc-950 text-white hover:border-[#FF2D92] hover:text-[#FF2D92] hover:scale-105 active:scale-95 transition-all text-sm select-none cursor-pointer"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Individual Testimonial Card with specific design requirements:
   "Card design: yellow top, pink bottom, quote icons, profile photo. Hover: card lifts, stars twinkle." */
function TestimonialCard({ testimonial }: { testimonial: Testimonial; key?: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl overflow-hidden bg-zinc-950 flex flex-col justify-between border-2 border-white/10 group min-h-[380px]"
      style={{
        /* Hover card lifts as requested */
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)',
        boxShadow: isHovered 
          ? '0 15px 40px rgba(255, 45, 146, 0.2), 0 0 20px rgba(255, 214, 0, 0.1)' 
          : '0 4px 20px rgba(0,0,0,0.5)',
        transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s, border-color 0.4s',
      }}
    >
      {/* CARD BODY WRAPPER */}
      <div className="flex flex-col h-full justify-between">
        
        {/* YELLOW TOP SECTION: contains the Quote, Rating, and Quote icon. Styled as requested. */}
        <div 
          className={`p-6 sm:p-8 rounded-t-2xl transition-all duration-500 flex flex-col gap-4 ${
            isHovered ? 'bg-[#FFD600]/15' : 'bg-[#FFD600]/5'
          }`}
          style={{ borderBottom: '1px solid rgba(255, 214, 0, 0.2)' }}
        >
          <div className="flex items-center justify-between">
            {/* Quote icon */}
            <div className="w-10 h-10 rounded-full bg-[#FFD600]/20 flex items-center justify-center">
              <Quote className="w-5 h-5 text-[#FFD600]" />
            </div>

            {/* TWINKLING STAR RATING: "Hover: stars twinkle" */}
            <div className="flex items-center gap-1.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 text-[#FFD600] fill-current transition-transform duration-500 ${
                    isHovered ? 'scale-125 rotate-[144deg] drop-shadow-[0_0_8px_#FFD600]' : ''
                  }`}
                  style={{
                    transitionDelay: `${i * 100}ms`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Actual testimonial message */}
          <p className="font-sans text-sm text-zinc-100 italic leading-relaxed font-medium">
            "{testimonial.quote}"
          </p>
        </div>

        {/* PINK BOTTOM SECTION: Contains client profile photo and names. Styled as requested. */}
        <div 
          className={`p-6 sm:p-8 rounded-b-2xl transition-all duration-500 flex items-center justify-between ${
            isHovered ? 'bg-[#FF2D92]/15' : 'bg-[#FF2D92]/5'
          }`}
          style={{ borderTop: '1px solid rgba(255, 45, 146, 0.2)' }}
        >
          <div className="flex items-center gap-4">
            {/* Profile photo */}
            <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#FFD600] to-[#FF2D92] shadow-md shrink-0">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-sans font-black text-sm text-white group-hover:text-[#FFD600] transition-colors uppercase tracking-wider">
                {testimonial.name}
              </span>
              <span className="font-sans text-[11px] text-zinc-400 font-medium">
                {testimonial.role}
              </span>
            </div>
          </div>

          <div className="text-right flex flex-col justify-center">
            <span className="font-mono text-[10px] text-white/50 tracking-wider">FOUNDER OF</span>
            <span className="font-sans font-extrabold text-[#00E5FF] text-xs sm:text-sm drop-shadow-[0_0_5px_rgba(0,229,255,0.3)]">
              {testimonial.company}
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
