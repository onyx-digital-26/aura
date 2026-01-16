"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LiquidHero() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false); // 1. Add State

  // 2. Set Mounted to true after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Bottle moves slower than text (Parallax)
  const yBottle = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* 1. LIQUID BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          {/* Ensure you have this file in public/videos/ */}
          <source src="/videos/hero-liquid.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay to blend into the rest of the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/30 via-midnight/60 to-midnight" />
      </div>

      {/* 2. CENTER CONTENT */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 h-full flex flex-col items-center justify-center">
        {/* Top Text */}
        <motion.h2
          // 3. Apply scroll styles ONLY if mounted
          style={isMounted ? { y: yText, opacity: opacityFade } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-xs md:text-sm tracking-[0.5em] uppercase text-accent mb-4 md:mb-8 text-center"
        >
          The Essence of Ether
        </motion.h2>

        {/* Main Title */}
        <motion.h1
          // 3. Apply scroll styles ONLY if mounted
          style={isMounted ? { y: yText, opacity: opacityFade } : {}}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-6xl md:text-[9rem] lg:text-[11rem] leading-none text-white text-center mix-blend-overlay opacity-80"
        >
          EUPHORIA
        </motion.h1>

        {/* Floating Bottle */}
        <motion.div
          // 3. Apply scroll styles ONLY if mounted
          style={isMounted ? { y: yBottle } : {}}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-[200px] h-[300px] md:w-[350px] md:h-[500px] -mt-10 md:-mt-24 z-20"
        >
          {/* Breathing Animation for the bottle */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 md:bottom-20 z-30"
        >
          <Link
            href="/shop"
            className="group relative px-8 py-3 overflow-hidden rounded-full glass-panel flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            <span className="relative text-xs uppercase tracking-[0.2em] z-10">
              Discover the Collection
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
      <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
    </section>
  );
}
