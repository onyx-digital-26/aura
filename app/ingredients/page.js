"use client";

import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Agarwood (Oud)",
    origin: "Assam, India",
    desc: "Sourced from infected Aquilaria trees, our Oud is aged for 25 years. It provides a deep, resinous warmth that anchors our 'Midnight Velour' scent.",
    scientific: "Aquilaria malaccensis",
  },
  {
    name: "Ambergris",
    origin: "New Zealand Coast",
    desc: "A rare, marine byproduct found on beaches. We use a sustainable, nature-identical synthesis to protect marine life while capturing its salty, skin-like musk.",
    scientific: "Ambrein",
  },
  {
    name: "Damask Rose",
    origin: "Isparta, Turkey",
    desc: "Harvested at dawn when the oil content is highest. It takes 4,000 kilograms of petals to produce just 1 kilogram of pure rose oil.",
    scientific: "Rosa damascena",
  },
  {
    name: "Vetiver",
    origin: "Haiti",
    desc: "A complex root system that smells of dry earth and wood. Our Vetiver is farmed by a co-op that supports local soil regeneration.",
    scientific: "Chrysopogon zizanioides",
  },
  {
    name: "Bergamot",
    origin: "Calabria, Italy",
    desc: "The 'Prince of Citrus.' A bitter, spicy orange note that opens a fragrance with a flash of light. Cold-pressed from the rind.",
    scientific: "Citrus bergamia",
  },
  {
    name: "Saffron",
    origin: "Kashmir",
    desc: "The most expensive spice in the world. It adds a metallic, leathery, and hay-like quality that is impossible to replicate synthetically.",
    scientific: "Crocus sativus",
  },
];

export default function Ingredients() {
  return (
    <div className="bg-midnight min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
          >
            Raw Materials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto font-light"
          >
            Transparency is the new luxury. We categorize every molecule that
            goes into our bottles. No hidden synthetics, no parabens, no
            compromise.
          </motion.p>
        </div>

        {/* The Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-t border-white/10 pt-8"
            >
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-serif text-3xl text-white group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-white/30">
                  {item.origin}
                </span>
              </div>

              <p className="text-accent text-xs italic mb-4 opacity-70">
                {item.scientific}
              </p>

              <p className="text-white/60 leading-relaxed font-light text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Footer */}
        <div className="mt-32 p-10 glass-panel border border-white/10 text-center">
          <h4 className="text-white font-serif text-2xl mb-4">
            The Clean Promise
          </h4>
          <p className="text-white/50 text-sm max-w-lg mx-auto mb-8">
            All AURA formulations are vegan, cruelty-free, and formulated
            without phthalates. We bottle in 100% recycled glass.
          </p>
          <div className="flex justify-center gap-4">
            {["Vegan", "Cruelty Free", "Sustainable", "Recyclable"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
