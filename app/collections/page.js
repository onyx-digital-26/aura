"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText";

const collections = [
  {
    title: "The Signature Series",
    description:
      "Our permanent collection of timeless, gender-neutral essentials.",
    image: "/images/product-1.jpg", // Reusing existing image
    link: "/shop",
  },
  {
    title: "Seasonal Blends",
    description: "Ephemeral scents designed to capture the current solstice.",
    image: "/images/product-2.jpg", // Reusing existing image
    link: "/shop",
  },
  {
    title: "Limited Editions",
    description: "Rare ingredients, harvested once and never repeated.",
    image: "/images/product-3.jpg", // Reusing existing image
    link: "/shop",
  },
];

export default function Collections() {
  return (
    <div className="bg-midnight min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-accent text-xs uppercase tracking-[0.3em] block mb-6">
            Curated Sets
          </span>
          <div className="flex justify-center">
            <RevealText>
              <h1 className="font-serif text-5xl md:text-8xl text-white">
                Collections
              </h1>
            </RevealText>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="group relative block h-[60vh] overflow-hidden"
            >
              <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-serif text-4xl text-white mb-4"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  className="text-white/80 font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0"
                >
                  {item.description}
                </motion.p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
