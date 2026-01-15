"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping function. If you drag/scroll
   * extremely fast, we ensure the text wraps around seamlessly.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This switches direction based on scroll polarity
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="block mr-10 md:mr-24">{children} </span>
        <span className="block mr-10 md:mr-24">{children} </span>
        <span className="block mr-10 md:mr-24">{children} </span>
        <span className="block mr-10 md:mr-24">{children} </span>
      </motion.div>
    </div>
  );
}

export default function VelocityScroll() {
  return (
    <section className="py-20 md:py-32 bg-midnight overflow-hidden relative z-10 border-t border-white/5">
      <div className="opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">
        {/* ROW 1: Moves Left */}
        <ParallaxText baseVelocity={-2}>
          <span className="text-6xl md:text-9xl font-serif uppercase tracking-tight text-transparent stroke-text">
            Ethereal Scent • Pure Essence • timeless •
          </span>
        </ParallaxText>

        {/* ROW 2: Moves Right */}
        <div className="mt-4 md:mt-10">
          <ParallaxText baseVelocity={2}>
            <span className="text-6xl md:text-9xl font-serif uppercase tracking-tight text-transparent stroke-text">
              Rare Ingredients • Paris • Tokyo • New York •
            </span>
          </ParallaxText>
        </div>
      </div>
    </section>
  );
}
