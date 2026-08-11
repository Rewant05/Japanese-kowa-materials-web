"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  { year: "1958", title: "創業", desc: "Founded as a precision machining workshop in Osaka." },
  { year: "1976", title: "Specialty Steel Division", desc: "Launched dedicated specialty steel division for the booming automotive sector." },
  { year: "1994", title: "Advanced Chemical Lab", desc: "Opened the Advanced Chemical Materials Laboratory to pioneer surface treatments." },
  { year: "2008", title: "Global Partnerships", desc: "Established engineering partnerships across Europe and North America." },
  { year: "2021", title: "Low-Carbon Initiative", desc: "Transitioned 40% of production to renewable-powered electric arc furnaces." },
  { year: "2026", title: "Next-Gen Platform", desc: "Introduced AI-driven material discovery and the closed-loop metallurgical ecosystem." }
];

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[var(--color-gunmetal)] text-[var(--color-ivory)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm tracking-[0.2em] text-[var(--color-copper)] mb-4 font-bold">OUR HISTORY</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">進化の軌跡</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[var(--color-copper)] md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-16">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-gunmetal)] border-2 border-[var(--color-copper)] md:-translate-x-1/2 mt-1 md:mt-0 z-10 group-hover:bg-[var(--color-copper)] transition-colors duration-300 shadow-[0_0_10px_rgba(74,122,113,0.5)]" />
                  
                  {/* Content (Left or Right) */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 flex flex-col ${isEven ? "md:pr-16 md:items-end md:text-right" : "md:pl-16 md:ml-auto md:items-start md:text-left"}`}>
                    <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/20 group-hover:text-white/40 transition-colors duration-300 font-mono mb-2">
                      {event.year}
                    </span>
                    <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                    <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed max-w-sm">
                      {event.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
