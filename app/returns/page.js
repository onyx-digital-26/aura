"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, Mail, ArrowRight } from "lucide-react";
import RevealText from "@/components/ui/RevealText";

export default function Returns() {
  return (
    <div className="bg-midnight min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20 border-b border-white/10 pb-12">
          <span className="text-accent text-xs uppercase tracking-[0.3em] block mb-6">
            Policies
          </span>
          <div className="flex justify-center">
            <RevealText>
              <h1 className="font-serif text-5xl md:text-7xl text-white">
                Returns & Exchanges
              </h1>
            </RevealText>
          </div>
          <p className="text-white/50 mt-6 max-w-xl mx-auto font-light leading-relaxed">
            We believe in the perfect match. If a scent does not resonate with
            your aura, we offer a simplified return process within 30 days of
            delivery.
          </p>
        </div>

        {/* 1. THE PROCESS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Mail size={32} />,
              title: "1. Request",
              desc: "Email prive@aura.com with your order number to initiate a return label.",
            },
            {
              icon: <RefreshCw size={32} />,
              title: "2. Pack",
              desc: "Place the unopened full-size bottle back in its original box. Keep the sample!",
            },
            {
              icon: <CheckCircle size={32} />,
              title: "3. Refund",
              desc: "Once received, we process your refund to the original payment method within 5 days.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 text-center group hover:bg-white/10 transition-colors rounded-sm"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:text-accent transition-colors">
                {step.icon}
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 2. DETAILED POLICY TEXT */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-white/60 prose-p:font-light border-t border-white/10 pt-16">
          <h3>The "Try First" Guarantee</h3>
          <p>
            Every full-size bottle (50ml or 100ml) purchased from AURA includes
            a complimentary <strong>2ml sample vial</strong> of the same
            fragrance. We encourage you to test the sample on your skin for at
            least 24 hours before breaking the seal on the main box.
          </p>

          <h3>Conditions for Return</h3>
          <ul>
            <li>
              Items must be returned within <strong>30 days</strong> of the
              delivery date.
            </li>
            <li>
              The full-size bottle must be <strong>unopened</strong> with the
              cellophane seal intact.
            </li>
            <li>
              Used or opened full-size bottles cannot be returned due to hygiene
              regulations.
            </li>
            <li>
              Discovery Sets and Sample Kits are final sale and cannot be
              returned.
            </li>
          </ul>

          <h3>Exchanges</h3>
          <p>
            Prefer a different scent? The fastest way to exchange is to return
            your unopened bottle for a refund and place a new order for the
            desired fragrance.
          </p>

          <h3>Gift Returns</h3>
          <p>
            If you received AURA as a gift, we can offer store credit for the
            value of the return. Please provide the name of the original
            purchaser when contacting our concierge.
          </p>
        </div>

        {/* 3. BOTTOM CTA */}
        <div className="mt-20 p-10 bg-accent/10 border border-accent/20 text-center rounded-sm">
          <h3 className="font-serif text-3xl text-white mb-4">
            Ready to start a return?
          </h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Our concierge team is available Monday to Friday to assist you.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-accent text-midnight font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
              Contact Concierge
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
