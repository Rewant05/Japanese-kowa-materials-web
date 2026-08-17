"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf } from "lucide-react";

const stats = [
  { value: 78, label: "リサイクル素材使用率", suffix: "%" },
  { value: 32, label: "エネルギー削減", suffix: "%" },
  { value: 41, label: "廃棄物削減", suffix: "%" },
  { value: 100, label: "素材のトレーサビリティ", suffix: "%" }
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = to;
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, to]);

  return (
    <div ref={ref} className="text-6xl md:text-8xl font-bold tracking-tighter text-[var(--color-copper)]">
      {count}{suffix}
    </div>
  );
}

export default function Sustainability() {
  return (
    <section className="py-32 bg-[var(--color-graphite)] text-[var(--color-ivory)] relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-copper)]/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-[1px] bg-[var(--color-copper)]" />
          <Leaf size={24} className="text-[var(--color-copper)]" />
          <div className="w-16 h-[1px] bg-[var(--color-copper)]" />
        </div>
        
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            強さだけでは、<br className="md:hidden" />
            <span className="text-[var(--color-ivory)]/70">未来にならない。</span>
          </h2>
          <p className="text-lg text-[var(--color-ivory)]/70 leading-relaxed font-light">
            真の強さは環境との調和にあります。鋼和素材は、炭素排出量を大幅に削減し、すべての鉄鋼がその起源まで追跡可能であることを保証する、クローズドループの冶金エコシステムを開拓しています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center border-l border-white/10 first:border-l-0">
              <Counter to={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-sm tracking-widest text-[var(--color-ivory)]/50 uppercase font-bold max-w-[150px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
