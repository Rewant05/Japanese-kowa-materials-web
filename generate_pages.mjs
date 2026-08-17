import fs from 'fs';
import path from 'path';

// Define all subpages with their content in Japanese
const pages = [
  { slug: "materials", title: "製品情報", desc: "鋼和の包括的な製品情報" },
  { slug: "technology", title: "技術", desc: "当社のプロセスを牽引する高度なエンジニアリングと技術" },
  { slug: "applications", title: "応用分野", desc: "鋼和素材が限界を再定義する産業分野" },
  { slug: "research", title: "研究開発", desc: "当社の最先端ラボでのイノベーションと探求" },
  { slug: "sustainability", title: "サステナビリティ", desc: "低炭素で持続可能な製造に対する当社の取り組み" },
  { slug: "company", title: "企業情報", desc: "私たちの遺産、ミッション、そしてチーム" },
  { slug: "about", title: "会社概要", desc: "1958年からの私たちの歩み" },
  { slug: "careers", title: "採用情報", desc: "鋼和と共に明日の素材を創る" },
  { slug: "faq", title: "よくある質問", desc: "お客様からのよくある質問への回答" },
  { slug: "privacy-policy", title: "プライバシーポリシー", desc: "お客様のデータをどのように保護しているか" },
  { slug: "terms-and-conditions", title: "利用規約", desc: "当社サービスの利用規約" },
  { slug: "contact", title: "お問い合わせ", desc: "鋼和へのお問い合わせ" },
  { slug: "news", title: "ニュース", desc: "鋼和からの最新情報とお知らせ" },
];

const basePath = process.cwd();

pages.forEach(({ slug, title, desc }) => {
  const dirPath = path.join(basePath, 'src', 'app', slug);
  
  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Create page content
  const content = `"use client";

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
            ${title}
          </h1>
          <p className="text-xl text-[var(--color-ivory)]/70 font-light max-w-2xl leading-relaxed">
            ${desc}
          </p>
        </motion.div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-[var(--color-ivory)]/60">
            このページは現在開発中であり、まもなく完全なコンテンツが更新される予定です。
            ${title}に関連する当社の高度な能力の詳細については、後日またご確認ください。
          </p>
        </div>
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log(`Updated page: /${slug}`);
});

console.log("All Japanese pages generated successfully.");
