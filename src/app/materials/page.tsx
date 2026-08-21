"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Layers, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  Zap, 
  Leaf, 
  ArrowRight, 
  Download, 
  FileText, 
  Filter,
  CheckCircle2,
  Cpu
} from "lucide-react";

interface MaterialItem {
  id: string;
  code: string;
  name: string;
  category: string;
  headline: string;
  tensileStrength: string;
  yieldStrength: string;
  maxTemp: string;
  density: string;
  hardness: string;
  applications: string[];
  forms: string[];
  features: string[];
  accent: string;
}

const materialCategories = [
  { id: "all", label: "全素材一覧" },
  { id: "steel", label: "高張力・特殊鋼", icon: <Layers size={14} /> },
  { id: "superalloy", label: "超耐熱・ニッケル合金", icon: <Flame size={14} /> },
  { id: "coating", label: "DLC・表面改質", icon: <Sparkles size={14} /> },
  { id: "magnetic", label: "機能性・電子材料", icon: <Cpu size={14} /> },
  { id: "green", label: "低炭素 Kōwa-Green™", icon: <Leaf size={14} /> },
];

const materials: MaterialItem[] = [
  {
    id: "m-maraging",
    code: "KW-MARAGE 350",
    name: "超高張力マルエージング鋼",
    category: "steel",
    headline: "引張強度 2,400 MPa を超える極限靭性と熱処理寸法安定性を兼ね備えた最高峰特殊鋼。",
    tensileStrength: "2,450 MPa",
    yieldStrength: "2,350 MPa",
    maxTemp: "480 ℃",
    density: "8.05 g/cm³",
    hardness: "60 HRC",
    applications: ["航空宇宙ロケットモーターケース", "高回転ドライブシャフト", "超高圧圧力容器", "防衛用精密部材"],
    forms: ["丸棒（鍛造）", "厚板", "アトマイズ粉末（金属3D積層造形用）"],
    features: ["Coフリー組成による低環境負荷", "時効硬化時の寸法歪みが極小（±0.02%未満）", "破壊靭性値 KIC 45 MPa√m"],
    accent: "var(--color-copper)",
  },
  {
    id: "m-inconel",
    code: "KW-SUPER 718X",
    name: "次世代耐熱ニッケル基超合金",
    category: "superalloy",
    headline: "700℃までの高温下で卓越した耐クリープ疲労性と耐酸化性を発揮する航空宇宙基幹材料。",
    tensileStrength: "1,480 MPa",
    yieldStrength: "1,220 MPa",
    maxTemp: "720 ℃",
    density: "8.19 g/cm³",
    hardness: "44 HRC",
    applications: ["航空ジェットエンジンタービンディスク", "ロケット燃焼器", "深海油田掘削バルブ", "ガスタービンブレード"],
    forms: ["精密鍛造品", "シームレスパイプ", "丸棒", "3Dプリンター粉末"],
    features: ["真空誘導溶解(VIM)＋真空アーク再溶解(VAR)による超高清浄度", "優れた耐応力腐食割れ性（SCC）", "溶接割れ感受性の極小化"],
    accent: "#ff8a00",
  },
  {
    id: "m-dlc",
    code: "KW-DLC ULTRA-ta-C",
    name: "水素フリー無アルゴンDLC薄膜",
    category: "coating",
    headline: "硬度 6,500 HV・摩擦係数 0.015 を達成する究極の固体潤滑・耐摩耗ナノコーティング。",
    tensileStrength: "界面密着力 > 80 N (HF1)",
    yieldStrength: "膜厚: 0.5 - 3.0 μm",
    maxTemp: "550 ℃",
    density: "3.25 g/cm³ (sp3比率 85%)",
    hardness: "6,500 HV",
    applications: ["自動車EV減速機ギヤ", "高精度半導体金型", "医療用人工関節", "水素燃料電池用セパレータ"],
    forms: ["受託薄膜コーティング処理（PVD/FCVA法）"],
    features: ["完全ドライ環境下での超低摩擦", "高sp3結合によるダイヤモンド近似硬度", "生体適合性（ISO 10993）完全準拠"],
    accent: "var(--color-deepred)",
  },
  {
    id: "m-softmag",
    code: "KW-MAG 100",
    name: "高飽和磁束密度 軟磁性合金",
    category: "magnetic",
    headline: "鉄損を極限まで低減し、超高効率EVモーターや次世代パワーインダクタの小型軽量化を推進。",
    tensileStrength: "580 MPa",
    yieldStrength: "450 MPa",
    maxTemp: "350 ℃",
    density: "7.75 g/cm³",
    hardness: "220 HV",
    applications: ["EV・ハイブリッド車駆動用アキシャルギャップモーター", "高周波トランスコア", "超電導シールド"],
    forms: ["極薄電磁帯鋼（厚さ 0.05mm〜0.2mm）", "積層ステータコア"],
    features: ["飽和磁束密度 Bs: 2.15 T", "高周波域（10kHz〜100kHz）での極低コアロス", "ナノ結晶組織制御"],
    accent: "var(--color-industrial-blue)",
  },
  {
    id: "m-greensteel",
    code: "Kōwa-Green™ S550",
    name: "低炭素・循環型高強度構造鋼",
    category: "green",
    headline: "100%再エネ電炉と高品位スクラップ製錬により、CO2排出量を78%削減した認証エコ鋼材。",
    tensileStrength: "780 MPa",
    yieldStrength: "550 MPa",
    maxTemp: "400 ℃",
    density: "7.85 g/cm³",
    hardness: "250 HBW",
    applications: ["洋上風力タワーフランジ", "次世代EVバッテリーフレーム", "耐震建築構造部材", "建設機械アーム"],
    forms: ["厚板（6mm〜120mm）", "H形鋼", "大型丸棒"],
    features: ["製造時CO2排出量: 0.42 t-CO2/t-steel（業界平均比-78%）", "第三者機関CFP認証書付き", "JIS・EN規格完全適合"],
    accent: "#4ade80",
  },
  {
    id: "m-titanium",
    code: "KW-TI 64-ELI",
    name: "高清浄度 チタン合金（Grade 23）",
    category: "superalloy",
    headline: "酸素・窒素不純物を極限まで排除した医療インプラントおよび極低温宇宙構造用チタン合金。",
    tensileStrength: "960 MPa",
    yieldStrength: "880 MPa",
    maxTemp: "400 ℃",
    density: "4.43 g/cm³",
    hardness: "32 HRC",
    applications: ["人工骨・脊椎固定インプラント", "液体水素燃料タンク", "航空機ファスナ・油圧配管"],
    forms: ["生体用丸棒", "極薄箔", "医療用3D造形粉末"],
    features: ["極低温（-253℃）でも優れた延性と耐衝撃性", "比強度（強度/密度比）が鉄の約2倍", "完全な生体不活性"],
    accent: "#38bdf8",
  },
];

