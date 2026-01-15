"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import RevealText from "@/components/ui/RevealText";

const faqData = [
  {
    category: "Shipping & Returns",
    items: [
      {
        q: "Do you ship internationally?",
        a: "Yes. We offer complimentary express shipping to over 30 countries, including the US, UK, Canada, Australia, and most of the EU. All duties and taxes are included in the final price at checkout.",
      },
      {
        q: "What is your return policy?",
        a: "We accept returns on unopened bottles within 30 days of purchase. Each full-size bottle comes with a complimentary 2ml sample. We recommend trying the sample first before opening the main packaging.",
      },
      {
        q: "How long will my order take to arrive?",
        a: "Orders are processed within 24 hours. North American delivery takes 2-4 business days. International delivery takes 4-7 business days.",
      },
    ],
  },
  {
    category: "Formulations",
    items: [
      {
        q: "Are your fragrances vegan?",
        a: "Absolutely. AURA is 100% vegan and cruelty-free. We do not test on animals, nor do we sell in markets that require animal testing.",
      },
      {
        q: "Do you use natural ingredients?",
        a: "We prioritize natural origin ingredients (approx 85-90%). However, we use safe synthetics for sustainability (e.g., Sandalwood) or when natural extraction is unethical (e.g., Musk).",
      },
      {
        q: "How long does the scent last?",
        a: "All our formulations are 'Extrait de Parfum' concentration (25-30% oil). You can expect 8-12 hours of longevity on skin and up to 24 hours on clothing.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-midnight min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <span className="text-accent text-xs uppercase tracking-[0.3em] block mb-6">
            Support
          </span>
          <div className="flex justify-center">
            <RevealText>
              <h1 className="font-serif text-5xl md:text-7xl text-white">
                Common Queries
              </h1>
            </RevealText>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-16">
          {faqData.map((section, sIndex) => (
            <div key={sIndex}>
              {/* Category Title */}
              <h3 className="text-white/40 text-xs uppercase tracking-widest mb-8 pl-4 border-l border-accent">
                {section.category}
              </h3>

              <div className="space-y-4">
                {section.items.map((item, i) => {
                  // Unique ID for state tracking
                  const uniqueId = `${sIndex}-${i}`;
                  const isOpen = openIndex === uniqueId;

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      key={uniqueId}
                      className="border border-white/10 rounded-sm overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <button
                        onClick={() => toggleFAQ(uniqueId)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="text-white font-serif text-xl pr-8">
                          {item.q}
                        </span>
                        <div className="text-accent flex-shrink-0">
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="p-6 pt-0 text-white/60 font-light leading-relaxed text-lg max-w-2xl">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 text-center border-t border-white/10 pt-16">
          <p className="text-white mb-6 font-serif text-2xl">
            Still need assistance?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest hover:text-white transition-colors border-b border-accent pb-1 hover:border-white"
          >
            Contact Concierge <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
