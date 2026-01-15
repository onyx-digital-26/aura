"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useShop } from "@/context/ShopContext";

// --- UPDATED LINKS (Matching our created pages) ---
const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "The Nose", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Ingredients", href: "/ingredients" },
  { name: "Scent Quiz", href: "/quiz" },
  { name: "Concierge", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { openCart, cartCount } = useShop();

  // --- ANIMATION VARIANTS ---
  const menuVars = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const linkVars = {
    initial: { y: 30, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* --- MAIN HEADER BAR --- */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* Glass Background Layer */}
        <div className="absolute inset-0 bg-midnight/60 backdrop-blur-md border-b border-white/5" />

        <div className="relative max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* 1. LEFT: Mobile Menu Trigger & Search */}
          <div className="flex items-center gap-6 flex-1">
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white hover:text-accent transition-colors"
            >
              <Menu strokeWidth={1} size={28} />
            </button>
            <button className="hidden lg:block text-white/70 hover:text-white transition-colors group">
              <Search strokeWidth={1} size={20} />
            </button>
          </div>

          {/* 2. CENTER: Brand Logo */}
          <div className="flex-0 text-center">
            <Link href="/" className="group flex flex-col items-center">
              <h1 className="font-serif text-3xl tracking-[0.2em] text-white group-hover:text-glow transition-all duration-500">
                AURA
              </h1>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 group-hover:text-accent transition-colors duration-500">
                Parfumerie
              </span>
            </Link>
          </div>

          {/* 3. RIGHT: Desktop Nav & Cart */}
          <div className="flex items-center justify-end gap-6 flex-1">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/shop"
                className="text-xs uppercase tracking-widest hover:text-accent transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-xs uppercase tracking-widest hover:text-accent transition-colors"
              >
                About
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="text-xs uppercase tracking-widest hover:text-accent transition-colors"
              >
                Menu +
              </button>
            </nav>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative text-white hover:text-accent transition-colors"
            >
              <ShoppingBag strokeWidth={1} size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-midnight text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[60] bg-[#05080f]/95 backdrop-blur-xl flex flex-col h-screen"
          >
            {/* Menu Header (Close Button) */}
            <div className="flex-none flex justify-between items-center p-6 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-white/50">
                Navigation
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-accent transition-colors"
              >
                <X strokeWidth={1} size={32} />
              </button>
            </div>

            {/* Menu Links List - FIXED SCROLLING */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col items-center gap-8 py-20 min-h-full">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={linkVars}
                      initial="initial"
                      animate="open"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`font-serif text-4xl md:text-6xl text-white hover:text-accent hover:italic transition-all duration-300 ${
                          isActive ? "text-accent italic" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="flex-none p-8 text-center border-t border-white/5 bg-[#05080f]">
              <div className="flex justify-center gap-6 mb-4 text-xs uppercase tracking-widest text-white/50">
                <Link
                  href="/faq"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white"
                >
                  FAQ
                </Link>
                <Link
                  href="/shipping"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white"
                >
                  Shipping
                </Link>
                <Link
                  href="/returns"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white"
                >
                  Returns
                </Link>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Est. 2026 • Paris • Tokyo • New York
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
