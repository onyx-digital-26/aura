"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Scent Notes",
    title: "The Art of Layering: Creating a Custom Scent Profile",
    date: "Oct 12, 2026",
    image: "/images/journal-1.jpg",
  },
  {
    id: 2,
    category: "Ingredients",
    title: "Why We Source Oud from Sustainable Forests",
    date: "Sep 28, 2026",
    image: "/images/journal-2.jpg",
  },
  {
    id: 3,
    category: "Behind the Bottle",
    title: "Designing the 'Liquid Gold' Glasswork",
    date: "Sep 15, 2026",
    image: "/images/journal-3.jpg",
  },
];

export default function JournalSection() {
  return (
    <section className="py-24 bg-midnight border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            The Journal
          </h2>
          <Link
            href="/journal"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-accent transition-colors"
          >
            View Archive <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/journal/${article.id}`}
              className="group block"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                {/* Overlay: Hidden on mobile, Visible on Desktop Hover */}
                <div className="hidden lg:block absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  /* UPDATED LOGIC:
                     1. Default (Mobile): grayscale-0 (Full Color)
                     2. lg: (Desktop): grayscale (Black & White)
                     3. lg:group-hover: (Desktop Hover): grayscale-0 (Color again)
                  */
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-white group-hover:text-accent transition-colors leading-tight">
                  {article.title}
                </h3>
                <span className="text-xs uppercase tracking-widest text-white/50 underline decoration-transparent group-hover:decoration-accent transition-all mt-2">
                  Read Article
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link
            href="/journal"
            className="text-xs uppercase tracking-widest text-white hover:text-accent border-b border-white/20 pb-1"
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
