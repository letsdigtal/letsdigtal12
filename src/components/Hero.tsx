import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Facebook, Linkedin, Instagram, Youtube, Star, ArrowDown } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

export default function Hero() {
  const [typedSelf, setTypedSelf] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const [titleFinished, setTitleFinished] = useState(false);
  const [count, setCount] = useState(0);

  // Typewriter effect logic
  useEffect(() => {
    const fullText = "Hello I'm Shah Faisal";
    let index = 0;
    setTypedSelf('');
    const interval = setInterval(() => {
      setTypedSelf(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setTitleFinished(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Title typewriter progression (Shopify Store Developer)
  useEffect(() => {
    if (!titleFinished) return;
    const fullTitle = "Shopify Store Developer";
    let index = 0;
    setTypedTitle('');
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.substring(0, index + 1));
      index++;
      if (index >= fullTitle.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [titleFinished]);

  // Client counter count-up animation
  useEffect(() => {
    const target = 3560;
    const duration = 2000; // 2 seconds
    const start = 0;
    const stepTime = Math.abs(Math.floor(duration / 100));
    let current = start;
    const timer = setInterval(() => {
      current += Math.ceil(target / 100);
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleNextSection = () => {
    const whatWeDoSec = document.querySelector('#what-wedo');
    if (whatWeDoSec) {
      whatWeDoSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] w-full pt-28 pb-16 flex items-center justify-center bg-black bg-grid-pattern overflow-hidden px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#7B2FF7]/10 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-radial from-[#00E5FF]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2/3 h-60 bg-radial from-[#FF2D92]/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Dynamic star particles background */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Intros & Meta */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Label fade in */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-12 h-[2px] bg-[#FFD600] inline-block" />
            <span className="text-sm font-semibold tracking-widest text-[#FFD600] uppercase font-sans">
              Introducing
            </span>
          </motion.div>

          {/* Typewriter Header */}
          <h1 className="font-sans font-extrabold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.2rem] leading-tight text-white mb-2">
            {typedSelf}
            {!titleFinished && (
              <span className="inline-block w-[3px] h-[36px] sm:h-[48px] bg-[#FFD600] ml-1 animate-pulse align-middle" />
            )}
          </h1>

          {/* Core Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="font-sans font-black text-[2.1rem] sm:text-[3.1rem] lg:text-[3.8rem] text-[#FFD600] leading-none tracking-tight inline-block filter drop-shadow-[0_0_12px_rgba(255,214,0,0.3)] animate-glow-pulse">
              {typedTitle || (titleFinished ? "Shopify Store Developer" : " ")}
              {titleFinished && typedTitle.length < "Shopify Store Developer".length && (
                <span className="inline-block w-[3px] h-[30px] sm:h-[40px] bg-[#FFD600] ml-1 animate-pulse align-middle" />
              )}
            </h2>
            
            {/* Elegant Dark style themed quotation border-l box */}
            <div className="mt-6 p-1 border-l-4 border-[#FFD600] bg-white/5 backdrop-blur-sm max-w-xl rounded-r-lg">
              <p className="text-sm italic text-white/90 p-4 leading-relaxed">
                Building high-performance e-commerce experiences that turn visitors into loyal customers. Specialist in Shopify optimization and premium UI design.
              </p>
            </div>
          </motion.div>

          {/* Elegant Dark theme Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => {
                const contactSec = document.querySelector('#contact');
                if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#FF2D92] to-[#7B2FF7] text-white rounded-full font-bold text-xs tracking-widest hover:brightness-110 shadow-[0_10px_30px_rgba(255,45,146,0.3)] cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              HIRE ME NOW!
            </button>
            <button
              onClick={() => {
                const workSec = document.querySelector('#recent-work');
                if (workSec) workSec.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-xs tracking-widest hover:bg-white hover:text-black hover:border-white cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              VIEW WORK
            </button>
          </motion.div>

          {/* Satisfied Clients stack + counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 mt-2"
          >
            <div className="flex -space-x-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                alt="Client Review"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full border-2 border-black object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                alt="Client Review"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full border-2 border-black object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
                alt="Client Review"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full border-2 border-black object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
                alt="Client Review"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full border-2 border-black object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-extrabold text-[#FFD600] text-2xl tracking-normal">
                  {count.toLocaleString()}+
                </span>
                <span className="text-white/60 text-xs font-semibold uppercase tracking-widest font-sans">
                  Active
                </span>
              </div>
              <span className="text-white/80 text-xs font-sans mt-0.5">
                Satisfied Shopify Brand Clients Globally
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10"
          >
            <button
              onClick={handleNextSection}
              className="group flex items-center justify-center gap-2 text-white/50 hover:text-[#FFD600] transition-colors font-sans text-xs uppercase tracking-widest bg-transparent cursor-pointer"
            >
              Discover Shah Faisal's Work
              <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

        </div>

        {/* Right Column: Orbiting Avatar image within double orbiting ring */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] select-none flex items-center justify-center"
          >
            {/* Pulsing Backglow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF2D92] via-[#7B2FF7] to-[#00E5FF] opacity-25 blur-3xl animate-pulse" />

            {/* Elegant Dark - Top Rated Plus Freelancer Badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-3 md:p-4 bg-black/85 backdrop-blur-md border border-[#FFD600]/30 rounded-2xl z-30 shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-2 animate-bounce-slow">
              <span className="text-[#FFD600] text-xl drop-shadow-[0_0_8px_#FFD600]">★</span>
              <div className="text-left">
                <p className="text-[9px] font-extrabold opacity-60 uppercase text-white tracking-wider leading-none">Top Rated</p>
                <p className="text-[11px] font-black text-white whitespace-nowrap mt-0.5">Plus Freelancer</p>
              </div>
            </div>

            {/* Orbiting Ring 1 (CW) */}
            <div className="absolute w-[110%] h-[110%] border border-dashed border-white/20 rounded-full animate-orbit-cw flex items-center justify-center">
              <span className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
              <span className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 rounded-full bg-[#FF2D92] shadow-[0_0_8px_#FF2D92]" />
            </div>

            {/* Orbiting Ring 2 (CCW) */}
            <div className="absolute w-[124%] h-[124%] border border-dotted border-[#00E5FF]/20 rounded-full animate-orbit-ccw flex items-center justify-center">
              <span className="absolute top-[40%] right-0 w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_12px_#00E5FF]" />
              <span className="absolute bottom-[30%] left-[5%] w-1.5 h-1.5 rounded-full bg-[#FFD600] shadow-[0_0_8px_#FFD600]" />
            </div>

            {/* Star sparkles inside orbiting circle */}
            <div className="absolute top-[12%] right-[16%] animate-ping text-white opacity-80 decoration-0 pointer-events-none">
              <Star className="w-3.5 h-3.5 text-[#FFD600] fill-current" />
            </div>
            <div className="absolute bottom-[18%] left-[10%] animate-pulse text-white opacity-50 decoration-0 pointer-events-none">
              <Star className="w-3 h-3 text-[#FF2D92] fill-current" />
            </div>

            {/* Ring Border with Pink-to-Orange Gradient */}
            <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-tr from-[#FF2D92] to-[#FFD600] shadow-[0_0_40px_rgba(255,45,146,0.3)]">
              {/* Inner Circle Frame */}
              <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center p-3">
                {/* Float-animated Avatar portrait */}
                <div className="animate-float w-full h-full relative flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-white/10">
                    {/* Embedded auto-playing loop video */}
                    <video
                      src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05429d84122460b1b22b11509c1581e&profile_id=139&oauth2_token_id=57447761"
                      className="w-full h-full object-cover rounded-full"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    {/* Glassy overlay panel */}
                    <div className="absolute bottom-6 inset-x-6 glass-light py-2 px-3 rounded-xl border border-white/20 text-center flex items-center justify-center gap-1.5 shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-pulse" />
                      <span className="text-[10px] tracking-widest font-extrabold uppercase font-sans text-white">
                        AVAILABLE FOR CONTRACTS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Slide-in Vertical Social Rail on the right edge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute right-6 bottom-16 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col items-center gap-5 z-25 bg-black/40 backdrop-blur-md p-3 lg:p-4 rounded-full border border-white/5"
      >
        <span className="hidden lg:block w-[1px] h-10 bg-white/20" />
        
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#00E5FF] hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgb(0,229,255)] p-1.5"
          aria-label="Visit Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#FFD600] hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgb(255,214,0)] p-1.5"
          aria-label="Visit LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#FF2D92] hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgb(255,45,146)] p-1.5"
          aria-label="Visit Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#7B2FF7] hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgb(123,47,247)] p-1.5"
          aria-label="Visit YouTube"
        >
          <Youtube className="w-5 h-5" />
        </a>

        <span className="hidden lg:block w-[1px] h-10 bg-white/20" />
      </motion.div>
    </section>
  );
}
