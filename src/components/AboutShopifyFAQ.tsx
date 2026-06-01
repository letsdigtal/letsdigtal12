import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown, Code, Zap, ShieldCheck, HelpCircle, Store } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function AboutShopifyFAQ() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Why is Page Speed scoring absolutely crucial for Shopify stores?",
      answer: "Every 100ms of latency cuts conversion margins by up to 7%. Standard page builders inject bloated scripts and bulky tracking nodes. By coding native Liquid sections, compressing assets dynamically, and delaying tracking scripts, we deliver scores of 95+ on Google PageSpeed Insights, guaranteeing a high-performance experience."
    },
    {
      id: 2,
      question: "How does custom Liquid code compare to standard Shopify page-builder drag/drop apps?",
      answer: "Apps like Shogun, PageFly, or GemPages are script-bloated. They download tons of unused CSS and JS files on every single page load. Custom Liquid code is directly native to Shopify's core renderer: it is lightning fast, 100% responsive, complies with Shopify 2.0 section architecture, and can be easily managed by your staff."
    },
    {
      id: 3,
      question: "Can you migrate our legacy store (WooCommerce / Magento / Custom) to Shopify?",
      answer: "Yes, we handle complete data migration. This includes moving customer accounts, order logs, product models, metadata, and blog posts without losing current SEO link power. We configure 301 redirects to preserve rankings so your traffic is completely secure."
    },
    {
      id: 4,
      question: "What is your standard development timeline for custom Shopify brand setup?",
      answer: "A complete custom design from Figma to custom 2.0 responsive Liquid code takes 3 to 4 weeks. Standard integrations and speed optimizations can be completed in 5 to 7 days, depending on the current complexity of your store's setup."
    },
    {
      id: 5,
      question: "How do your friction-free checkout patterns increase product sales margins?",
      answer: "We implement custom 1-click cart drawers, progress-meter shipping counters, and direct express checkout badges (Apple Pay, Shopify Pay). These patterns eliminate choice paralysis, guiding your buyers to complete their purchase smoothly."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 bg-[#020202] text-white overflow-hidden px-6 border-t border-b border-white/5"
    >
      {/* Background accents matching the theme */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #444 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#7B2FF7] blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#FF2D92] blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Descriptive text fades in & FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* About Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[2.5px] bg-[#FF2D92]" />
              <span className="text-xs font-bold tracking-widest text-[#FF2D92] uppercase font-sans">
                Core Shopify Masterclass
              </span>
            </motion.div>
 
            {/* Core Header */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-black text-[2.4rem] sm:text-[3.2rem] leading-tight text-white mb-6 tracking-tight"
            >
              NATIVE LIQUID FIRST.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D92] via-[#FFD600] to-[#00E5FF] drop-shadow-[0_0_15px_rgba(255,45,146,0.15)]">
                ZERO DRAG APP BLOWBACK.
              </span>
            </motion.h2>
 
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-12"
            >
              Shah Faisal and the Let's Digital team believe that web design is not about piling third-party plugins. For deep organic search visibility and lightning conversions, your brand requires native modular blocks. Our customized approach delivers hand-coded structures that load instantly on mobile screens, and stay secure under Shopify's strict guidelines.
            </motion.p>
 
            {/* FAQ Accordion header */}
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle className="w-5 h-5 text-[#FFD600] drop-shadow-[0_0_5px_rgba(255,214,0,0.5)]" />
              <h3 className="font-sans font-extrabold text-white text-lg sm:text-xl tracking-tight uppercase">
                FREQUENTLY ASKED QUESTIONS
              </h3>
            </div>
 
            {/* The Accordion List with height animating */}
            <div className="flex flex-col gap-4">
              {faqData.map((faq) => {
                const isOpen = openFAQ === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#FF2D92] bg-zinc-950/70 shadow-[0_5px_25px_rgba(255,45,146,0.12)]'
                        : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                    }`}
                  >
                    {/* FAQ Header toggle */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 select-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans font-bold text-sm sm:text-base text-white hover:text-[#FFD600] transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#FF2D92]' : ''
                        }`}
                      />
                    </button>
 
                    {/* FAQ Answer with hardware height animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-white/5 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
 
          </div>
 
          {/* Right Column: Sticky illustration representing a custom Shopify speed gauge & editor code breakdown */}
          <div className="lg:col-span-5 md:sticky md:top-28 pt-8 lg:pt-0">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full rounded-2xl bg-[#09090b]/80 backdrop-blur-md border border-white/10 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] select-none text-white relative overflow-hidden"
            >
              {/* Top Bar for Code Illustration */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="text-[10px] text-zinc-400 font-mono ml-2">lets_digital_speed.liquid</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[9px] text-zinc-400">SYNC ACTIVE</span>
                </div>
              </div>

              {/* Speed Score Gauge widget */}
              <div className="flex flex-col items-center justify-center mb-8 bg-black/40 border border-zinc-800 rounded-xl p-5">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  {/* Gauge SVG ring */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      className="stroke-zinc-800 fill-none"
                      strokeWidth="5"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      className="stroke-green-500 fill-none"
                      strokeWidth="6"
                      strokeDasharray="301"
                      strokeDashoffset="6" // Represents a 98% score
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="font-sans font-black text-3xl text-white">98</span>
                    <span className="text-[8px] font-mono tracking-widest text-[#FFD600] uppercase font-bold">MOBILE SPEED</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 w-full justify-around text-center">
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-400">LCP</span>
                    <span className="font-sans text-xs font-bold text-green-400">0.8s</span>
                  </div>
                  <div className="w-[1px] h-6 bg-zinc-800" />
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-400">TBT</span>
                    <span className="font-sans text-xs font-bold text-green-400">45ms</span>
                  </div>
                  <div className="w-[1px] h-6 bg-zinc-800" />
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-400">CLS</span>
                    <span className="font-sans text-xs font-bold text-green-400">0.01</span>
                  </div>
                </div>
              </div>

              {/* Liquid Code Breakdown blocks */}
              <div className="flex flex-col gap-3 font-mono text-[10.5px]">
                <div className="flex items-start gap-2 text-zinc-400">
                  <span className="text-zinc-600 block w-4 select-none">23</span>
                  <p>
                    <span className="text-[#FF2D92]">{"{%"}</span> <span className="text-[#00E5FF]">schema</span> <span className="text-[#FF2D92]">{"%}"}</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 text-zinc-100">
                  <span className="text-zinc-600 block w-4 select-none">24</span>
                  <p className="pl-4">
                    <span className="text-[#FFD600]">{"{ "}</span> "name": <span className="text-green-400">"Accelerated Grid"</span>, "max_blocks": 9, <span className="text-[#FFD600]">{" }"}</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 text-zinc-400 text-[#00E5FF]">
                  <span className="text-zinc-600 block w-4 select-none">25</span>
                  <p className="pl-4">
                    {"<div class=\"shopify-section-grid transition-all\">"}
                  </p>
                </div>
                <div className="flex items-start gap-2 text-[#7B2FF7]">
                  <span className="text-zinc-600 block w-4 select-none">26</span>
                  <p className="pl-8">
                    {"{%"} <span className="text-amber-500">for</span> block <span className="text-amber-500">in</span> section.blocks {"%}"}
                  </p>
                </div>
                <div className="flex items-start gap-2 text-[#FFD600]">
                  <span className="text-zinc-600 block w-4 select-none">27</span>
                  <p className="pl-12">
                     {"{{ block.settings.premium_image | image_url: width: 600 | image_tag: preload: true, fetchpriority: 'high' }}"}
                  </p>
                </div>
                <div className="flex items-start gap-2 text-[#7B2FF7]">
                  <span className="text-zinc-600 block w-4 select-none">28</span>
                  <p className="pl-8">
                    {"{%"} <span className="text-amber-500">endfor</span> {"%}"}
                  </p>
                </div>
              </div>

              {/* Status footer labels in block */}
              <div className="border-t border-zinc-900 mt-6 pt-4 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1 text-[#FFD600]">
                  <Zap className="w-3 h-3" />
                  ACCELERATED MODE
                </span>
                <span>SEO SCHEMA ENCRYPTED</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
