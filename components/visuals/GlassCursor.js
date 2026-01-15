"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlassCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Hide on Touch Devices (Mobile)
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    )
      return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. The Core Dot (Sharp) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* 2. The Glass Halo (Laggy & Blurry) */}
      <motion.div
        className="fixed top-0 left-0 border border-white/20 rounded-full pointer-events-none z-[9998]"
        style={{
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
        animate={{
          x: position.x - (isHovering ? 32 : 16),
          y: position.y - (isHovering ? 32 : 16),
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
        }}
        transition={{ type: "spring", mass: 0.8, stiffness: 100, damping: 15 }}
      />
    </>
  );
}
