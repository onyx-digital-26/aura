"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package, RefreshCw, AlertCircle } from "lucide-react";
import RevealText from "@/components/ui/RevealText";

export default function Shipping() {
  return (
    <div className="bg-midnight min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20 border-b border-white/10 pb-12">
          <span className="text-accent text-xs uppercase tracking-[0.3em] block mb-6">
            Logistics
          </span>
          <div className="flex justify-center">
            <RevealText>
              <h1 className="font-serif text-5xl md:text-7xl text-white">
                Shipping & Returns
              </h1>
            </RevealText>
          </div>
        </div>

        {/* 1. SHIPPING RATES TABLE */}
        <div className="mb-24">
          <h2 className="font-serif text-3xl text-white mb-8 flex items-center gap-3">
            <Package size={24} className="text-accent" /> Dispatch Zones
          </h2>

          <div className="border border-white/10 rounded-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-white/5 p-4 text-xs uppercase tracking-widest text-white/50 font-bold border-b border-white/10">
              <span>Region</span>
              <span>Standard (4-7 Days)</span>
              <span>Express (2 Days)</span>
            </div>

            {/* Row 1: USA/Canada */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 p-6 border-b border-white/10 text-white hover:bg-white/5 transition-colors"
            >
              <span className="font-serif text-lg">North America</span>
              <div className="text-sm font-light">
                <span className="block text-white/70">Complimentary</span>
                <span className="text-xs text-white/30">
                  On orders over $200
                </span>
              </div>
              <span className="text-sm text-white/70">$25.00</span>
            </motion.div>

            {/* Row 2: Europe */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-3 p-6 border-b border-white/10 text-white hover:bg-white/5 transition-colors"
            >
              <span className="font-serif text-lg">Europe (EU)</span>
              <div className="text-sm font-light">
                <span className="block text-white/70">€15.00</span>
                <span className="text-xs text-white/30">Free over €250</span>
              </div>
              <span className="text-sm text-white/70">€35.00</span>
            </motion.div>

            {/* Row 3: Rest of World */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 p-6 text-white hover:bg-white/5 transition-colors"
            >
              <span className="font-serif text-lg">Rest of World</span>
              <div className="text-sm font-light">
                <span className="block text-white/70">$40.00</span>
                <span className="text-xs text-white/30">Duties may apply</span>
              </div>
              <span className="text-sm text-white/70">$60.00</span>
            </motion.div>
          </div>
          <p className="mt-4 text-xs text-white/40 italic">
            * All orders are processed within 24 hours at our Paris atelier.
            Weekend orders ship on Monday.
          </p>
        </div>

        {/* 2. RETURN POLICY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-white mb-6 flex items-center gap-3">
              <RefreshCw size={24} className="text-accent" /> Returns &
              Exchanges
            </h2>
            <div className="prose prose-invert prose-p:text-white/60 prose-p:font-light prose-p:leading-relaxed">
              <p>
                We want you to find your signature scent. That is why every
                full-size bottle comes with a complimentary{" "}
                <strong>2ml sample vial</strong>.
              </p>
              <p>
                Please open and test the sample first. If the scent does not
                speak to you, you may return the unopened full-size bottle
                within <strong>30 days</strong> for a full refund.
              </p>
              <p>
                To initiate a return, visit our{" "}
                <Link href="/contact" className="text-accent hover:underline">
                  Concierge Page
                </Link>{" "}
                and select "Return Request."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-sm"
          >
            <h2 className="font-serif text-3xl text-white mb-6 flex items-center gap-3">
              <AlertCircle size={24} className="text-accent" /> Damages
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-6">
              Our glass bottles are heavy and fragile. While we pack with
              extreme care using sustainable cushioning, accidents can happen in
              transit.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              If your item arrives broken or leaking, please photograph the
              package immediately and email <strong>prive@aura.com</strong>. We
              will dispatch a replacement overnight at no cost.
            </p>
          </motion.div>
        </div>

        {/* 3. TRACKING CTA */}
        <div className="text-center py-16 border-t border-b border-white/10">
          <h3 className="font-serif text-4xl text-white mb-4">
            Where is my order?
          </h3>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Enter your order number to see live tracking updates from our
            courier partners.
          </p>
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="#AURA-1024"
              className="bg-transparent border-b border-white/30 text-white px-4 py-2 w-full focus:outline-none focus:border-accent transition-colors"
            />
            <button className="text-xs uppercase tracking-widest text-accent hover:text-white transition-colors whitespace-nowrap">
              Track Now &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
