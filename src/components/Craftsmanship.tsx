"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Craftsmanship() {
  return (
    <section className="bg-[var(--color-graphite)] text-[var(--color-ivory)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Traditional Side */}
        <div className="relative py-32 px-12 lg:px-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 group">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/craft_traditional.png"
              alt="Traditional Takumi craftsmanship"
              fill
              className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-0" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-0" />
          {/* Faux image background using CSS pattern/gradient */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-copper)]/20 via-transparent to-transparent bg-steel-texture z-0 mix-blend-overlay" />
          
          <div className="relative z-10">
            <h3 className="text-5xl md:text-7xl font-bold tracking-widest text-[var(--color-ivory)]/20 absolute -top-10 left-0 whitespace-nowrap opacity-50">
              伝統
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">匠の技</h2>
            <div className="w-12 h-1 bg-[var(--color-copper)] mb-8" />
            <ul className="space-y-4 text-lg text-[var(--color-ivory)]/70 font-light tracking-wide">
              <li className="flex items-center gap-4">
                <span className="text-[var(--color-copper)] text-sm">01</span> 精度 (Precision)
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[var(--color-copper)] text-sm">02</span> 忍耐 (Patience)
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[var(--color-copper)] text-sm">03</span> 素材への敬意 (Material Respect)
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[var(--color-copper)] text-sm">04</span> 改善 (Continuous Improvement)
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Side */}
        <div className="relative py-32 px-12 lg:px-24 flex flex-col justify-center group bg-[var(--color-gunmetal)]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/craft_advanced.png"
              alt="Advanced high-tech manufacturing"
              fill
              className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gunmetal)]/80 via-[var(--color-gunmetal)]/40 to-[var(--color-gunmetal)]/80 z-0" />
          <div className="absolute inset-0 bg-[var(--color-industrial-blue)]/5 group-hover:bg-[var(--color-industrial-blue)]/20 transition-colors duration-700 z-0 mix-blend-overlay" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />
          
          <div className="relative z-10 text-right">
            <h3 className="text-5xl md:text-7xl font-bold tracking-widest text-[var(--color-ivory)]/10 absolute -bottom-10 right-0 whitespace-nowrap opacity-50">
              革新
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">先端技術</h2>
            <div className="w-12 h-1 bg-[var(--color-industrial-blue)] mb-8 ml-auto" />
            <p className="text-lg text-[var(--color-ivory)]/70 font-light tracking-wide leading-relaxed max-w-md ml-auto">
              私たちは、何世紀にもわたる日本の製造業の直感を、アルゴリズムによる精度へと変換します。「匠」の職人技という人間的要素と、量子レベルの材料モデリングを組み合わせることで、どちらか一方では不可能なことを達成します。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
