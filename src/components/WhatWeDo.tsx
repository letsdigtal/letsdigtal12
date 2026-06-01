import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Play, Pause, VolumeX, Volume2, Maximize, Smartphone, Laptop, Check } from 'lucide-react';

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Auto play when scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Browser auto-play policy might requires user interaction
            });
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const clickTime = parseFloat(e.target.value);
    videoRef.current.currentTime = clickTime;
    setCurrentTime(clickTime);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Split description text to hover highlight word-by-word
  const wordByWordText = "At Let's Digital we specialize in engineering hyper-optimized architectures for Shopify stores. From seamless custom UI integrations to headless builds, SEO architecture, and deep speed optimizations, we craft online experiences that leave standard setups in the dust. Shah Faisal's custom methodology integrates cutting-edge frontend conversion patterns with Shopify's robust commerce API. We don't just assemble templates; we build highly interactive, high-performance engines that power multi-million dollar brands worldwide.";

  const words = wordByWordText.split(" ");

  return (
    <section
      id="what-wedo"
      ref={containerRef}
      className="relative py-24 bg-black overflow-hidden px-6 border-b border-white/5"
    >
      {/* Background visual gradients */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-[#7B2FF7]/5 filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#FF2D92]/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Words highlight text block */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans font-black text-xs tracking-widest text-[#FFD600] uppercase mb-4"
            >
              OUR MISSION & METHODOLOGY
            </motion.h4>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-[2.2rem] sm:text-[3rem] text-white leading-tight mb-8"
            >
              WHAT WE DO <span className="text-[#FFD600]" style={{ textShadow: '0 0 10px rgba(255, 214, 0, 0.4)' }}>?</span>
            </motion.h3>

            {/* Hover highlighting word layout block */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap font-sans text-white/70 text-base sm:text-lg leading-relaxed select-none"
            >
              {words.map((word, idx) => (
                <span
                  key={idx}
                  className="hover:text-[#FFD600] inline-block transition-all duration-150 mr-1.5 cursor-default hover:scale-105 hover:drop-shadow-[0_0_5px_#FFD600]"
                >
                  {word}
                </span>
              ))}
            </motion.div>

            {/* Highlights bullet features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFD600]/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#FFD600]" />
                </div>
                <span className="text-white/80 text-sm font-sans font-medium">Headless Shopify Builds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF2D92]/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#FF2D92]" />
                </div>
                <span className="text-white/80 text-sm font-sans font-medium">95+ Speed Score Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#00E5FF]" />
                </div>
                <span className="text-white/80 text-sm font-sans font-medium">Custom Shopify App Architect</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7B2FF7]/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#7B2FF7]" />
                </div>
                <span className="text-white/80 text-sm font-sans font-medium">Frictionless UX Checkout Flows</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Video frame with custom dark skin controls */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] border border-white/10 group bg-zinc-950 transition-all duration-300 hover:scale-[1.02] hover:border-[#FFD600]/40"
            >
              {/* Actual HTML5 Video */}
              <video
                ref={videoRef}
                src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05429d84122460b1b22b11509c1581e&profile_id=139&oauth2_token_id=57447761"
                className="w-full h-auto aspect-video object-cover"
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={handlePlayPause}
                playsInline
              />

              {/* Central Custom Play Button overlay (fades on hover / active state) */}
              <div
                onClick={handlePlayPause}
                className={`absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
              >
                <div className="relative flex items-center justify-center">
                  {/* Subtle outer breathing glow wave */}
                  <div className="absolute inset-x-0 inset-y-0 rounded-full bg-[#FFD600]/15 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                  {/* Secondary dashed high-tech glass perimeter */}
                  <div className="absolute -inset-3 rounded-full border border-dashed border-[#FFD600]/30 animate-spin bg-transparent pointer-events-none" style={{ animationDuration: '30s' }} />
                  {/* Double solid borders and frosted edge */}
                  <div className="absolute -inset-1.5 rounded-full border border-[#FFD600]/20 bg-[#FFD600]/5 backdrop-blur-xs pointer-events-none" />
                  
                  {/* Main polished solid golden glowing body */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD600] via-[#FFE54C] to-[#FFAB00] flex items-center justify-center shadow-[0_0_30px_#FFD600,inset_0_1px_1px_rgba(255,255,255,0.4)] scale-100 group-hover:scale-108 active:scale-95 transition-all duration-300">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-black fill-current" />
                    ) : (
                      <Play className="w-6 h-6 text-black fill-current ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* Custom Dark Player Skin Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col gap-3 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                
                {/* Seekbar range input slider */}
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FFD600] focus:outline-none"
                    aria-label="Video seek range"
                  />
                </div>

                {/* Left/Right Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="text-white hover:text-[#FFD600] transition-colors"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={handleMuteToggle}
                      className="text-white hover:text-[#FFD600] transition-colors"
                      aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    {/* Timer stamp */}
                    <span className="text-[10px] font-mono text-white/60">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right layout */}
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 py-1 px-2.5 rounded-md bg-zinc-900 border border-white/10 text-[9px] font-mono text-white/50">
                      <Laptop className="w-3 h-3" />
                      HD PREVIEW
                    </span>
                    <button
                      onClick={handleFullscreen}
                      className="text-white hover:text-[#FFD600] transition-colors"
                      aria-label="Go fullscreen"
                    >
                      <Maximize className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
            
            {/* Visual labels beneath video */}
            <div className="flex justify-between items-center w-full mt-4 p-2.5 rounded-xl border border-white/5 bg-zinc-950/60">
              <span className="text-[10px] font-mono text-white/40 tracking-wider">PROJECT CODE: S-FAISAL_0346</span>
              <span className="text-[10px] font-mono text-white/40 tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF55] animate-ping" />
                VIRTUAL WORKSPACE DEMO
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
