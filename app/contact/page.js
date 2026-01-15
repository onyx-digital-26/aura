"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="bg-midnight min-h-screen pt-40 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* 1. LEFT: Info & Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            At Your Service
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-white mb-8"
          >
            Concierge
          </motion.h1>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
            Whether you need assistance selecting a signature scent for a
            wedding, tracking a private order, or inquiring about bespoke
            formulations, our team is here.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xs uppercase tracking-widest mb-2">
                Private Client Email
              </h3>
              <p className="text-white/70 font-serif text-xl">prive@aura.com</p>
            </div>
            <div>
              <h3 className="text-white text-xs uppercase tracking-widest mb-2">
                Atelier Address
              </h3>
              <p className="text-white/70">
                12 Rue des Rosiers,
                <br />
                75004 Paris, France
              </p>
            </div>
          </div>
        </div>

        {/* 2. RIGHT: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-10 border border-white/10 rounded-sm"
        >
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <span className="text-4xl mb-4">🕊️</span>
              <h3 className="text-white font-serif text-3xl mb-2">
                Request Received
              </h3>
              <p className="text-white/50">
                Our concierge will contact you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-xs uppercase tracking-widest text-accent border-b border-accent pb-1"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-accent transition-colors">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-accent transition-colors">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-accent transition-colors">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-accent transition-colors">
                  Subject
                </label>
                <select className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-accent transition-colors">
                  <option className="bg-midnight">Order Inquiry</option>
                  <option className="bg-midnight">Product Consultation</option>
                  <option className="bg-midnight">Press & Partnerships</option>
                  <option className="bg-midnight">Other</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-accent transition-colors">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button
                disabled={status === "sending"}
                className="w-full py-4 bg-white text-midnight font-bold uppercase tracking-[0.2em] hover:bg-accent transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Request"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
