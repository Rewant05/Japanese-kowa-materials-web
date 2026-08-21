"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Microscope, 
  Cpu, 
  Flame, 
  Zap, 
  Sparkles, 
  FileText, 
  Share2, 
  Layers, 
  Check, 
  ArrowRight,
  Atom,
  Binary,
  Compass,
  TestTube2
} from "lucide-react";

const rdStats = [
  { label: "年間R&D投資額", value: "85億円", sub: "売上比 6.6%の継続投資" },
  { label: "保有特許数", value: "420件+", sub: "国内310件 / 海外110件" },
  { label: "専任研究員数", value: "180名+", sub: "工学・理学博士 45名在籍" },
  { label: "グローバル連携機関", value: "35機関", sub: "東京大・東北大・Max Planck等" },
];

const laboratories = [
  {
    id: "nano",
    icon: <Atom size={28} />,
    name: "ナノ結晶・耐熱超合金構造解析センター",
    category: "構造材料 / 冶金学",
    location: "仙台先端イノベーションセンター",
    summary: "原子レベルでの結晶方位制御と粒界工学により、1,200℃の極限環境でも変形しない次世代ニッケル基・高エントロピー超合金を設計。",
    details: [
      "原子分解能 0.05nm の収差補正走査透過電子顕微鏡（Cs-corrected STEM）による微細析出相解析",
      "高エントロピー合金（HEA）における短範囲規則構造（SRO）の解明と耐クリープ性向上",
      "次世代ジェットエンジン高圧タービンブレード向け単結晶合金（Kōwa-SX9）の開発",
    ],
    tags: ["単結晶合金", "TEM解析", "耐クリープ性", "粒界工学"],
    accent: "var(--color-copper)",
  },
  {
    id: "ai",
    icon: <Binary size={28} />,
    name: "AIマテリアルズ・インフォマティクス推進室",
    category: "計算材料科学 / 機械学習",
    location: "東京本社 R&Dデータ科学ラボ",
    summary: "数十万件の材料物性ビッグデータと機械学習モデルを融合し、新材料の探索から試作までの期間を従来の1/3に短縮。",
    details: [
      "第一原理計算（DFT）と深層学習ポテンシャル（NNP）を組み合わせた結晶構造・相安定性の超高速スクリーニング",
      "ベイズ最適化による多成分合金の熱処理プロセス（温度・冷却速度・時効時間）自動条件探索",
      "生成AIを活用した未知組成の物性逆問題解析（Inverse Design）アルゴリズムの独自実装",
    ],
    tags: ["第一原理計算", "ベイズ最適化", "組成探索", "Python/PyTorch"],
    accent: "var(--color-industrial-blue)",
  },
  {
    id: "coating",
    icon: <Sparkles size={28} />,
    name: "極限環境・ナノ表面改質研究所",
    category: "表面化学 / プラズマ技術",
    location: "大阪先端化学事業所",
    summary: "プラズマCVDおよびスパッタリング技術を極限まで高め、耐摩耗性・耐プラズマ性・自己修復機能を持つ機能性ナノ膜を創出。",
    details: [
      "水素フリーDLC（ta-C）による超低摩擦係数（μ < 0.02）と極限硬度（HV > 6,000）の同時達成",
      "半導体エッチング装置向け超高純度イットリア（Y2O3）耐プラズマナノコーティング",
      "過酷海洋環境下で微小傷を自己封孔するスマート防食マイクロカプセル層の成膜技術",
    ],
    tags: ["水素フリーDLC", "耐プラズマ", "薄膜CVD", "自己修復"],
    accent: "var(--color-deepred)",
  },
  {
    id: "green",
    icon: <Flame size={28} />,
    name: "次世代水素・クリーン製鉄プロセスラボ",
    category: "プロセス工学 / 脱炭素技術",
    location: "北九州特殊製鉄所",
    summary: "コークスを用いず100%グリーン水素を用いて鉄鉱石を直接還元する新世代冶金炉と、超低電力アーク炉の基盤研究。",
    details: [
      "水素直接還元（DRI）における還元反応速度論の解明とスケールアップ反応器設計",
      "電炉排熱の熱電変換回収システムとプラズマ予熱技術によるエネルギー消費30%削減",
      "高品位スクラップ選別におけるAI高速X線分光自動選別ロボットシステムの共同実証",
    ],
    tags: ["水素直接還元", "ゼロカーボン製鉄", "電炉高度化", "排熱回収"],
    accent: "#e59866",
  },
];

