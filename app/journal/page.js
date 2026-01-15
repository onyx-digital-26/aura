"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Scent Notes",
    title: "The Art of Layering: Creating a Custom Scent Profile",
    excerpt:
      "Why settle for one fragrance when you can create a symphony? We explore the delicate art of mixing oils and mists.",
    date: "Oct 12, 2026",
    image: "/images/journal-1.jpg",
  },
  {
    id: 2,
    category: "Ingredients",
    title: "Why We Source Oud from Sustainable Forests",
    excerpt:
      "The dark gold of the perfume world comes at a price. Here is how we ensure our harvesting protects the ancient trees of Assam.",
    date: "Sep 28, 2026",
    image: "/images/journal-2.jpg",
  },
  {
    id: 3,
    category: "Behind the Bottle",
    title: "Designing the 'Liquid Gold' Glasswork",
    excerpt:
      "A look inside the Venetian glass factory where our signature bottles are blown by hand.",
    date: "Sep 15, 2026",
    image: "/images/journal-3.jpg",
  },
  {
    id: 4,
    category: "Rituals",
    title: "Morning Mists: Scent as a Meditation",
    excerpt:
      "Starting your day with intention. How to use fragrance to ground your energy before the chaos begins.",
    date: "Aug 10, 2026",
    image: "/images/product-5.jpg", // Reusing an image for demo
  },
];

export default function JournalIndex() {
  return (
    <div className="min-h-screen bg-midnight pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-20 border-b border-white/10 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-6xl md:text-8xl text-white mb-6"
          >
            The Journal
          </motion.h1>
          <p className="text-white/50 text-lg max-w-xl">
            Notes on olfactory culture, ingredient sourcing, and the slow art of
            perfume making.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/journal/${article.id}`}>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest text-white/40">
                    <span className="text-accent">{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl text-white group-hover:text-accent transition-colors leading-tight">
                    {article.title}
                  </h2>

                  <p className="text-white/60 font-light leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white group-hover:underline decoration-accent underline-offset-4 mt-2">
                    Read Story <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
