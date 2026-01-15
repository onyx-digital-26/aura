"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, Minus, Star } from "lucide-react";
import Link from "next/link";
import { useShop } from "@/context/ShopContext";
import MagneticButton from "@/components/ui/MagneticButton"; // Ensure you created this in the previous step

// --- PRODUCT DATABASE (SLUGS FIXED: Kebab-Case) ---
const productDatabase = [
  {
    id: 1,
    slug: "oceanic-surge", // FIXED
    name: "Oceanic Surge",
    tagline: "The Crash of the Waves",
    price: 145,
    image: "/images/product-1.jpg",
    description:
      "A powerful, aquatic rush. Oceanic Surge captures the raw energy of the Atlantic. Crisp blue notes crash against a base of driftwood, creating a scent that is as refreshing as it is commanding.",
    notes: {
      top: "Sea Spray, Blue Mint",
      heart: "Driftwood, Geranium",
      base: "Ambergris, Musk",
    },
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citronellol, Limonene.",
  },
  {
    id: 2,
    slug: "azure-depth", // FIXED
    name: "Azure Depth",
    tagline: "Mystery of the Deep",
    price: 180,
    image: "/images/product-2.jpg",
    description:
      "Sophisticated, calm, and profound. Azure Depth explores the silence beneath the surface. Mineral notes mix with deep marine accords to create a fragrance of pure clarity and focus.",
    notes: {
      top: "Mineral Water, Bergamot",
      heart: "Rosemary, Sage",
      base: "Patchouli, Incense",
    },
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Coumarin.",
  },
  {
    id: 3,
    slug: "velvet-blush", // FIXED
    name: "Velvet Blush",
    tagline: "Softness & Silk",
    price: 120,
    image: "/images/product-3.jpg",
    description:
      "Intensely feminine and impossibly soft. Velvet Blush is a floral embrace, combining sweet rose petals with a warm, powdery finish. It feels like cashmere against bare skin.",
    notes: {
      top: "Pink Peony, Lychee",
      heart: "Rose Petals, Magnolia",
      base: "Cedarwood, Amber",
    },
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Alpha-Isomethyl Ionone.",
  },
  {
    id: 4,
    slug: "ember-wood", // FIXED
    name: "Ember Wood",
    tagline: "Earth & Fire",
    price: 160,
    image: "/images/product-4.jpg",
    description:
      "Raw and grounded. Ember Wood draws from the forest floor, mixing the scent of dry leaves with the warmth of a dying fire. A leather accord adds a rugged, masculine edge.",
    notes: {
      top: "Violet Leaf, Nutmeg",
      heart: "Leather, Vetiver",
      base: "Cedar, Tonka Bean",
    },
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Eugenol, Cinnamal.",
  },
  {
    id: 5,
    slug: "solaris", // FIXED
    name: "Solaris",
    tagline: "Golden Hour Glow",
    price: 135,
    image: "/images/product-5.jpg",
    description:
      "Radiance captured in glass. Solaris smells like sunlight hitting citrus trees in the Mediterranean. It is warm, vibrant, and filled with an undeniable optimism.",
    notes: {
      top: "Sicilian Lemon, Neroli",
      heart: "Orange Blossom, Ylang Ylang",
      base: "Benzoin, White Musk",
    },
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate.",
  },
];

export default function ProductPage() {
  const { slug } = useParams();
  const { openCart } = useShop();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("notes");

  useEffect(() => {
    // Find product by slug
    const found = productDatabase.find((p) => p.slug === slug);
    setProduct(found);
  }, [slug]);

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center text-white bg-midnight">
        <span className="animate-pulse tracking-widest text-xs uppercase">
          Loading Essence...
        </span>
      </div>
    );

  return (
    <div className="bg-midnight min-h-screen pt-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* 1. LEFT: STICKY IMAGE */}
        <div className="relative h-[60vh] lg:h-[calc(100vh-80px)] w-full lg:sticky lg:top-20 bg-[#080c16] flex items-center justify-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-50" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-[80%] h-[80%]"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>

          <Link
            href="/shop"
            className="absolute top-8 left-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase text-xs tracking-widest z-20"
          >
            <ArrowLeft size={16} /> Back to Collection
          </Link>
        </div>

        {/* 2. RIGHT: SCROLLABLE CONTENT */}
        <div className="px-6 py-16 lg:px-20 lg:py-32 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase block mb-4">
              {product.tagline}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
              {product.name}
            </h1>
            <div className="flex items-center gap-6 mb-10 border-b border-white/10 pb-8">
              <span className="text-3xl text-white font-light">
                ${product.price}
              </span>
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#a5b4fc" strokeWidth={0} />
                ))}
                <span className="text-xs text-white/50 ml-2 tracking-widest">
                  (24 Reviews)
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 leading-relaxed font-light text-lg mb-12"
          >
            {product.description}
          </motion.p>

          <div className="mb-12 space-y-4">
            {/* Tab: Olfactory Notes */}
            <div className="border border-white/10 rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  setActiveTab(activeTab === "notes" ? "" : "notes")
                }
                className="w-full flex items-center justify-between p-4 text-white hover:bg-white/5 transition-colors"
              >
                <span className="uppercase text-xs tracking-[0.2em]">
                  Olfactory Notes
                </span>
                {activeTab === "notes" ? (
                  <Minus size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </button>
              <AnimatePresence>
                {activeTab === "notes" && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden bg-white/5"
                  >
                    <div className="p-6 grid grid-cols-1 gap-4 text-sm text-white/70">
                      <div>
                        <span className="text-accent uppercase text-[10px] tracking-widest block mb-1">
                          Top
                        </span>
                        {product.notes.top}
                      </div>
                      <div>
                        <span className="text-accent uppercase text-[10px] tracking-widest block mb-1">
                          Heart
                        </span>
                        {product.notes.heart}
                      </div>
                      <div>
                        <span className="text-accent uppercase text-[10px] tracking-widest block mb-1">
                          Base
                        </span>
                        {product.notes.base}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tab: Ingredients */}
            <div className="border border-white/10 rounded-sm overflow-hidden">
              <button
                onClick={() =>
                  setActiveTab(activeTab === "ingredients" ? "" : "ingredients")
                }
                className="w-full flex items-center justify-between p-4 text-white hover:bg-white/5 transition-colors"
              >
                <span className="uppercase text-xs tracking-[0.2em]">
                  Ingredients
                </span>
                {activeTab === "ingredients" ? (
                  <Minus size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </button>
              <AnimatePresence>
                {activeTab === "ingredients" && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden bg-white/5"
                  >
                    <div className="p-6 text-sm text-white/60 leading-relaxed italic">
                      {product.ingredients}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Using Magnetic Button for Premium Feel */}
            <MagneticButton
              onClick={openCart}
              className="w-full py-5 bg-accent text-midnight font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-300 rounded-sm block text-center"
            >
              Add to Collection
            </MagneticButton>

            <p className="text-center text-white/30 text-[10px] uppercase tracking-widest mt-4">
              Free Shipping on Orders Over $200
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
