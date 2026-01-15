"use client";

import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealText from "@/components/ui/RevealText";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-midnight flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Ambience (Optional Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 404 Large Text */}
      <RevealText delay={0.2}>
        <h1 className="font-serif text-[8rem] md:text-[12rem] leading-none text-white/10 select-none">
          404
        </h1>
      </RevealText>

      {/* Message */}
      <div className="relative z-10 -mt-4 md:-mt-10">
        <RevealText delay={0.4}>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
            Essence Lost
          </h2>
        </RevealText>

        <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-10 font-light leading-relaxed">
          The scent you are looking for has evaporated into the ether. It may
          have been discontinued or never existed at all.
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link href="/">
            <MagneticButton className="px-8 py-4 bg-white text-midnight font-bold uppercase tracking-[0.2em] hover:bg-accent transition-colors rounded-sm">
              Return to Source
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
