"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-gunmetal)] text-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-12 mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            採用情報
          </h1>
          <p className="text-xl text-[var(--color-ivory)]/70 font-light max-w-2xl leading-relaxed">
            鋼和と共に、明日の素材を創る。世界を変えるイノベーションに、あなたの力を。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[var(--color-copper)]">未来を築く仕事</h2>
            <p className="text-lg leading-relaxed text-[var(--color-ivory)]/80 mb-6">
              私たちは単なる製造メーカーではありません。人類が直面する課題を、素材の力で解決するプロフェッショナル集団です。
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ivory)]/80">
              多様なバックグラウンドを持つエンジニア、研究者、ビジネスプロフェッショナルが、互いに刺激し合いながら成長できる環境を提供しています。
            </p>
          </div>
          
          <div className="bg-[var(--color-graphite)] p-8 border border-white/5">
             <h3 className="text-xl font-bold tracking-widest mb-6 border-b border-white/10 pb-4">募集中の職種</h3>
             
             <div className="space-y-4">
                <a href="#" className="flex items-center justify-between p-4 bg-white/5 hover:bg-[var(--color-industrial-blue)]/20 transition-colors group">
                   <div>
                     <h4 className="font-bold mb-1">材料科学エンジニア</h4>
                     <p className="text-sm text-[var(--color-ivory)]/50">研究開発部門 | 東京本社</p>
                   </div>
                   <ArrowRight className="text-[var(--color-industrial-blue)] group-hover:translate-x-2 transition-transform" />
                </a>
                
                <a href="#" className="flex items-center justify-between p-4 bg-white/5 hover:bg-[var(--color-industrial-blue)]/20 transition-colors group">
                   <div>
                     <h4 className="font-bold mb-1">生産技術マネージャー</h4>
                     <p className="text-sm text-[var(--color-ivory)]/50">製造部門 | 大阪工場</p>
                   </div>
                   <ArrowRight className="text-[var(--color-industrial-blue)] group-hover:translate-x-2 transition-transform" />
                </a>
                
                <a href="#" className="flex items-center justify-between p-4 bg-white/5 hover:bg-[var(--color-industrial-blue)]/20 transition-colors group">
                   <div>
                     <h4 className="font-bold mb-1">海外営業スペシャリスト</h4>
                     <p className="text-sm text-[var(--color-ivory)]/50">グローバルビジネス部門 | 東京本社</p>
                   </div>
                   <ArrowRight className="text-[var(--color-industrial-blue)] group-hover:translate-x-2 transition-transform" />
                </a>
             </div>
             
             <button className="w-full mt-8 py-4 border border-[var(--color-ivory)]/30 text-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-graphite)] transition-colors font-bold tracking-widest">
                全ての職種を見る
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
