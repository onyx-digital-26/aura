"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020305] border-t border-white/5 pt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TOP ROW: Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Promise */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl text-white mb-6">
              Distilling memories into liquid emotion since 2026.
            </h3>
            <div className="flex gap-4">
              <SocialLink href="#" label="Instagram" />
              <SocialLink href="#" label="TikTok" />
              <SocialLink href="#" label="Twitter" />
            </div>
          </div>

          {/* Sitemaps */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-widest text-white/30 mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/shop" label="Shop All" />
              <FooterLink href="/collections" label="Collections" />
              <FooterLink href="/about" label="The Nose" />
              <FooterLink href="/ingredients" label="Ingredients" />
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-white/30 mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/contact" label="Concierge" />
              <FooterLink href="/shipping" label="Shipping" />
              <FooterLink href="/returns" label="Returns" />
              <FooterLink href="/faq" label="FAQ" />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white/30 mb-6">
              The Inner Circle
            </h4>
            <p className="text-white/50 text-sm mb-4">
              Join for exclusive drops and private invites.
            </p>
            <form className="flex border-b border-white/20 pb-2 focus-within:border-accent transition-colors">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full outline-none text-white placeholder:text-white/20 text-sm"
              />
              <button className="text-white hover:text-accent uppercase text-xs tracking-widest font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright & Big Text */}
        <div className="border-t border-white/5 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] uppercase tracking-widest mb-10">
          <p>&copy; 2026 Aura Parfumerie. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* MASSIVE BRAND TEXT */}
        <div className="w-full text-center">
          <h1 className="font-serif text-[18vw] leading-[0.8] text-white/5 select-none pointer-events-none translate-y-[10%]">
            AURA
          </h1>
        </div>
      </div>
    </footer>
  );
}

// Sub-components for cleaner code
function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
      >
        {label}
        <ArrowUpRight
          size={12}
          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
        />
      </Link>
    </li>
  );
}

function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-midnight hover:bg-accent hover:border-accent transition-all duration-300"
    >
      <span className="sr-only">{label}</span>
      {/* Simple Icon Placeholder */}
      <span className="text-xs">↗</span>
    </a>
  );
}
