"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickyPinDemo() {
  // Reference to the element we want to pin AND track scroll progress for
  const targetRef = useRef(null);

  // Track how far we’ve scrolled **through the sticky element’s container**
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], // 0 when top hits viewport, 1 when bottom hits
  });

  // Example animation: fade out while pinned
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* Spacer before the pinned section so we can scroll down to it */}
      <section style={{ height: "100vh", background: "#f0f0f0" }}>
        <h2 style={{ padding: "40vh 1rem 0" }}>Scroll down…</h2>
      </section>

      {/* 🔒 Sticky‑pin section */}
      <section
        style={{
          /* 👇 Make parent taller than viewport (200 vh = 2× viewport) */
          height: "200vh",
          position: "relative",
          background: "#e4e8ff",
        }}
      >
        <motion.div
          ref={targetRef}
          /* 👇 The sticky bit */
          style={{
            position: "sticky",
            top: 0, // stick to top of viewport
            height: "100vh",
            display: "grid",
            placeItems: "center",
            opacity,
            background: "#ffffff",
            border: "2px dashed #99f",
          }}
        >
          <h1>Pinned & animated 🎉</h1>
        </motion.div>
      </section>

      {/* Spacer after, just to prove un‑pinning works */}
      <section style={{ height: "100vh", background: "#f0f0f0" }} />
    </main>
  );
}



const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}
