"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Wind, Droplets } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-graphite)] text-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-12 mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <Leaf size={48} className="text-[var(--color-copper)]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            サステナビリティ
          </h1>
          <p className="text-xl text-[var(--color-ivory)]/70 font-light max-w-2xl mx-auto leading-relaxed">
            強さだけでは、未来にならない。低炭素で持続可能な製造に対する当社の取り組み。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
           <div className="bg-[#1a1a1c] p-8 border border-white/5 rounded-2xl">
              <Recycle size={32} className="text-[var(--color-copper)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">クローズドループ・リサイクル</h3>
              <p className="text-[var(--color-ivory)]/60 leading-relaxed">
                 当社の製造プロセスの78%は、自社製品およびパートナー企業から回収されたリサイクル素材を活用しています。廃棄物を新たな価値へと転換します。
              </p>
           </div>
           <div className="bg-[#1a1a1c] p-8 border border-white/5 rounded-2xl">
              <Wind size={32} className="text-[var(--color-industrial-blue)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">クリーンエネルギー</h3>
              <p className="text-[var(--color-ivory)]/60 leading-relaxed">
                 2030年までに全ての主要工場を再生可能エネルギーで稼働させることを目指し、現在は太陽光発電と風力エネルギーへの移行を強力に推し進めています。
              </p>
           </div>
           <div className="bg-[#1a1a1c] p-8 border border-white/5 rounded-2xl">
              <Droplets size={32} className="text-[var(--color-deepred)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">水資源の保全</h3>
              <p className="text-[var(--color-ivory)]/60 leading-relaxed">
                 高度なろ過システムにより、製造工程で使用する水の95%を浄化・再利用。地域の水資源に負荷をかけない持続可能な操業を実現しています。
              </p>
           </div>
        </div>

        <div className="bg-[var(--color-ivory)] text-[var(--color-graphite)] p-12 md:p-20 rounded-3xl text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">環境宣言2050</h2>
           <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
              鋼和素材は、2050年までにサプライチェーン全体でのカーボンニュートラル達成を約束します。素材の力を通じて、地球環境と人類の発展が調和する未来を切り拓きます。
           </p>
           <button className="px-8 py-4 bg-[var(--color-graphite)] text-white font-bold tracking-widest rounded-full hover:bg-[var(--color-copper)] transition-colors">
              環境レポートをダウンロード
           </button>
        </div>
      </div>
    </div>
  );
}
