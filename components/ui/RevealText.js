"use client";

import { motion } from "framer-motion";

export default function RevealText({ children, className = "", delay = 0 }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