const equipmentList = [
  {
    name: "収差補正 電界放出形透過電子顕微鏡（Cs-corrected STEM）",
    spec: "加速電圧: 300kV / 空間分解能: 0.05nm (50ピコメートル)",
    usage: "合金粒界の原子配列および微小析出物の3次元元素マッピング",
  },
  {
    name: "高輝度X線光電子分光装置（XPS / Hard X-ray HA-XPES）",
    spec: "単色化Al Kα線 / 深度方向オージェプロファイル分析対応",
    usage: "コーティング最表面の化学結合状態およびナノ界面相互作用の精密定量",
  },
  {
    name: "超高温・超高圧 サーマルメカニカルシミュレーター",
    spec: "最高加熱温度: 1,800℃ / 昇温速度: 10,000℃/sec / 最大荷重: 200kN",
    usage: "熱間鍛造、急速凝固、熱処理プロセスの完全動的再現と組織変化予測",
  },
  {
    name: "放射光施設 SPring-8 専用ビームライン計測連携",
    spec: "高エネルギー放射光X線回折（SXRD）/ 超高速時間分解その場観察",
    usage: "実稼働応力下における材料内部の転位密度変化とき裂進展のリアルタイム解析",
  },
];

const papers = [
  {
    journal: "Acta Materialia, Vol. 248 (2025)",
    title: "Phase stability and exceptional creep resistance in multicomponent Ni-Co-Cr superalloys via grain-boundary engineering",
    authors: "K. Sato, T. Kowa, et al. (Joint with Tohoku University)",
    doi: "10.1016/j.actamat.2025.118942",
  },
  {
    journal: "Nature Materials (2024)",
    title: "Deep learning accelerated discovery of ultra-high-entropy coatings with unprecedented wear resistance",
    authors: "R&D Informatics Lab, Kōwa Materials & Chemical Co., Ltd.",
    doi: "10.1038/s41563-024-01982-x",
  },
  {
    journal: "ISIJ International, Vol. 64 (2024)",
    title: "Kinetics of hydrogen direct reduction in high-purity iron pellets under pressurized fluidized bed conditions",
    authors: "M. Takahashi, Y. Yamamoto, et al.",
    doi: "10.2355/isijinternational.ISIJINT-2024-055",
  },
];

