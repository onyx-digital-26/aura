"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText"; // Ensure you created this file above

export default function About() {
  return (
    <div className="bg-midnight min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-accent text-xs uppercase tracking-[0.4em] mb-6 block"
        >
          Established 2026
        </motion.span>

        <div className="flex justify-center mb-10">
          <RevealText>
            <h1 className="font-serif text-5xl md:text-8xl text-white leading-tight">
              The Nose Behind <br /> The Aura
            </h1>
          </RevealText>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
        >
          Founded by master perfumer Julianne Vossen, Aura is a rebellion
          against the synthetic. We believe that scent is the only time travel
          humanity has achieved.
        </motion.p>
      </section>

      {/* 2. LARGE IMAGE BANNER (Parallax-ish feel via CSS or fixed positioning) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mb-24">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/about-nose.jpg" // Ensure this image exists in public/images
            alt="The Perfumer"
            fill
            className="object-cover opacity-80"
          />
        </motion.div>
      </section>

      {/* 3. THE PHILOSOPHY (Grid) */}
      <section className="max-w-[1400px] mx-auto px-6 pb-40 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Column */}
        <div>
          <RevealText className="mb-8">
            <h3 className="text-white font-serif text-4xl">
              Alchemy & Science
            </h3>
          </RevealText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/50 leading-loose mb-8 text-lg font-light">
              Our lab is located in the hills of Grasse, France, but our
              ingredients come from the wildest corners of the earth. From the
              resinous Ouds of Southeast Asia to the mineral-rich salts of the
              Atlantic coast.
            </p>
            <p className="text-white/50 leading-loose text-lg font-light">
              We use a proprietary "Cold Extraction" method that preserves the
              molecular integrity of the petals, ensuring that what you smell in
              the bottle is exactly what you would smell in the field at
              midnight.
            </p>
          </motion.div>
        </div>

        {/* Right Column (Stats) */}
        <div className="grid grid-cols-1 gap-12">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-white/10 pt-6"
          >
            <span className="text-4xl md:text-5xl text-accent font-serif block mb-2">
              100%
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Natural Origin Ingredients
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border-t border-white/10 pt-6"
          >
            <span className="text-4xl md:text-5xl text-accent font-serif block mb-2">
              45 Days
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Maceration Period
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-white/10 pt-6"
          >
            <span className="text-4xl md:text-5xl text-accent font-serif block mb-2">
              Zero
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Synthetic Fixatives
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
