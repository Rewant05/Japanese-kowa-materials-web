"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "小規模なオーダーや試作開発には対応していますか？",
    a: "はい。大量生産だけでなく、研究開発フェーズ向けの特殊な小ロット生産やカスタマイズにも柔軟に対応しております。詳細はお問い合わせください。"
  },
  {
    q: "製品の品質保証体制はどうなっていますか？",
    a: "ISO9001などの国際規格に準拠した厳格な品質管理システムを導入しています。すべてのロットは出荷前に、当社の検査ラボで成分分析および物理テストに合格する必要があります。"
  },
  {
    q: "環境に配慮した素材の開発状況を教えてください。",
    a: "「鋼和-ECO」シリーズをはじめ、リサイクル率を極限まで高めた合金や、製造時のCO2排出を削減した製品ラインナップを継続的に拡大しています。"
  },
  {
    q: "海外拠点への直接配送は可能ですか？",
    a: "世界中の主要な産業拠点に向けて、迅速で安全なグローバルロジスティクスネットワークを構築しております。具体的な配送条件については担当営業にお尋ねください。"
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-ivory)] text-[var(--color-graphite)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            よくある質問
          </h1>
          <p className="text-lg text-[var(--color-graphite)]/70 font-light">
            鋼和素材に関するお客様からのご質問にお答えします。
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-black/10 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[var(--color-copper)]" : "text-black/30"}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[var(--color-graphite)]/70 leading-relaxed border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-[var(--color-graphite)]/60 mb-6">探している回答が見つかりませんか？</p>
           <a href="/contact" className="inline-block px-8 py-3 bg-[var(--color-graphite)] text-white rounded-full font-bold hover:bg-[var(--color-copper)] transition-colors">
             直接お問い合わせ
           </a>
        </div>
      </div>
    </div>
  );
}