export default function ResearchPage() {
  const [activeLabId, setActiveLabId] = useState("nano");
  const activeLab = laboratories.find((l) => l.id === activeLabId) || laboratories[0];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--color-copper)]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <Microscope size={14} />
              <span>RESEARCH & DEVELOPMENT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              原子の配列から、<br />
              <span className="text-[var(--color-copper)]">人類の未来を創る。</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/75 leading-relaxed font-light">
              鋼和の研究開発（R&D）は、ナノスケールの物理冶金学と最新のAIマテリアルズ・インフォマティクスを融合。極限環境を克服する超合金や新世代コーティングを創出しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* R&D Key Metrics */}
      <section className="py-12 border-b border-white/10 bg-[#18181b]/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {rdStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--color-copper)]/40 transition-colors"
            >
              <div className="text-xs font-mono text-[var(--color-copper)] font-semibold mb-2">{stat.label}</div>
              <div className="text-3xl lg:text-4xl font-bold text-[var(--color-ivory)] tracking-tight mb-1">{stat.value}</div>
              <div className="text-xs text-[var(--color-ivory)]/50">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4 Specialized Research Laboratories */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Research Facilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-[var(--color-ivory)]">
              4つの基幹先端研究所
            </h2>
            <p className="text-[var(--color-ivory)]/70 text-base md:text-lg">
              構造材料からデータ科学、表面ナノテクノロジー、ゼロカーボン製鉄まで、多角的な研究体制を構築しています。
            </p>
          </div>

          {/* Interactive Lab Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {laboratories.map((lab) => {
              const isSelected = lab.id === activeLabId;
              return (
                <button
                  key={lab.id}
                  onClick={() => setActiveLabId(lab.id)}
                  className={`p-5 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between h-36 ${
                    isSelected
                      ? "bg-white/10 border-[var(--color-copper)] shadow-lg shadow-[var(--color-copper)]/10"
                      : "bg-white/5 border-white/5 hover:bg-white/[0.08] hover:border-white/20 text-[var(--color-ivory)]/70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span style={{ color: isSelected ? lab.accent : "inherit" }}>{lab.icon}</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-white/5">
                      {lab.category.split(" / ")[0]}
                    </span>
                  </div>
                  <div className={`text-sm font-bold leading-snug line-clamp-2 ${isSelected ? "text-[var(--color-ivory)]" : ""}`}>
                    {lab.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Lab Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#161618] border border-white/15 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none rounded-full blur-3xl" style={{ backgroundColor: activeLab.accent }} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold" style={{ backgroundColor: `${activeLab.accent}25`, color: activeLab.accent }}>
                      {activeLab.category}
                    </span>
                    <span className="text-xs text-[var(--color-ivory)]/50 font-mono">拠点: {activeLab.location}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ivory)]">
                    {activeLab.name}
                  </h3>

                  <p className="text-[var(--color-ivory)]/80 text-base leading-relaxed">
                    {activeLab.summary}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-[var(--color-copper)] font-bold uppercase tracking-wider">
                      重点研究テーマ・技術実績
                    </div>
                    {activeLab.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-[var(--color-ivory)]/85">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5" style={{ color: activeLab.accent }}>
                          <Check size={12} />
                        </div>
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeLab.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[var(--color-ivory)]/70">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Simulation / Diagram */}
                <div className="lg:col-span-5 h-full flex flex-col justify-center">
                  <div className="relative aspect-square rounded-xl bg-[#0e0e10] border border-white/10 p-6 flex flex-col justify-between overflow-hidden group shadow-inner">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-ivory)]/50 border-b border-white/10 pb-3">
                      <span>SIMULATION_MONITOR</span>
                      <span className="text-[var(--color-copper)] flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        ONLINE
                      </span>
                    </div>

                    <div className="relative my-auto flex items-center justify-center">
                      <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-[0_0_20px_rgba(74,122,113,0.3)]">
                        <motion.circle
                          cx="100" cy="100" r="70"
                          fill="none"
                          stroke={activeLab.accent}
                          strokeWidth="1"
                          strokeDasharray="4 6"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle
                          cx="100" cy="100" r="45"
                          fill="none"
                          stroke="var(--color-ivory)"
                          strokeWidth="1.5"
                          opacity="0.3"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Hexagon lattice */}
                        <polygon
                          points="100,60 135,80 135,120 100,140 65,120 65,80"
                          fill="none"
                          stroke={activeLab.accent}
                          strokeWidth="2"
                        />
                        <circle cx="100" cy="100" r="8" fill="var(--color-ivory)" />
                      </svg>
                    </div>

                    <div className="text-[10px] font-mono text-[var(--color-ivory)]/40 flex justify-between border-t border-white/10 pt-3">
                      <span>結晶格子エネルギー: 4.82 eV</span>
                      <span>収束率: 99.98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Advanced Equipment Showcase */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#161618]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Metrology & Testing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-ivory)]">
              世界水準の分析・計測設備
            </h2>
            <p className="text-[var(--color-ivory)]/70 text-sm md:text-base mt-2">
              ナノメートルから実大構造物まで、材料の物性を完全に把握するための最先端機器群を保有しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipmentList.map((eq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-copper)]/50 transition-colors"
              >
                <div className="text-xs font-mono text-[var(--color-copper)] font-bold mb-3 flex items-center gap-2">
                  <TestTube2 size={16} />
                  <span>INSTRUMENT 0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-ivory)] mb-3">{eq.name}</h3>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5 font-mono text-xs text-[var(--color-copper)] mb-4">
                  {eq.spec}
                </div>
                <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed">
                  {eq.usage}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Papers & Patents */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Recent Papers */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
                  Publications
                </span>
                <h2 className="text-3xl font-bold mt-2 text-[var(--color-ivory)]">
                  主な学術論文・研究発表
                </h2>
              </div>

              <div className="space-y-4">
                {papers.map((paper, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                    <div className="text-xs font-mono text-[var(--color-copper)] font-semibold mb-2">{paper.journal}</div>
                    <h4 className="text-base font-bold text-[var(--color-ivory)] mb-2 leading-snug">{paper.title}</h4>
                    <div className="text-xs text-[var(--color-ivory)]/60 mb-3">{paper.authors}</div>
                    <div className="text-[11px] font-mono text-white/40">DOI: {paper.doi}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Joint R&D & Open Innovation */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-[#1c1c1e] to-[#22242a] p-8 md:p-10 rounded-2xl border border-white/15 shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-copper)]/20 border border-[var(--color-copper)]/40 flex items-center justify-center text-[var(--color-copper)] mb-6">
                  <Share2 size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-ivory)]">産学連携・受託試作開発プログラム</h3>
                <p className="text-sm text-[var(--color-ivory)]/75 leading-relaxed mb-6">
                  鋼和素材では、国内外の大学・研究機関、および航空宇宙・次世代モビリティ分野の民間企業様との共同研究や、特定用途に応じたカスタマイズ合金・表面コーティングの受託試作を積極的に受け付けています。
                </p>
                <div className="space-y-2 text-xs text-[var(--color-ivory)]/70">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[var(--color-copper)]" />
                    <span>数十キログラム単位の少量溶解試作から対応</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[var(--color-copper)]" />
                    <span>秘密保持契約（NDA）に基づく機密体制</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[var(--color-copper)]" />
                    <span>物性試験データ・TEM組織写真の包括レポート提出</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full py-4 rounded-xl bg-[var(--color-copper)] text-white text-center font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-copper)]/20"
                >
                  <span>技術相談・共同研究のご相談</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
