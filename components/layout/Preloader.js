"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // 1. Increment Counter Logic
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Wait a split second at 100% before lifting the curtain
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
      });
    }, 20); // Adjust speed here (Lower = Faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          // Slide up animation (The Curtain Effect)
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#020305] flex flex-col items-center justify-center text-white cursor-wait"
        >
          {/* Brand Name (Pulsing) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center"
          >
            <h1 className="font-serif text-4xl tracking-[0.2em] mb-2">AURA</h1>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              Parfumerie
            </p>
          </motion.div>

          {/* Percentage Counter - FIXED */}
          {/* Removed 'h-12' and 'overflow-hidden' to allow full text visibility */}
          <div className="flex items-center justify-center overflow-visible">
            <motion.span
              className="font-serif text-6xl md:text-8xl text-accent/80 block leading-none"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {counter}%
            </motion.span>
          </div>

          {/* Loading Line */}
          <div className="absolute bottom-10 left-0 w-full px-10">
            <motion.div className="h-[1px] bg-white/20 w-full">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${counter}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
