"use client";

import { useEffect, useRef } from "react";

export default function VaporTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set Dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Mouse Tracking
    const handleMouseMove = (e) => {
      // Create fewer particles than fire (softer feel)
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          // Colors: White/Lilac/Blue range
          color: `rgba(${200 + Math.random() * 55}, ${
            200 + Math.random() * 55
          }, 255,`,
          radius: Math.random() * 2 + 1, // Start small
          vx: (Math.random() - 0.5) * 1.5, // Slow horizontal drift
          vy: (Math.random() - 0.5) * 1.5, // Slow vertical drift
          life: 1, // Opacity start
          decay: 0.015, // Fade out speed (slower = more misty)
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Composite operation for "Glow/Mist" effect
      ctx.globalCompositeOperation = "screen";

      particles.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.radius += 0.05; // Mist expands as it ages
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.current.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color + p.life + ")";
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
}
