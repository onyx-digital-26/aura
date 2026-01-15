"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

// --- DUMMY DATA (Synchronized with Product Page) ---
// ... imports

// --- UPDATED SLUGS ---
const products = [
  {
    id: 1,
    slug: "oceanic-surge",
    name: "Oceanic Surge",
    scent: "Sea Spray & Mint",
    price: "$145",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    slug: "azure-depth",
    name: "Azure Depth",
    scent: "Mineral Water & Sage",
    price: "$180",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    slug: "velvet-blush",
    name: "Velvet Blush",
    scent: "Peony & Cashmere",
    price: "$120",
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    slug: "ember-wood",
    name: "Ember Wood",
    scent: "Leather & Vetiver",
    price: "$160",
    image: "/images/product-4.jpg",
  },
  {
    id: 5,
    slug: "solaris",
    name: "Solaris",
    scent: "Neroli & Citrus",
    price: "$135",
    image: "/images/product-5.jpg",
  },
];

// ... rest of component

export default function ProductCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="py-24 relative z-10 bg-midnight overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-2">
            The Collection
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-white">
            Curated Scents
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest animate-pulse">
          <span>&larr; Drag &rarr;</span>
        </div>
      </div>

      {/* CAROUSEL CONTAINER */}
      <motion.div
        ref={carousel}
        className="cursor-grab active:cursor-grabbing px-6 md:px-12 w-full overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 md:gap-10 w-max"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative w-[260px] md:w-[350px] group flex-shrink-0"
            >
              <Link href={`/product/${product.slug}`} className="block">
                {/* IMAGE CARD */}
                <div className="aspect-[3/4] relative rounded-t-full overflow-hidden glass-panel border border-white/10 group-hover:border-accent/50 transition-colors duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    // Full color on all screens. No grayscale.
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY: Only visible on Desktop Hover to allow easy clicking on mobile */}
                  <div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-midnight transition-all duration-300">
                      <Plus size={24} strokeWidth={1} />
                    </div>
                  </div>
                </div>

                {/* PRODUCT INFO */}
                <div className="mt-6 text-center">
                  <h4 className="font-serif text-2xl text-white group-hover:text-accent transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1 mb-3">
                    {product.scent}
                  </p>
                  <span className="text-white font-medium">
                    {product.price}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* VIEW ALL CARD */}
          <div className="w-[200px] flex items-center justify-center flex-shrink-0">
            <Link
              href="/shop"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                <ArrowRight className="text-white group-hover:text-accent" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white group-hover:text-accent">
                View All
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
