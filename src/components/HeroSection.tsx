"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-graphite)] bg-grid-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_industrial.png"
          alt="Cinematic industrial factory"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-graphite)] via-[var(--color-graphite)]/80 to-transparent" />
      </div>

      {/* Background Abstract Visuals */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-copper)]/20 rounded-full blur-[100px] animate-molten" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-deepred)]/10 rounded-full blur-[120px] animate-molten" style={{ animationDelay: "-4s" }} />
        
        {/* Technical Measurement Lines */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-[var(--color-industrial-blue)]/20 rounded-full -translate-x-1/2 -translate-y-1/2 border-dashed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[var(--color-copper)]" />
            <span className="text-xs tracking-[0.3em] text-[var(--color-ivory)]/70 uppercase">Advanced Materials / Japan</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="block mb-4">素材から、</span>
            <span className="block text-[var(--color-ivory)]/90">未来をつくる。</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-ivory)]/70 mb-12 max-w-2xl font-light leading-relaxed">
            Engineering materials for a better future. Kōwa Materials pioneers the intersection of traditional Japanese craftsmanship and advanced industrial chemistry to forge specialty steel and high-performance alloys.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/materials"
              className="group flex items-center justify-center gap-3 bg-[var(--color-ivory)] text-[var(--color-graphite)] px-8 py-4 font-bold tracking-widest hover:bg-[var(--color-copper)] hover:text-white transition-colors duration-300"
            >
              素材を見る
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/technology"
              className="group flex items-center justify-center gap-3 border border-[var(--color-ivory)]/30 text-[var(--color-ivory)] px-8 py-4 font-bold tracking-widest hover:bg-white/5 transition-colors duration-300"
            >
              技術を知る
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-[var(--color-ivory)]/50 uppercase writing-vertical-rl">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-ivory)]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