export default function MaterialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalMaterial, setActiveModalMaterial] = useState<MaterialItem | null>(null);

  const filteredMaterials = materials.filter((m) => {
    if (selectedCategory === "all") return true;
    return m.category === selectedCategory;
  });

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[var(--color-copper)]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <Layers size={14} />
              <span>ADVANCED MATERIALS PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              極限を可能にする、<br />
              <span className="text-[var(--color-copper)]">鋼和の製品マテリアル</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/75 leading-relaxed font-light">
              超高張力特殊鋼から航空宇宙用ニッケル超合金、ダイヤモンドライクカーボン（DLC）、脱炭素エコ鋼材まで。世界最高峰の物性を誇るラインナップを展開しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-8 border-b border-white/10 bg-[#18181b]/60 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2 justify-start items-center">
          <div className="text-xs font-mono text-[var(--color-ivory)]/50 mr-2 flex items-center gap-1.5">
            <Filter size={14} />
            <span>CATEGORIES:</span>
          </div>
          {materialCategories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? "bg-[var(--color-copper)] text-white shadow-lg shadow-[var(--color-copper)]/20"
                    : "bg-white/5 border border-white/10 text-[var(--color-ivory)]/70 hover:bg-white/10 hover:text-[var(--color-ivory)]"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((mat, idx) => (
              <motion.div
                key={mat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl bg-gradient-to-b from-[#1c1c1e] to-[#161618] border border-white/10 hover:border-white/25 transition-all duration-300 p-8 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-2xl pointer-events-none" style={{ backgroundColor: mat.accent }} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-white/10 text-[var(--color-ivory)] tracking-wider">
                      {mat.code}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--color-copper)] uppercase">
                      {mat.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--color-ivory)] mb-3 group-hover:text-[var(--color-copper)] transition-colors">
                    {mat.name}
                  </h3>

                  <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed mb-6">
                    {mat.headline}
                  </p>

                  {/* Spec Quick Grid */}
                  <div className="grid grid-cols-2 gap-2.5 p-4 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs font-mono">
                    <div>
                      <span className="text-[var(--color-ivory)]/40 block text-[10px]">引張強度 / 密着力</span>
                      <span className="text-[var(--color-copper)] font-bold">{mat.tensileStrength}</span>
                    </div>
                    <div>
                      <span className="text-[var(--color-ivory)]/40 block text-[10px]">硬度</span>
                      <span className="text-[var(--color-ivory)] font-bold">{mat.hardness}</span>
                    </div>
                    <div>
                      <span className="text-[var(--color-ivory)]/40 block text-[10px]">最高使用温度</span>
                      <span className="text-[var(--color-ivory)]">{mat.maxTemp}</span>
                    </div>
                    <div>
                      <span className="text-[var(--color-ivory)]/40 block text-[10px]">密度 / 物性</span>
                      <span className="text-[var(--color-ivory)]">{mat.density}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    {mat.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--color-ivory)]/80">
                        <CheckCircle2 size={13} className="text-[var(--color-copper)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalMaterial(mat)}
                    className="text-xs font-bold text-[var(--color-copper)] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>詳細スペックを見る</span>
                    <ArrowRight size={14} />
                  </button>

                  <Link
                    href={`/contact?material=${encodeURIComponent(mat.code)}`}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[var(--color-copper)] text-xs font-medium transition-colors"
                  >
                    試作・見積り相談
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for detailed spec */}
      <AnimatePresence>
        {activeModalMaterial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1c1c1e] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs font-mono text-[var(--color-copper)] font-bold mb-1">
                    MATERIAL SPECIFICATION SHEET
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-ivory)]">{activeModalMaterial.name}</h3>
                  <div className="text-sm font-mono text-[var(--color-ivory)]/50">{activeModalMaterial.code}</div>
                </div>
                <button
                  onClick={() => setActiveModalMaterial(null)}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6 text-sm">
                <p className="text-[var(--color-ivory)]/80 leading-relaxed bg-white/5 p-4 rounded-xl">
                  {activeModalMaterial.headline}
                </p>

                <div>
                  <h4 className="font-bold text-[var(--color-copper)] text-xs font-mono uppercase mb-3">
                    機械的性質・物理物性データ
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-[var(--color-ivory)]/40 block">引張強度 (Tensile Strength):</span>
                      <span className="text-sm font-bold text-white">{activeModalMaterial.tensileStrength}</span>
                    </div>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-[var(--color-ivory)]/40 block">耐力 (Yield Strength / 膜厚):</span>
                      <span className="text-sm font-bold text-white">{activeModalMaterial.yieldStrength}</span>
                    </div>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-[var(--color-ivory)]/40 block">硬度 (Hardness):</span>
                      <span className="text-sm font-bold text-white">{activeModalMaterial.hardness}</span>
                    </div>
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5">
                      <span className="text-[var(--color-ivory)]/40 block">最高使用温度:</span>
                      <span className="text-sm font-bold text-white">{activeModalMaterial.maxTemp}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--color-copper)] text-xs font-mono uppercase mb-3">
                    供給可能形状・サプライフォーム
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalMaterial.forms.map((f, fIdx) => (
                      <span key={fIdx} className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[var(--color-ivory)]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[var(--color-copper)] text-xs font-mono uppercase mb-3">
                    主な適用産業・アプリケーション
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalMaterial.applications.map((app, aIdx) => (
                      <span key={aIdx} className="px-3 py-1 rounded-full bg-[var(--color-copper)]/20 text-[var(--color-copper)] text-xs font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/contact?material=${encodeURIComponent(activeModalMaterial.code)}`}
                    onClick={() => setActiveModalMaterial(null)}
                    className="flex-1 py-3 bg-[var(--color-copper)] text-white text-center font-bold rounded-xl hover:bg-[var(--color-copper)]/80 transition-colors"
                  >
                    この素材で見積り・試作相談
                  </Link>
                  <button
                    onClick={() => {
                      alert(`${activeModalMaterial.code} の技術データシート(TDS)ダウンロードリンクを準備中またはメール送信いたします。`);
                    }}
                    className="px-6 py-3 border border-white/20 text-[var(--color-ivory)] rounded-xl hover:bg-white/10 transition-colors font-medium flex items-center justify-center gap-2 text-xs font-mono"
                  >
                    <Download size={16} />
                    <span>データシート (PDF)</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#1c1c1e] to-[#252830] border border-white/15 text-center shadow-2xl flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">カタログにない特殊組成・試作開発も可能</h3>
          <p className="text-[var(--color-ivory)]/70 max-w-2xl text-sm md:text-base mb-8">
            真空誘導溶解（VIM）炉とAIマテリアルズ・インフォマティクスにより、お客様固有の使用環境や応力条件に最適化された合金を短期間で配合設計・試作いたします。
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-[var(--color-copper)] text-white font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors flex items-center gap-2 shadow-lg shadow-[var(--color-copper)]/20"
          >
            <span>技術相談・カスタム開発窓口へ</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
