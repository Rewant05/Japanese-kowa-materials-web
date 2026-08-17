"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-gunmetal)] text-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-12 mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            会社概要
          </h1>
          <p className="text-xl text-[var(--color-ivory)]/70 font-light max-w-2xl leading-relaxed">
            1958年からの私たちの歩み。鋼和は、世界をリードする素材工学企業として、常に革新を追求してきました。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-copper)]">私たちの使命</h2>
            <p className="text-lg leading-relaxed text-[var(--color-ivory)]/80 mb-6">
              鋼和素材の使命は、社会の基盤を支える最高品質の素材を提供することです。私たちは、最先端の技術と日本の伝統的な職人技を融合させ、未来の産業を牽引する製品を生み出します。
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ivory)]/80">
              持続可能性とイノベーションを事業の中核に据え、次世代のためのより良い世界を構築することにコミットしています。
            </p>
          </motion.div>
          <div className="relative aspect-square md:aspect-video bg-[var(--color-graphite)] border border-white/10 p-4">
             <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
             <div className="relative w-full h-full bg-[var(--color-gunmetal)] flex items-center justify-center overflow-hidden">
                <div className="w-64 h-64 border border-[var(--color-copper)]/30 rounded-full flex items-center justify-center">
                   <div className="w-48 h-48 border border-[var(--color-industrial-blue)]/50 rounded-full animate-[spin_10s_linear_infinite]" />
                   <div className="absolute text-2xl font-bold tracking-widest text-[var(--color-ivory)]/50">KOWA</div>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-widest">会社情報</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-graphite)] p-8 border border-white/5">
              <h3 className="text-[var(--color-industrial-blue)] text-sm font-bold tracking-widest mb-2">設立</h3>
              <p className="text-2xl font-light">1958年</p>
            </div>
            <div className="bg-[var(--color-graphite)] p-8 border border-white/5">
              <h3 className="text-[var(--color-industrial-blue)] text-sm font-bold tracking-widest mb-2">本社所在地</h3>
              <p className="text-lg font-light">東京都千代田区</p>
            </div>
            <div className="bg-[var(--color-graphite)] p-8 border border-white/5">
              <h3 className="text-[var(--color-industrial-blue)] text-sm font-bold tracking-widest mb-2">従業員数</h3>
              <p className="text-2xl font-light">1,240名</p>
            </div>
            <div className="bg-[var(--color-graphite)] p-8 border border-white/5">
              <h3 className="text-[var(--color-industrial-blue)] text-sm font-bold tracking-widest mb-2">代表取締役</h3>
              <p className="text-xl font-light">鋼和 太郎</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
