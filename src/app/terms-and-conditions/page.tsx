"use client";

import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-gunmetal)] text-[var(--color-ivory)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-12 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            利用規約
          </h1>
          <p className="text-sm text-[var(--color-ivory)]/50 tracking-widest uppercase">
            最終更新日: 2026年8月17日
          </p>
        </motion.div>
        
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[var(--color-industrial-blue)]">
          <h2>1. はじめに</h2>
          <p>
            この利用規約（以下、「本規約」）は、鋼和素材（以下、「当社」）が提供するウェブサイトおよび関連サービス（以下、「本サービス」）の利用条件を定めるものです。本サービスを利用される方（以下、「ユーザー」）は、本規約に同意したものとみなされます。
          </p>

          <h2>2. 知的財産権</h2>
          <p>
            本サービスに掲載されているテキスト、画像、動画、ロゴ、ソフトウェア等のすべてのコンテンツに関する著作権、商標権等の知的財産権は、当社または正当な権利者に帰属します。無断での複製、転載、改変、配布等は禁止されています。
          </p>

          <h2>3. 禁止事項</h2>
          <p>
            ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
          </p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>当社または第三者の知的財産権、プライバシー権を侵害する行為</li>
            <li>本サービスの運営を妨害する行為、または当社のシステムに不正にアクセスする行為</li>
            <li>虚偽の情報を申告・提供する行為</li>
          </ul>

          <h2>4. 免責事項</h2>
          <p>
            当社は、本サービスに掲載される情報の正確性や完全性について、いかなる保証も行いません。本サービスの利用によりユーザーに生じたいかなる損害についても、当社は一切の責任を負いません。また、当社は事前の予告なく本サービスの全部または一部を停止・変更することがあります。
          </p>

          <h2>5. リンクについて</h2>
          <p>
            本サイトからのリンク先、または本サイトへのリンク元の第三者のウェブサイトの内容について、当社は責任を負いません。第三者のウェブサイトの利用は、ユーザーご自身の責任において行ってください。
          </p>

          <h2>6. 準拠法および管轄裁判所</h2>
          <p>
            本規約の解釈および適用は、日本国法に準拠するものとします。本サービスに関する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </div>
      </div>
    </div>
  );
}
