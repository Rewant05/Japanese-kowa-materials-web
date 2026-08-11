"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Bot, Battery, Building2, Plane, Stethoscope, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "auto",
    title: "自動車 / Automotive",
    icon: <Car size={32} />,
    challenge: "Reducing chassis weight by 30% while maintaining crash-test integrity.",
    solution: "Advanced high-strength steel (AHSS) tailored for cold forming.",
    material: "KŌWA-X90, KŌWA-NEX"
  },
  {
    id: "robotics",
    title: "ロボティクス / Robotics",
    icon: <Bot size={32} />,
    challenge: "Wear and tear on high-speed industrial joints operating 24/7.",
    solution: "Tungsten-infused surface treatments to eliminate micro-abrasions.",
    material: "KŌWA-TUNGSTEN PLUS"
  },
  {
    id: "energy",
    title: "エネルギー / Energy",
    icon: <Battery size={32} />,
    challenge: "Extreme corrosive environments in offshore wind and deep-sea drilling.",
    solution: "Self-healing anti-corrosion chemical matrices.",
    material: "KŌWA-CHEM 21, KŌWA-ELEC"
  },
  {
    id: "architecture",
    title: "建築 / Construction",
    icon: <Building2 size={32} />,
    challenge: "Seismic resilience in high-rise megastructures.",
    solution: "Yield-controlled structural steel with high ductility.",
    material: "KŌWA-STRUCT S450"
  },
  {
    id: "aerospace",
    title: "航空宇宙 / Aerospace",
    icon: <Plane size={32} />,
    challenge: "Thermal degradation of turbine blades at 1200°C+.",
    solution: "Ceramic-reinforced superalloys cast in a vacuum.",
    material: "KŌWA-CERA"
  },
  {
    id: "medical",
    title: "医療 / Medical",
    icon: <Stethoscope size={32} />,
    challenge: "Biocompatibility and sterilization endurance.",
    solution: "Medical-grade titanium alloys with non-stick fluoropolymer coatings.",
    material: "KŌWA-BIO Ti"
  }
];

export default function Applications() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[var(--color-gunmetal)] text-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.2em] text-[var(--color-industrial-blue)] mb-4 font-bold">APPLICATIONS</h2>
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
                  <p className="text-[10px] tracking-widest text-white/50 mb-1 font-bold">CHALLENGE</p>
                  <p className="text-sm text-white mb-4 leading-relaxed">{ind.challenge}</p>
                  
                  <p className="text-[10px] tracking-widest text-white/50 mb-1 font-bold">KŌWA SOLUTION</p>
                  <p className="text-sm text-white font-bold leading-relaxed">{ind.solution}</p>
                </div>
                
                <div>
                  <p className="text-[10px] tracking-widest text-black/50 mb-1 font-bold">RECOMMENDED</p>
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
