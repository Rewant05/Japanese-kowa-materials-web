"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Rocket, 
  Car, 
  Flame, 
  Cpu, 
  HeartPulse, 
  Anchor, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  ShieldAlert
} from "lucide-react";

const sectors = [
  {
    id: "aerospace",
    name: "航空宇宙・衛星・ロケット推進",
    icon: <Rocket size={32} className="text-[#38bdf8]" />,
    headline: "極超音速と深宇宙の極低温を耐え抜く、究極の超合金とマルエージング鋼。",
    challenges: "打ち上げ時の強烈な熱衝撃（1,400℃急昇温）、極低温液体水素（-253℃）環境下での脆性破壊防止、および機体超軽量化。",
    solution: "超高清浄度VIM精錬によるKW-SUPER 718Xニッケル基超合金および超高張力KW-MARAGE 350を供給。ロケット燃焼室ライナーおよびターボポンプ部品に採用。",
    results: ["エンジン燃焼効率 14% 向上", "ロケット構造重量 22% 削減", "過酷熱サイクル疲労寿命 3.5倍 延伸"],
    usedMaterials: ["KW-SUPER 718X", "KW-MARAGE 350", "KW-TI 64-ELI"],
  },
  {
    id: "mobility",
    name: "次世代EV・超高効率モビリティ",
    icon: <Car size={32} className="text-[var(--color-copper)]" />,
    headline: "高回転モーターの鉄損低減と、軽量高強度バッテリーケージ用低炭素特殊鋼。",
    challenges: "20,000rpmを超える超高回転モーターの発熱・エネルギーロス、および衝突安全性を担保しながらの車体軽量化。",
    solution: "ナノ結晶高飽和磁束密度合金（KW-MAG 100）によるモーターコア積層材と、引張強度1,500MPa級の超高張力ホットスタンプ鋼板の組み合わせ。",
    results: ["EV走行航続距離 8.5% 延長", "モーター発熱量 30% 低減", "衝突時キャビン変形量 40% 抑制"],
    usedMaterials: ["KW-MAG 100", "Kōwa-Green™ S550", "KW-DLC ULTRA-ta-C"],
  },
  {
    id: "energy",
    name: "水素社会・次世代エネルギーインフラ",
    icon: <Flame size={32} className="text-[#ff8a00]" />,
    headline: "高圧水素脆化を完全に克服するオーステナイト特殊合金と自己修復防食層。",
    challenges: "70MPa〜100MPaの超高圧水素ガス配管・充填ノズルにおける水素侵入による遅れ破壊（水素脆化）。",
    solution: "水素侵入バリアとして機能するナノコーティングと、Ni-Cr-Mo組成を精密に制御した耐水素脆化特殊ステンレス鋼を開発。",
    results: ["水素ステーション配管寿命 20年 保証", "水素侵入透過速度 99% カット", "高圧バルブ開閉耐久 100万回 達成"],
    usedMaterials: ["KW-HYPRO 316L+", "防食マトリックスナノ層", "Kōwa-Green™ S550"],
  },
  {
    id: "semiconductor",
    name: "先端半導体・超精密製造装置",
    icon: <Cpu size={32} className="text-[#a78bfa]" />,
    headline: "極端紫外線（EUV）露光・プラズマエッチングに耐える超高純度材料。",
    challenges: "塩素・フッ素腐食性プラズマガスによるチャンバー部材の消耗とパーティクル（微小異物）発生による歩留まり低下。",
    solution: "超高純度イットリア（Y2O3）溶射セラミックスおよびフッ素樹脂複合体によるナノ保護膜。プラズマ消耗量を極限まで抑制。",
    results: ["装置メンテナンスサイクル 4倍 延伸", "ウェハ不良率 45% 低減", "微小パーティクル発生量 80% 削減"],
    usedMaterials: ["フッ素樹脂複合体", "耐プラズマY2O3ナノ膜", "KW-DLC ULTRA-ta-C"],
  },
  {
    id: "medical",
    name: "医療機器・生体適合インプラント",
    icon: <HeartPulse size={32} className="text-[#f43f5e]" />,
    headline: "人体と共生する生体不活性チタン合金と高耐久人工関節ナノ被膜。",
    challenges: "体液環境下での腐食・金属イオン溶出リスクの完全防止と、骨組織との親和性（オッセオインテグレーション）の向上。",
    solution: "高清浄度チタン合金（Grade 23 ELI）と、生体適合性認証済みta-CナノDLCコーティングによる摺動部摩擦低減。",
    results: ["人工関節摩耗粉発生量 90% 削減", "生体組織適合率 99.8%", "再手術リスクの大幅低減"],
    usedMaterials: ["KW-TI 64-ELI", "KW-DLC ULTRA-ta-C"],
  },
  {
    id: "marine",
    name: "深海海洋資源探査・洋上風力発電",
    icon: <Anchor size={32} className="text-[#2dd4bf]" />,
    headline: "水深6,000mの極高水圧と過酷な塩水腐食に立ち向かう耐海水スーパー二相鋼。",
    challenges: "深海高水圧（600気圧以上）下での座屈強度と、長期浸漬による孔食・隙間腐食・海洋生物付着。",
    solution: "孔食指数（PREN > 45）を誇るスーパー二相ステンレス鋼と、無害な防汚・自己修復マイクロカプセル層のハイブリッド施工。",
    results: ["海洋インフラ無保守設計寿命 30年", "耐孔食性 5倍 向上", "耐水圧深度 8,000m 到達"],
    usedMaterials: ["KW-DUPLEX 2507X", "防食マトリックスナノ層", "Kōwa-Green™ S550"],
  },
];

