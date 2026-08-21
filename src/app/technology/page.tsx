"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cpu, 
  Flame, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Atom, 
  CheckCircle2, 
  ArrowRight,
  Workflow,
  Factory,
  Cog
} from "lucide-react";

const processes = [
  {
    step: "01",
    title: "真空誘導溶解・真空アーク再溶解（VIM / VAR）",
    sub: "超高清浄度 精錬技術",
    desc: "大気中の酸素・窒素・水素などのガス不純物を1ppm未満に抑える超高真空環境下で原料を溶解。介在物の極小化により、航空宇宙および深海用途で致命傷となる疲労破壊リスクを根本から排除します。",
    specs: "真空度: 10⁻³ Pa以下 / 溶解容量: 最大 15トン / ガス不純物: O₂ < 5ppm, N₂ < 10ppm",
    icon: <Flame size={28} className="text-[#ff8a00]" />,
  },
  {
    step: "02",
    title: "熱間等方加圧成型（HIP）＆ 精密鍛造",
    sub: "内部欠陥ゼロの超高密度化",
    desc: "1,200℃以上の超高温と200MPaの高圧アルゴンガスを全方位から均一に印加し、材料内部の微小空隙（ポロシティ）を完全に圧着消滅。理論密度100%の緻密な金属組織を実現します。",
    specs: "最高圧力: 206 MPa / 最高温度: 1,400 ℃ / HIP処理炉径: φ1,200mm × 2,500mm",
    icon: <Factory size={28} className="text-[var(--color-copper)]" />,
  },
  {
    step: "03",
    title: "ナノ結晶粒微細化＆マルチステージ熱処理",
    sub: "結晶構造の自在なコントロール",
    desc: "制御圧延と精密焼入れ・時効熱処理を最適化し、結晶粒径をサブミクロン単位まで微細化。Hall-Petchの関係に基づく降伏強度の劇的向上と、高靭性・耐衝撃性を高度に両立させます。",
    specs: "結晶粒度番号: ASTM No.12以上 / 冷却速度制御: ±0.5℃/secの精密プロファイル",
    icon: <Layers size={28} className="text-[var(--color-industrial-blue)]" />,
  },
  {
    step: "04",
    title: "プラズマCVD＆ナノダイヤモンドライクカーボン（DLC）",
    sub: "原子レベルの機能性表面改質",
    desc: "高密度プラズマを利用したナノ薄膜成膜技術により、基材との原子間結合を強化した超高硬度DLCやセラミック多層膜を形成。摩擦係数を極限まで下げ、部品寿命を飛躍的に延伸します。",
    specs: "膜硬度: 6,500 HV以上 / 摩擦係数: μ < 0.02 / 密着強度: 80 N (スクラッチ試験)",
    icon: <Sparkles size={28} className="text-[var(--color-deepred)]" />,
  },
  {
    step: "05",
    title: "金属3Dプリンター用 高流動性球状ガスアトマイズ",
    sub: "アディティブ・マニュファクチャリング対応",
    desc: "高圧不活性ガス噴霧により、真球度が高くサテライト（付着微粒子）のない均一粒度のアトマイズ粉末を製造。レーザー粉末床溶融結合（L-PBF）における流動性と造形密度を最大化します。",
    specs: "粒度分布: 15〜45 μm (L-PBF用) / 45〜105 μm (DED用) / 真球度: 0.95以上",
    icon: <Cog size={28} className="text-[#38bdf8]" />,
  },
  {
    step: "06",
    title: "AIマテリアルズ・インフォマティクス＆量子化学シミュレーション",
    sub: "データ駆動型 新材料探索",
    desc: "第一原理計算と機械学習アルゴリズムにより、多元系合金の相平衡図や高温物性を短時間で予測。何千通りもの試作実験をコンピュータ上で先行シミュレーションし、開発期間を大幅に短縮します。",
    specs: "物性予測精度: R² > 0.94 / スクリーニング速度: 10,000組成/日",
    icon: <Cpu size={28} className="text-[#a78bfa]" />,
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-copper)]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <Cpu size={14} />
              <span>CORE ENGINEERING & TECHNOLOGY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              原子を操り、<br />
              <span className="text-[var(--color-copper)]">物性の限界を超える。</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/75 leading-relaxed font-light">
              真空溶解精錬、熱間等方加圧（HIP）、ナノ結晶組織制御、プラズマ表面改質、そしてAIデータ科学。鋼和の高度なエンジニアリング体系が、極限環境を克服する素材を生み出します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Architecture Flow */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Process Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-[var(--color-ivory)]">
              6つの基幹製造・解析プロセス
            </h2>
            <p className="text-[var(--color-ivory)]/70 text-base md:text-lg">
              原料の超高清浄溶解から最終表面改質、データ主導の物性予測まで垂直統合された技術基盤。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((proc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-[#1c1c1e] to-[#161618] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-[var(--color-copper)]/30 group-hover:text-[var(--color-copper)] transition-colors">
                      {proc.step}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {proc.icon}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[var(--color-copper)] font-semibold mb-1 uppercase">
                    {proc.sub}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-ivory)] mb-4 leading-snug">
                    {proc.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed mb-6">
                    {proc.desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs font-mono text-[var(--color-ivory)]/70">
                  <span className="text-[var(--color-copper)] block font-bold mb-0.5">ENGINEERING SPECS:</span>
                  <span>{proc.specs}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance & Metrology Section */}
      <section className="py-24 px-6 border-t border-white/10 bg-[#161618]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Quality & Non-Destructive Testing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ivory)]">
              1ミクロンの欠陥も見逃さない、<br />
              全数検査・保証体制。
            </h2>
            <p className="text-sm md:text-base text-[var(--color-ivory)]/75 leading-relaxed">
              航空宇宙・医療・原子力産業の厳格な国際規格に準拠。超音波フェーズドアレイ探傷（PAUT）、蛍光磁粉探傷、および高分解能X線CTによる非破壊検査を徹底し、完全無欠陥の材料のみをお届けします。
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[var(--color-ivory)]/85">
                <CheckCircle2 size={18} className="text-[var(--color-copper)] shrink-0" />
                <span>JIS Q 9100 / AS9100 航空宇宙品質マネジメントシステム認証</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-ivory)]/85">
                <CheckCircle2 size={18} className="text-[var(--color-copper)] shrink-0" />
                <span>Nadcap（航空宇宙特殊工程認証：熱処理・非破壊検査）取得</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-ivory)]/85">
                <CheckCircle2 size={18} className="text-[var(--color-copper)] shrink-0" />
                <span>トレーサビリティ保証ミルシートの全ロット電子発行</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#22242a] border border-white/15 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-ivory)] border-b border-white/10 pb-4">
                主要検査・評価設備スペック
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[var(--color-ivory)]">フェーズドアレイ超音波探傷（PAUT）</div>
                    <div className="text-[var(--color-ivory)]/50">内部欠陥検出限界: φ0.2mm FBH</div>
                  </div>
                  <span className="text-[var(--color-copper)] font-bold">100%全数検査</span>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[var(--color-ivory)]">電界放出形走査電子顕微鏡 (FE-SEM / EDS)</div>
                    <div className="text-[var(--color-ivory)]/50">微小介在物組成定量・結晶方位EBSD解析</div>
                  </div>
                  <span className="text-[var(--color-copper)] font-bold">分解能 0.8nm</span>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[var(--color-ivory)]">高周波誘導結合プラズマ発光分光 (ICP-OES)</div>
                    <div className="text-[var(--color-ivory)]/50">極微量不純物元素定量分析（ppbレベル）</div>
                  </div>
                  <span className="text-[var(--color-copper)] font-bold">高精度定量</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#1c1c1e] via-[#24262b] to-[#1c1c1e] border border-white/15 text-center shadow-2xl flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">技術に関するご質問・受託試験のお問い合わせ</h3>
          <p className="text-[var(--color-ivory)]/70 max-w-2xl text-sm md:text-base mb-8">
            熱処理条件の最適化、特殊雰囲気下での物性評価試験、受託分析などのご要望に専門エンジニアがお応えします。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[var(--color-copper)] text-white font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors flex items-center gap-2 shadow-lg shadow-[var(--color-copper)]/20"
            >
              <span>技術相談・受託解析窓口へ</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/materials"
              className="px-8 py-4 rounded-xl border border-white/20 text-[var(--color-ivory)] font-medium hover:bg-white/5 transition-colors"
            >
              製品マテリアル一覧を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
