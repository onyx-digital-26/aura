"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- SYNCHRONIZED DATA ---
const allProducts = [
  {
    id: 1,
    slug: "Oceanic Surge",
    name: "Oceanic Surge",
    category: "Fresh",
    price: "$145",
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    slug: "Azure Depth",
    name: "Azure Depth",
    category: "Marine",
    price: "$180",
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    slug: "Velvet Blush",
    name: "Velvet Blush",
    category: "Floral",
    price: "$120",
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    slug: "Ember Wood",
    name: "Ember Wood",
    category: "Woody",
    price: "$160",
    image: "/images/product-4.jpg",
  },
  {
    id: 5,
    slug: "Solaris",
    name: "Solaris",
    category: "Citrus",
    price: "$135",
    image: "/images/product-5.jpg",
  },
];

const categories = ["All", "Fresh", "Floral", "Woody", "Marine", "Citrus"];

export default function Shop() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-midnight pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">
              The Archive
            </h1>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Explore our full library of olfactory expressions. Each scent is
              handcrafted in small batches.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-accent border-accent text-midnight font-bold"
                    : "border-white/20 text-white/50 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group"
              >
                <Link href={`/product/${product.slug}`}>
                  {/* Image Card */}
                  <div className="aspect-[3/4] relative overflow-hidden rounded-t-full glass-panel border border-white/10 mb-6">
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Quick View Button */}
                    <div className="absolute bottom-6 right-6 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-10 h-10 bg-white text-midnight rounded-full flex items-center justify-center">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-2xl text-white group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-white/40 text-xs uppercase tracking-widest">
                        {product.category}
                      </span>
                    </div>
                    <span className="text-white font-medium">
                      {product.price}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-white/30 text-sm uppercase tracking-widest">
            No scents found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
