"use client";

import { motion } from "framer-motion";
import { Microscope } from "lucide-react";

const researchAreas = [
  "先端合金",
  "表面化学",
  "熱工学",
  "軽量素材",
  "持続可能な製造"
];

export default function TechLab() {
  return (
    <section className="py-24 bg-[var(--color-ivory)] text-[var(--color-graphite)] relative overflow-hidden border-t border-black/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1c1c1e 1px, transparent 1px), linear-gradient(90deg, #1c1c1e 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Microscope size={24} className="text-[var(--color-copper)]" />
              <h2 className="text-xl tracking-[0.2em] font-bold">鋼和ラボ</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">明日の素材が生まれる場所。</h3>
            <p className="text-[var(--color-graphite)]/70 text-lg leading-relaxed mb-8">
              当社の50万平方フィートの研究開発施設には、世界最先端の電子顕微鏡、熱シミュレーター、および化学合成ラボが備わっています。私たちは単に材料をテストするだけでなく、原子レベルでそれらを発明します。
            </p>
            
            <div className="space-y-4 border-l-2 border-[var(--color-copper)] pl-6 py-2">
              {researchAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <span className="text-[10px] font-mono text-[var(--color-graphite)]/40 font-bold tracking-widest">
                    0{idx + 1}
                  </span>
                  <span className="text-xl font-bold tracking-wide group-hover:text-[var(--color-copper)] transition-colors">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 aspect-square relative bg-white border border-black/10 shadow-2xl overflow-hidden p-8">
             {/* Animated Technical Diagram inside the box */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-industrial-blue)]/50 via-transparent to-transparent" />
             <div className="relative w-full h-full border border-[var(--color-graphite)]/10 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full max-w-[250px]">
                   <motion.circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-graphite)" strokeWidth="0.5" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
                   <motion.circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-copper)" strokeWidth="1" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                   <motion.circle cx="100" cy="100" r="40" fill="none" stroke="var(--color-industrial-blue)" strokeWidth="2" strokeDasharray="2 6" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                   
                   {/* Measurement Lines */}
                   <line x1="100" y1="0" x2="100" y2="200" stroke="var(--color-graphite)" strokeWidth="0.5" opacity="0.3" />
                   <line x1="0" y1="100" x2="200" y2="100" stroke="var(--color-graphite)" strokeWidth="0.5" opacity="0.3" />
                   
                   {/* Core */}
                   <circle cx="100" cy="100" r="10" fill="var(--color-graphite)" />
                   
                   {/* Scanning line */}
                   <motion.line x1="0" y1="0" x2="200" y2="0" stroke="var(--color-copper)" strokeWidth="1" opacity="0.5"
                     animate={{ y1: [0, 200, 0], y2: [0, 200, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   />
                </svg>
             </div>
             
             {/* Overlay UI elements */}
             <div className="absolute top-4 left-4 text-[10px] font-mono font-bold text-[var(--color-graphite)]/50">
               スキャン中: 微細構造
             </div>
             <div className="absolute bottom-4 right-4 text-[10px] font-mono font-bold text-[var(--color-graphite)]/50 text-right">
               倍率: 10,000倍<br />
               温度: 24.5°C
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
