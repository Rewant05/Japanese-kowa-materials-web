"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Briefcase, GraduationCap, Heart, CheckCircle2, ArrowRight, MapPin, Building } from "lucide-react";

const positions = [
  {
    title: "材料科学・冶金プロセス研究員（R&D）",
    dept: "仙台先端イノベーションセンター / ナノ構造解析部門",
    type: "正社員（中途・新卒）",
    desc: "高エントロピー超合金および耐熱ニッケル基合金の組成設計、TEM/SEM微細組織観察、高温クリープ疲労試験の主導。",
    requirements: "材料工学・金属工学・物理学・化学専攻の修士または博士号（あるいは同等の実務経験）",
  },
  {
    title: "AIマテリアルズ・インフォマティクス エンジニア",
    dept: "東京本社 / R&Dデータ科学推進室",
    type: "正社員（中途歓迎）",
    desc: "第一原理計算（DFT）および機械学習モデルを用いた合金物性予測アルゴリズムの開発と社内探索基盤の実装。",
    requirements: "Python / PyTorchによる機械学習開発経験、材料計算科学またはデータサイエンスの実務経験",
  },
  {
    title: "製造技術・プロセスエンジニア（VIM/HIP）",
    dept: "北九州特殊製鉄所 / 製造本部",
    type: "正社員",
    desc: "大型真空誘導溶解（VIM）炉およびHIP熱間等方加圧設備の操業最適化、歩留まり向上、省エネ電炉プロセスの設計。",
    requirements: "金属製錬、鍛造、熱処理分野での製造技術・生産技術経験3年以上",
  },
  {
    title: "グローバル技術営業・アカウントマネージャー",
    dept: "東京本社 / グローバル営業本部（欧州・北米担当）",
    type: "正社員",
    desc: "国内外の航空宇宙・次世代EVメーカーへの特殊鋼・コーティング材料の技術提案、仕様協議および受託試作プロジェクト管理。",
    requirements: "B2B製造業または商社での営業経験、ビジネスレベルの英語力（TOEIC 800点相当以上）",
  },
];

const benefits = [
  {
    icon: <GraduationCap size={24} className="text-[var(--color-copper)]" />,
    title: "先端研究環境＆博士号取得支援",
    desc: "最新の電子顕微鏡やスーパーコンピュータ計算環境を完備。論文執筆や国内外学会への参加費用、社会人博士課程の学費を全額支援。",
  },
  {
    icon: <Heart size={24} className="text-[var(--color-deepred)]" />,
    title: "充実の福利厚生・ライフワークバランス",
    desc: "完全週休2日制（年間休日125日）、フレックスタイム制、在宅勤務制度、独身寮・社宅完備、育児・介護休業取得率100%。",
  },
  {
    icon: <Building size={24} className="text-[var(--color-industrial-blue)]" />,
    title: "グローバルキャリアパス",
    desc: "ドイツ（デュッセルドルフ）、シンガポール、米国拠点への海外赴任制度や、海外共同研究機関（Max Planck研究所等）への派遣制度。",
  },
];

export default function CareersPage() {
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
              <Users size={14} />
              <span>CAREERS & RECRUITING</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              1ミクロンに情熱を捧ぐ、<br />
              <span className="text-[var(--color-copper)]">プロフェッショナル求む。</span>
            </h1>
            <p className="text-lg text-[var(--color-ivory)]/75 leading-relaxed font-light max-w-2xl mx-auto">
              鋼和素材と共に、世界の基幹産業を根幹から支える革新マテリアルを創りませんか。あなたの探求心と技術が、次の時代のインフラになります。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-ivory)] mb-4">成長と挑戦を支える制度・環境</h2>
            <p className="text-[var(--color-ivory)]/70 text-sm md:text-base">
              研究者が純粋に科学と技術に向き合い、最大のパフォーマンスを発揮できる環境を整えています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div>{b.icon}</div>
                <h3 className="text-xl font-bold text-[var(--color-ivory)]">{b.title}</h3>
                <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-ivory)] mb-3">現在募集中のポジション</h2>
            <p className="text-sm text-[var(--color-ivory)]/60">
              経験者採用・新卒採用ともに通年でエントリーを受け付けております。
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#161618] border border-white/10 hover:border-[var(--color-copper)]/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-[var(--color-copper)]/20 text-[var(--color-copper)] font-bold">
                      {pos.type}
                    </span>
                    <span className="text-[var(--color-ivory)]/50">{pos.dept}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-ivory)]">{pos.title}</h3>
                  <p className="text-sm text-[var(--color-ivory)]/75 leading-relaxed">{pos.desc}</p>
                  <div className="text-xs text-[var(--color-ivory)]/50 pt-1">
                    <span className="font-bold text-[var(--color-copper)]">応募要件:</span> {pos.requirements}
                  </div>
                </div>

                <Link
                  href={`/contact?inquiryType=採用・企業情報&position=${encodeURIComponent(pos.title)}`}
                  className="px-6 py-3 rounded-xl bg-[var(--color-copper)] text-white text-xs font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-[var(--color-copper)]/20"
                >
                  <span>エントリーする</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
