"use client";

import { motion } from "framer-motion";

export default function Page() {
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
            応用分野
          </h1>
          <p className="text-xl text-[var(--color-ivory)]/70 font-light max-w-2xl leading-relaxed">
            鋼和素材が限界を再定義する産業分野
          </p>
        </motion.div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-[var(--color-ivory)]/60">
            このページは現在開発中であり、まもなく完全なコンテンツが更新される予定です。
            応用分野に関連する当社の高度な能力の詳細については、後日またご確認ください。
          </p>
        </div>
      </div>
    </div>
  );
}
