"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const processSteps = [
  { id: "01", title: "原料", subtitle: "Raw Materials", desc: "Selection of ultra-high purity iron ores and premium alloy additives." },
  { id: "02", title: "溶解", subtitle: "Melting", desc: "Electric arc furnaces melting materials at precise temperatures." },
  { id: "03", title: "精錬", subtitle: "Refining", desc: "Vacuum degassing and chemical adjustments to atomic perfection." },
  { id: "04", title: "成形", subtitle: "Forming", desc: "Continuous casting into optimal geometries for further processing." },
  { id: "05", title: "熱処理", subtitle: "Heat Treatment", desc: "Advanced quenching and tempering to lock in nanostructures." },
  { id: "06", title: "精密加工", subtitle: "Precision Processing", desc: "Micro-level machining and specialized surface treatments." },
  { id: "07", title: "品質保証", subtitle: "Quality Assurance", desc: "Ultrasonic, X-ray, and electron microscope verification." },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  // Progress bar for the molten steel line
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="h-[300vh] bg-[var(--color-graphite)] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center pt-20">
        
        <div className="absolute top-32 left-6 md:left-12 z-20">
          <h2 className="text-sm tracking-[0.2em] text-[var(--color-copper)] mb-2">STEEL PROCESS</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-ivory)]">製造工程</h3>
        </div>

        {/* Progress Line container */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
        <motion.div 
          style={{ scaleX, originX: 0 }}
          className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--color-copper)] via-[var(--color-deepred)] to-[#ff8a00] -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(163,42,42,0.8)]"
        />

        {/* The traveling steel piece indicator */}
        <motion.div
          style={{ left: useTransform(scrollYProgress, [0, 1], ["5%", "95%"]) }}
          className="absolute top-1/2 w-8 h-8 bg-white -translate-x-1/2 -translate-y-1/2 z-20 rotate-45 border-4 border-[var(--color-graphite)] shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        />

        {/* Horizontal Scrolling Steps */}
        <motion.div style={{ x }} className="flex gap-32 px-[10vw] relative z-10 items-center h-64 mt-20">
          {processSteps.map((step, idx) => (
            <div key={step.id} className="w-[300px] shrink-0 flex flex-col justify-center">
              <div className="text-[var(--color-ivory)]/30 text-6xl font-bold font-mono tracking-tighter mb-4">
                {step.id}
              </div>
              <h4 className="text-2xl font-bold text-[var(--color-ivory)] mb-1">{step.title}</h4>
              <p className="text-xs tracking-widest text-[var(--color-copper)] uppercase mb-4">{step.subtitle}</p>
              <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed border-l border-white/20 pl-4 py-2">
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
