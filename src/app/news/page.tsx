"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Newspaper, Calendar, Tag, ArrowRight, ArrowUpRight, Search } from "lucide-react";

interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  tag: string;
}

const newsData: NewsItem[] = [
  {
    id: "n1",
    date: "2026.08.15",
    category: "技術・製品発表",
    title: "1,200℃耐熱の次世代航空宇宙用ニッケル基超合金「KW-SUPER 718X」の商用供給を開始",
    summary: "真空誘導溶解（VIM）と特殊熱処理の融合により、従来のインコネル718を大幅に上回る耐クリープ性と高温強度を達成した新合金の量産体制を確立いたしました。",
    tag: "新素材リリース",
  },
  {
    id: "n2",
    date: "2026.07.28",
    category: "ESG・環境",
    title: "低炭素エコ特殊鋼「Kōwa-Green™」シリーズが国際環境認証（CFP）を取得",
    summary: "100%再生可能エネルギー電炉製錬と高品位スクラップ循環により、製造時CO2排出量を78%削減。製品単位のカーボンフットプリント算定データシートの提供を開始しました。",
    tag: "サステナビリティ",
  },
  {
    id: "n3",
    date: "2026.06.10",
    category: "研究開発",
    title: "東北大学金属材料研究所との共同研究成果が『Acta Materialia』誌に掲載されました",
    summary: "AIマテリアルズ・インフォマティクスを活用した多元系高エントロピー合金の短範囲規則構造（SRO）の解明および粒界工学に関する共著論文が国際学術誌に採択されました。",
    tag: "学術論文",
  },
  {
    id: "n4",
    date: "2026.05.20",
    category: "企業情報",
    title: "北九州特殊製鉄所における新鋭大型HIP（熱間等方加圧）成型炉の増設稼働について",
    summary: "半導体製造装置向け大型スパッタリングターゲット材および航空エンジン部品の需要急増に対応するため、総投資額35億円を投じた新HIPラインが本格稼働を開始しました。",
    tag: "設備投資",
  },
  {
    id: "n5",
    date: "2026.04.05",
    category: "展示会出展",
    title: "「第15回 高機能金属展（メタル ジャパン）」出展のお知らせ（東京ビッグサイト）",
    summary: "2026年10月開催の高機能素材Week内「メタル ジャパン」にて、水素フリーDLCナノコーティングおよび3D積層造形用アトマイズ粉末の実機デモ展示を行います。",
    tag: "イベント",
  },
];

export default function NewsPage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [query, setQuery] = useState("");

  const filteredNews = newsData.filter((item) => {
    const matchCat = selectedCat === "all" || item.category === selectedCat;
    const matchQuery =
      query === "" ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.summary.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  const categories = ["all", "技術・製品発表", "ESG・環境", "研究開発", "企業情報", "展示会出展"];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Header */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <Newspaper size={14} />
              <span>NEWS & PRESS RELEASES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              ニュース＆プレスリリース
            </h1>
            <p className="text-lg text-[var(--color-ivory)]/75 leading-relaxed font-light max-w-2xl mx-auto mb-8">
              鋼和素材株式会社の最新の製品発表、研究開発成果、設備投資、イベント出展情報をお届けします。
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ニュースを検索..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/40 focus:outline-none focus:border-[var(--color-copper)]"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" size={16} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main News List */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => {
              const active = selectedCat === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                    active
                      ? "bg-[var(--color-copper)] text-white"
                      : "bg-white/5 border border-white/10 text-[var(--color-ivory)]/70 hover:bg-white/10"
                  }`}
                >
                  {c === "all" ? "全カテゴリー" : c}
                </button>
              );
            })}
          </div>

          {/* List */}
          <div className="space-y-6">
            {filteredNews.map((news) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-copper)]/50 transition-all group"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
                  <div className="flex items-center gap-1.5 text-[var(--color-copper)]">
                    <Calendar size={13} />
                    <span>{news.date}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-[var(--color-ivory)]/80">
                    {news.category}
                  </span>
                  <span className="text-[10px] text-[var(--color-ivory)]/40">
                    #{news.tag}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ivory)] mb-3 group-hover:text-[var(--color-copper)] transition-colors leading-snug">
                  {news.title}
                </h2>

                <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed">
                  {news.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