export default function ApplicationsPage() {
  const [activeSectorId, setActiveSectorId] = useState(sectors[0].id);
  const activeSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-copper)]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <Rocket size={14} />
              <span>INDUSTRY APPLICATIONS & CASE STUDIES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              過酷な現場で、<br />
              <span className="text-[var(--color-copper)]">真価を発揮する素材。</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/75 leading-relaxed font-light">
              航空宇宙、次世代EV、水素エネルギー、半導体、医療、海洋開発。鋼和の先端マテリアルが、世界の最前線でイノベーションを駆動しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sector Navigation & Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Sector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {sectors.map((sec) => {
              const isSelected = sec.id === activeSectorId;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectorId(sec.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-32 ${
                    isSelected
                      ? "bg-white/10 border-[var(--color-copper)] shadow-lg shadow-[var(--color-copper)]/15"
                      : "bg-white/5 border-white/5 hover:bg-white/[0.08] hover:border-white/20 text-[var(--color-ivory)]/70"
                  }`}
                >
                  <div>{sec.icon}</div>
                  <div className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? "text-[var(--color-ivory)]" : ""}`}>
                    {sec.name.split("・")[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Sector Case Study Card */}
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#1c1c1e] to-[#161618] border border-white/15 shadow-2xl space-y-10"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-copper)]/15 text-[var(--color-copper)] text-xs font-mono">
                  <span>APPLICATION DOMAIN</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-ivory)]">
                  {activeSector.name}
                </h2>
                <p className="text-base text-[var(--color-ivory)]/80 max-w-3xl leading-relaxed">
                  {activeSector.headline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                {activeSector.usedMaterials.map((mat, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/10 font-mono text-xs text-[var(--color-copper)] border border-white/10">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem / Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="text-xs font-mono text-[#f87171] font-bold uppercase flex items-center gap-2">
                  <ShieldAlert size={16} />
                  <span>技術的課題（Technical Challenges）</span>
                </div>
                <p className="text-sm text-[var(--color-ivory)]/80 leading-relaxed">
                  {activeSector.challenges}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="text-xs font-mono text-[var(--color-copper)] font-bold uppercase flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>鋼和のソリューション（Our Solution）</span>
                </div>
                <p className="text-sm text-[var(--color-ivory)]/80 leading-relaxed">
                  {activeSector.solution}
                </p>
              </div>
            </div>

            {/* Metrics Impact */}
            <div>
              <h4 className="text-xs font-mono text-[var(--color-copper)] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <TrendingUp size={16} />
                <span>実証された性能インパクト（Proven Outcomes）</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeSector.results.map((res, rIdx) => (
                  <div key={rIdx} className="p-5 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-copper)]/20 text-[var(--color-copper)] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      0{rIdx + 1}
                    </div>
                    <span className="text-sm font-bold text-[var(--color-ivory)]">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA within card */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-[var(--color-ivory)]/60">
                {activeSector.name}向けのカスタム仕様相談・サンプル請求を承ります
              </span>
              <Link
                href={`/contact?sector=${encodeURIComponent(activeSector.name)}`}
                className="px-6 py-3 rounded-xl bg-[var(--color-copper)] text-white text-xs font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors flex items-center gap-2"
              >
                <span>この分野の技術相談をする</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-Industry Summary Grid */}
      <section className="py-16 px-6 border-t border-white/10 bg-[#161618]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-ivory)]">全産業分野の包括的サポート</h2>
            <p className="text-[var(--color-ivory)]/70 text-sm md:text-base">
              お客様の設計段階から材料選定、試作、評価試験まで専任の冶金エンジニアチームが並走します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                <div className="mb-4">{sec.icon}</div>
                <h3 className="text-lg font-bold text-[var(--color-ivory)] mb-2">{sec.name}</h3>
                <p className="text-xs text-[var(--color-ivory)]/70 leading-relaxed mb-4">{sec.headline}</p>
                <div className="flex flex-wrap gap-1">
                  {sec.usedMaterials.map((m, mIdx) => (
                    <span key={mIdx} className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-[var(--color-copper)] font-mono">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
