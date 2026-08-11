"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hexagon, Beaker, Shield, Factory } from "lucide-react";

const molecules = [
  {
    id: "m1",
    name: "Fluoropolymer Complex",
    property: "Extreme chemical resistance and non-stick properties.",
    application: "Chemical processing pipes, Medical equipment",
    benefit: "Reduces maintenance downtime by 85%",
    icon: <Hexagon size={24} />,
    color: "var(--color-copper)"
  },
  {
    id: "m2",
    name: "Nano-Silica Dispersion",
    property: "Enhances surface hardness without compromising flexibility.",
    application: "Automotive clear coats, Flexible electronics",
    benefit: "Improves scratch resistance by 300%",
    icon: <Beaker size={24} />,
    color: "var(--color-industrial-blue)"
  },
  {
    id: "m3",
    name: "Anti-Corrosion Matrix",
    property: "Self-healing microcapsules that repair micro-fractures.",
    application: "Offshore wind turbines, Marine infrastructure",
    benefit: "Extends component lifespan in saltwater by 15 years",
    icon: <Shield size={24} />,
    color: "var(--color-deepred)"
  },
  {
    id: "m4",
    name: "High-Temp Polyimide",
    property: "Maintains structural integrity above 400°C.",
    application: "Aerospace engine components, Semiconductor manufacturing",
    benefit: "Enables 20% lighter high-temp assemblies",
    icon: <Factory size={24} />,
    color: "#ff8a00"
  }
];

export default function ChemicalTechnology() {
  const [activeMol, setActiveMol] = useState(molecules[0]);

  return (
    <section className="py-24 bg-[var(--color-ivory)] text-[var(--color-graphite)] relative overflow-hidden">
      {/* Subtle grid background for light section */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#1c1c1e 1px, transparent 1px), linear-gradient(90deg, #1c1c1e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm tracking-[0.2em] text-[var(--color-copper)] mb-4 font-bold">INDUSTRIAL CHEMICALS</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">化学で、素材の可能性を広げる。</h3>
          <p className="text-[var(--color-graphite)]/70 text-lg leading-relaxed">
            Beyond metals, Kōwa pioneers specialty industrial chemicals. Our surface treatments, protective coatings, and high-performance polymers redefine the physical limits of base materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Interactive Molecular Visualization */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-[var(--color-graphite)] border border-black/10 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-8 group">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            {/* The SVG Visualization */}
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-[300px] z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="origin-center"
              >
                {/* Connecting Lines */}
                <path d="M 200,100 L 286,150 L 286,250 L 200,300 L 114,250 L 114,150 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <path d="M 200,200 L 200,100 M 200,200 L 286,150 M 200,200 L 286,250 M 200,200 L 200,300 M 200,200 L 114,250 M 200,200 L 114,150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Central Node */}
                <circle cx="200" cy="200" r="16" fill={activeMol.color} />
                
                {/* Outer Nodes - we rotate them independently or pulse them */}
                {[
                  [200, 100], [286, 150], [286, 250], [200, 300], [114, 250], [114, 150]
                ].map(([cx, cy], i) => (
                  <motion.circle
                    key={i}
                    cx={cx} cy={cy} r="10"
                    fill="var(--color-ivory)"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </motion.g>
            </svg>
          </div>

          {/* Molecule Selection & Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3 mb-4">
              {molecules.map((mol) => (
                <button
                  key={mol.id}
                  onMouseEnter={() => setActiveMol(mol)}
                  onClick={() => setActiveMol(mol)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-semibold transition-all ${
                    activeMol.id === mol.id
                      ? "bg-[var(--color-graphite)] text-white border-[var(--color-graphite)]"
                      : "bg-transparent border-black/20 text-[var(--color-graphite)]/60 hover:border-black/50 hover:text-[var(--color-graphite)]"
                  }`}
                >
                  <span style={{ color: activeMol.id === mol.id ? mol.color : "inherit" }}>{mol.icon}</span>
                  {mol.name}
                </button>
              ))}
            </div>

            <motion.div
              key={activeMol.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-black/5"
            >
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-black/10 pb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${activeMol.color}20`, color: activeMol.color }}>
                  {activeMol.icon}
                </div>
                {activeMol.name}
              </h4>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-widest text-[var(--color-copper)] font-bold mb-1 uppercase">Material Property</p>
                  <p className="text-[var(--color-graphite)]/80 font-medium">{activeMol.property}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest text-[var(--color-copper)] font-bold mb-1 uppercase">Industrial Application</p>
                  <p className="text-[var(--color-graphite)]/80 font-medium">{activeMol.application}</p>
                </div>
                <div className="bg-[var(--color-ivory)] p-4 rounded-md border-l-4" style={{ borderColor: activeMol.color }}>
                  <p className="text-xs tracking-widest text-black/50 font-bold mb-1 uppercase">Performance Benefit</p>
                  <p className="text-black font-bold text-lg">{activeMol.benefit}</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
