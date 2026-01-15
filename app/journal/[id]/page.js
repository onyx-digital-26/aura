"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// --- DUMMY DATABASE (Matching Index) ---
const articles = [
  {
    id: 1,
    title: "The Art of Layering: Creating a Custom Scent Profile",
    date: "Oct 12, 2026",
    author: "Julianne Vossen",
    image: "/images/journal-1.jpg",
    content: `
      <p>Perfume is rarely static. It changes with your skin chemistry, the humidity in the air, and the passage of time. But there is a way to take control of this evolution: Layering.</p>
      
      <p>Layering, or "scent cocktailing," is the art of mixing two or more fragrances to create something entirely unique. It isn't about splashing everything on at once. It is about understanding the weight of molecules.</p>
      
      <h3>The Base Rule</h3>
      <p>Always start with the heaviest scent. If you are mixing a woody Oud with a light Citrus, apply the Oud first. This creates a canvas. If you spray the heavy scent last, it will simply crush the lighter notes underneath it.</p>
      
      <h3>Complementary Opposites</h3>
      <p>The best combinations often come from conflict. A sweet Vanilla can be made sophisticated by a dry Tobacco. A sharp Sea Salt can be grounded by a warm Amber. Do not be afraid to mix families.</p>
    `,
  },
  {
    id: 2,
    title: "Why We Source Oud from Sustainable Forests",
    date: "Sep 28, 2026",
    author: "Marcus Thorne",
    image: "/images/journal-2.jpg",
    content: `
      <p>Oud is often called "liquid gold." It is resinous, animalic, and deeply complex. But the demand for Oud has led to the devastation of Aquilaria trees across Southeast Asia.</p>
      <p>At AURA, we refused to use wild-harvested Oud. Instead, we partnered with a generational farm in Assam that uses inoculation techniques to create the resin without killing the tree.</p>
    `,
  },
  // Add more fallbacks if needed, or default to generic
];

export default function ArticlePage() {
  const { id } = useParams();

  // Find article (converting id to number)
  const article = articles.find((a) => a.id === Number(id)) || articles[0];

  return (
    <div className="bg-midnight min-h-screen pt-32 pb-20">
      {/* 1. HERO HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 text-xs uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-6xl text-white leading-tight mb-6"
        >
          {article.title}
        </motion.h1>

        <div className="flex justify-center gap-8 text-xs uppercase tracking-widest text-accent">
          <span>{article.date}</span>
          <span>By {article.author}</span>
        </div>
      </div>

      {/* 2. HERO IMAGE */}
      <div className="relative w-full h-[50vh] md:h-[70vh] mb-20">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 3. ARTICLE CONTENT */}
      <article className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-white prose-p:text-white/70 prose-p:font-light prose-p:leading-loose prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Footer / Signature */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <span className="font-serif text-2xl text-white italic">
            AURA Parfumerie
          </span>
          <div className="flex gap-4">
            {/* Share buttons could go here */}
            <button className="text-xs uppercase tracking-widest text-white/40 hover:text-white">
              Share Article
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
