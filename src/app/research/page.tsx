"use client";

import { motion } from "framer-motion";
import { Microscope, Beaker, Zap, Cpu } from "lucide-react";

const labs = [
  {
    icon: <Microscope size={32} />,
    title: "ナノ構造解析センター",
    desc: "原子レベルでの材料モデリングと微小構造の解析を行い、次世代合金の基礎を築きます。"
  },
  {
    icon: <Beaker size={32} />,
    title: "先進ポリマー合成ラボ",
    desc: "極限環境に耐えうる新しいフッ素樹脂や特殊コーティング材の合成実験を行っています。"
  },
  {
    icon: <Zap size={32} />,
    title: "エネルギー効率化研究所",
    desc: "製造プロセスにおけるエネルギー消費を最小限に抑えるための技術開発を推進します。"
  },
  {
    icon: <Cpu size={32} />,
    title: "計算材料科学部門",
    desc: "AIとスーパーコンピュータを活用し、新素材の発見から製品化までのサイクルを劇的に短縮します。"
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-ivory)] text-[var(--color-graphite)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b border-black/10 pb-12 mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <span className="w-12 h-1 bg-[var(--color-industrial-blue)]" />
             <span className="text-sm font-bold tracking-widest text-[var(--color-industrial-blue)]">イノベーション</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            研究開発
          </h1>
          <p className="text-xl text-[var(--color-graphite)]/70 font-light max-w-2xl leading-relaxed">
            鋼和の最先端ラボでの探求。私たちは現状に満足することなく、常に「次の素材」を見据えています。
          </p>
        </motion.div>
        
        <div className="mb-24 text-center max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-gunmetal)]">境界を押し広げる。</h2>
           <p className="text-lg leading-relaxed text-[var(--color-graphite)]/80">
              私たちのR&Dチームは、物理学、化学、データサイエンスの壁を越えて協力しています。世界をリードする企業と提携し、航空宇宙から次世代モビリティまで、未来のインフラを支えるコア技術を開発しています。
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {labs.map((lab, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-white p-10 shadow-xl border border-black/5 hover:border-[var(--color-industrial-blue)]/50 transition-colors"
             >
                <div className="text-[var(--color-industrial-blue)] mb-6">
                   {lab.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{lab.title}</h3>
                <p className="text-[var(--color-graphite)]/70 leading-relaxed">
                   {lab.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
