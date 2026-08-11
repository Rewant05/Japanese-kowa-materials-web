"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Activity, Shield, Flame, Zap, Droplet, Move, Box } from "lucide-react";

const applications = [
  { id: "automotive", label: "自動車 / Automotive" },
  { id: "architecture", label: "建築 / Architecture" },
  { id: "energy", label: "エネルギー / Energy" },
  { id: "robotics", label: "ロボティクス / Robotics" },
  { id: "medical", label: "医療機器 / Medical Equipment" },
  { id: "aerospace", label: "航空宇宙 / Aerospace" },
];

const properties = [
  { id: "high-strength", label: "高強度 / High Strength", icon: <Shield size={16} /> },
  { id: "lightweight", label: "軽量 / Lightweight", icon: <Move size={16} /> },
  { id: "heat-resistant", label: "耐熱 / Heat Resistant", icon: <Flame size={16} /> },
  { id: "corrosion", label: "耐腐食 / Corrosion Resistant", icon: <Droplet size={16} /> },
  { id: "conductive", label: "導電性 / Conductive", icon: <Zap size={16} /> },
  { id: "wear", label: "耐摩耗 / Wear Resistant", icon: <Activity size={16} /> },
];

// Fictional Materials DB
const materialsDB: Record<string, any> = {
  "high-strength": {
    name: "KŌWA-X90",
    description: "Ultra-high-strength structural steel forged with advanced nanostructure engineering.",
    category: "Structural Steel",
    stats: { strength: "1800 MPa", density: "7.85 g/cm³", heatResist: "600°C", corrosionResist: "High" }
  },
  "lightweight": {
    name: "KŌWA-NEX",
    description: "Next-generation lightweight advanced alloy combining aluminum, titanium, and proprietary trace elements.",
    category: "Advanced Alloy",
    stats: { strength: "850 MPa", density: "3.20 g/cm³", heatResist: "450°C", corrosionResist: "Excellent" }
  },
  "heat-resistant": {
    name: "KŌWA-CERA",
    description: "High-temperature resistant alloy with ceramic particulate reinforcement for extreme environments.",
    category: "Specialty Alloy",
    stats: { strength: "1100 MPa", density: "8.10 g/cm³", heatResist: "1400°C", corrosionResist: "Exceptional" }
  },
  "corrosion": {
    name: "KŌWA-CHEM 21",
    description: "Specialty chemical surface coating providing molecular-level defense against harsh corrosives.",
    category: "Surface Treatment",
    stats: { strength: "N/A", density: "1.05 g/cm³", heatResist: "350°C", corrosionResist: "Absolute" }
  },
  "conductive": {
    name: "KŌWA-ELEC",
    description: "Highly conductive copper-graphene hybrid matrix designed for next-gen energy grids and EV motors.",
    category: "Advanced Composites",
    stats: { strength: "450 MPa", density: "8.80 g/cm³", heatResist: "700°C", corrosionResist: "Medium" }
  },
  "wear": {
    name: "KŌWA-TUNGSTEN PLUS",
    description: "Wear-resistant tool steel infused with tungsten carbides for unparalleled longevity in heavy friction.",
    category: "Specialty Steel",
    stats: { strength: "2100 MPa", density: "14.2 g/cm³", heatResist: "900°C", corrosionResist: "High" }
  },
};

export default function MaterialExplorer() {
  const [app, setApp] = useState(applications[0].id);
  const [prop, setProp] = useState(properties[0].id);

  const selectedMaterial = materialsDB[prop];

  return (
    <section className="py-24 bg-[var(--color-gunmetal)] text-[var(--color-ivory)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-graphite)] opacity-50 measurement-border hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-sm tracking-[0.2em] text-[var(--color-copper)] mb-4">MATERIAL EXPLORER</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">素材を検索する</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Controls */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* App Selection */}
            <div>
              <h4 className="text-sm tracking-widest text-[var(--color-ivory)]/50 mb-4 border-b border-white/10 pb-2">1. APPLICATION</h4>
              <div className="flex flex-wrap gap-2">
                {applications.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setApp(item.id)}
                    className={`px-4 py-2 text-xs tracking-wider border transition-colors ${
                      app === item.id 
                        ? "bg-[var(--color-copper)] border-[var(--color-copper)] text-white" 
                        : "border-white/20 hover:border-white/50 text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Selection */}
            <div>
              <h4 className="text-sm tracking-widest text-[var(--color-ivory)]/50 mb-4 border-b border-white/10 pb-2">2. KEY PROPERTY</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {properties.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProp(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm tracking-wider border transition-all ${
                      prop === item.id 
                        ? "bg-white/10 border-[var(--color-ivory)] text-white shadow-[inset_2px_0_0_0_var(--color-copper)]" 
                        : "border-white/10 bg-black/20 hover:bg-black/40 text-[var(--color-ivory)]/60"
                    }`}
                  >
                    <span className={prop === item.id ? "text-[var(--color-copper)]" : ""}>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--color-graphite)] border border-white/10 p-6 sm:p-10 h-full flex flex-col">
              <h4 className="text-xs tracking-[0.2em] text-[var(--color-ivory)]/50 mb-6 flex items-center gap-2">
                <Box size={14} /> RECOMMENDED SOLUTION
              </h4>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMaterial.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-[var(--color-industrial-blue)]/20 text-[var(--color-industrial-blue)] text-xs tracking-widest mb-4 border border-[var(--color-industrial-blue)]/30">
                      {selectedMaterial.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    {selectedMaterial.name}
                  </h3>
                  <p className="text-[var(--color-ivory)]/70 leading-relaxed mb-8 max-w-lg">
                    {selectedMaterial.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto">
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-[10px] tracking-widest text-[var(--color-ivory)]/40 mb-1">STRENGTH</p>
                      <p className="font-mono text-sm">{selectedMaterial.stats.strength}</p>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-[10px] tracking-widest text-[var(--color-ivory)]/40 mb-1">DENSITY</p>
                      <p className="font-mono text-sm">{selectedMaterial.stats.density}</p>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-[10px] tracking-widest text-[var(--color-ivory)]/40 mb-1">HEAT RESIST</p>
                      <p className="font-mono text-sm">{selectedMaterial.stats.heatResist}</p>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <p className="text-[10px] tracking-widest text-[var(--color-ivory)]/40 mb-1">CORROSION</p>
                      <p className="font-mono text-sm">{selectedMaterial.stats.corrosionResist}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs tracking-wider text-[var(--color-copper)]">
                      <Check size={14} /> Recommended for {applications.find(a => a.id === app)?.label.split(" / ")[1]}
                    </div>
                    <button className="text-sm font-bold tracking-widest flex items-center gap-1 hover:text-[var(--color-copper)] transition-colors">
                      DATASHEET <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
