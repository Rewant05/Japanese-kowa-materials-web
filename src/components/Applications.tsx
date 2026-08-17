"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Bot, Battery, Building2, Plane, Stethoscope, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "auto",
    title: "自動車",
    icon: <Car size={32} />,
    challenge: "衝突試験の完全性を維持しながら、シャーシの重量を30％削減。",
    solution: "冷間成形向けに調整された先進高張力鋼（AHSS）。",
    material: "鋼和-X90, 鋼和-NEX"
  },
  {
    id: "robotics",
    title: "ロボティクス",
    icon: <Bot size={32} />,
    challenge: "24時間稼働する高速産業用関節の摩耗と損傷。",
    solution: "微小な摩耗を排除するタングステン注入表面処理。",
    material: "鋼和-TUNGSTEN PLUS"
  },
  {
    id: "energy",
    title: "エネルギー",
    icon: <Battery size={32} />,
    challenge: "洋上風力発電や深海掘削における極端な腐食環境。",
    solution: "自己修復型の防食化学マトリックス。",
    material: "鋼和-CHEM 21, 鋼和-ELEC"
  },
  {
    id: "architecture",
    title: "建築",
    icon: <Building2 size={32} />,
    challenge: "超高層巨大建造物における耐震性の確保。",
    solution: "高い延性を持つ降伏制御構造用鋼。",
    material: "鋼和-STRUCT S450"
  },
  {
    id: "aerospace",
    title: "航空宇宙",
    icon: <Plane size={32} />,
    challenge: "1200℃以上の温度でのタービンブレードの熱劣化。",
    solution: "真空鋳造されたセラミック強化超合金。",
    material: "鋼和-CERA"
  },
  {
    id: "medical",
    title: "医療",
    icon: <Stethoscope size={32} />,
    challenge: "生体適合性と滅菌耐久性の両立。",
    solution: "非粘着性フッ素樹脂コーティングを施した医療用チタン合金。",
    material: "鋼和-BIO Ti"
  }
];

export default function Applications() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[var(--color-gunmetal)] text-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.2em] text-[var(--color-industrial-blue)] mb-4 font-bold">応用分野</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">産業への応用</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {industries.map((ind) => (
            <div
              key={ind.id}
              onMouseEnter={() => setHovered(ind.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative aspect-square bg-[var(--color-graphite)] border border-white/5 p-8 overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-[#222225]"
            >
              {/* Default State */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-500 ${hovered === ind.id ? "opacity-0" : "opacity-100"}`}>
                <div className="text-[var(--color-industrial-blue)] opacity-50">
                  {ind.icon}
                </div>
                <h4 className="text-2xl font-bold tracking-wider">{ind.title}</h4>
              </div>

              {/* Hover State */}
              <div className={`absolute inset-0 p-8 bg-[var(--color-industrial-blue)]/90 backdrop-blur flex flex-col justify-between transition-opacity duration-500 ${hovered === ind.id ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div>
                  <p className="text-[10px] tracking-widest text-white/50 mb-1 font-bold">課題</p>
                  <p className="text-sm text-white mb-4 leading-relaxed">{ind.challenge}</p>
                  
                  <p className="text-[10px] tracking-widest text-white/50 mb-1 font-bold">鋼和の解決策</p>
                  <p className="text-sm text-white font-bold leading-relaxed">{ind.solution}</p>
                </div>
                
                <div>
                  <p className="text-[10px] tracking-widest text-black/50 mb-1 font-bold">推奨素材</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-mono font-bold text-white tracking-widest">{ind.material}</p>
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
