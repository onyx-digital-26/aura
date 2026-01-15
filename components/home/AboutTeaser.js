"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutTeaser() {
  const containerRef = useRef(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image moves slightly slower than scroll
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Text content moves up faster
  const yContent = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-40 bg-midnight overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* 1. LEFT: The Image (Parallax) */}
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm">
          <motion.div
            style={{ y: yImage }}
            className="absolute inset-0 w-full h-[120%]" // Taller height for parallax room
          >
            <Image
              src="/images/about-nose.jpg" // Ensure this exists
              alt="The Perfumer"
              fill
              className="object-cover opacity-80"
            />
            {/* Grain Overlay for "Film" look */}
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Floating Label */}
          <div className="absolute top-8 left-8 border border-white/20 bg-midnight/30 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="text-xs uppercase tracking-[0.2em] text-white">
              The Nose
            </span>
          </div>
        </div>

        {/* 2. RIGHT: The Content (Editorial Typography) */}
        <motion.div
          style={{ y: yContent }}
          className="relative z-10 flex flex-col justify-center"
        >
          <span className="text-accent text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-accent/50"></span>
            Heritage & Craft
          </span>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-10">
            Scent is the <br />
            <span className="text-white/20 italic">Memory</span> of <br />
            the Soul.
          </h2>

          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-md">
            "We do not create perfumes to mask the world, but to reveal it.
            Every drop is distilled from rare botanicals, harvested by
            moonlight, and aged in darkness."
          </p>

          <div className="flex flex-col gap-2">
            <span className="font-serif text-2xl text-accent italic">
              — Julianne Vossen
            </span>
            <span className="text-xs uppercase tracking-widest text-white/40">
              Master Perfumer
            </span>
          </div>

          <div className="mt-16">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-white border-b border-white/20 pb-2 hover:border-accent transition-colors"
            >
              <span className="text-sm uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
                Read Our Story
              </span>
              <ArrowUpRight
                className="text-white/50 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
