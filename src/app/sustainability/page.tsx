"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Leaf, 
  Recycle, 
  Wind, 
  Droplets, 
  Sun, 
  ShieldAlert, 
  FileSpreadsheet, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  TrendingDown,
  Globe,
  HeartHandshake
} from "lucide-react";

const sustainabilityStats = [
  { label: "スクラップ再利用率", value: "78.4%", sub: "クローズドループ型リサイクル" },
  { label: "CO2排出削減実績", value: "-42.8%", sub: "2013年度比 (Scope 1+2)" },
  { label: "工場水資源循環率", value: "95.8%", sub: "高度ろ過によるゼロ排水化" },
  { label: "再生可能エネルギー比率", value: "65.0%", sub: "2030年に100%目標" },
];

const roadmapPhases = [
  {
    phase: "Phase 01",
    period: "2020 - 2025（達成）",
    title: "省エネ電炉転換と再エネ拡大",
    desc: "全製造拠点における超高効率アーク炉への全面更新完了。自家消費型太陽光発電設備の敷設とグリーン電力契約により、Scope 1/2排出量を42.8%削減。",
    status: "COMPLETED",
  },
  {
    phase: "Phase 02",
    period: "2026 - 2035（進行中）",
    title: "水素還元実用化とKōwa-Green™量産",
    desc: "製鉄工程での化石燃料コークス使用を段階的に廃止し、水素直接還元（DRI）プロセスを導入。低炭素ブランド「Kōwa-Green™」の全世界供給を開始。",
    status: "IN PROGRESS",
  },
  {
    phase: "Phase 03",
    period: "2036 - 2050（展望）",
    title: "サプライチェーン完全カーボンニュートラル",
    desc: "原材料調達から最終製品の廃棄・リサイクルに至るScope 3を含めた全バリューチェーンでの温室効果ガス排出実質ゼロ（Net-Zero）を実現。",
    status: "TARGET 2050",
  },
];

const esgPillars = [
  {
    icon: <Recycle size={32} className="text-[var(--color-copper)]" />,
    title: "サーキュラーエコノミー",
    sub: "クローズドループ・スクラップ循環",
    desc: "お客様の加工工程で発生する切削屑や廃材を高純度で回収し、当社の電炉で再溶融。新鉱石の採掘負荷を大幅に削減しながら、バージン材同等の高強度特殊鋼へ再生します。",
    metrics: "年間 18万トンのスクラップを高品質特殊鋼へ再生",
  },
  {
    icon: <Wind size={32} className="text-[var(--color-industrial-blue)]" />,
    title: "クリーンエネルギー＆水素製鉄",
    sub: "化石燃料からの完全脱却",
    desc: "北九州製鉄所を中心にグリーン水素直接還元炉の実証を推進。電炉の稼働電力も水力・風力・太陽光などの非化石エネルギー100%への移行を加速しています。",
    metrics: "2030年までに全拠点再エネ化・水素混合比率40%達成",
  },
  {
    icon: <Droplets size={32} className="text-[#38bdf8]" />,
    title: "水資源の保全とゼロ排水",
    sub: "閉鎖型循環ろ過システムの導入",
    desc: "製鉄および熱処理工程で大量に使用される冷却水を、ナノろ過膜と生化学浄化プラントにより95.8%再利用。地域の河川・海洋への環境負荷を極小化しています。",
    metrics: "工業用水使用量を従来比 80%削減",
  },
  {
    icon: <ShieldAlert size={32} className="text-[#e59866]" />,
    title: "化学物質管理＆RoHS/REACH適合",
    sub: "環境負荷物質の完全排除",
    desc: "欧州RoHS指令、REACH規則などの国際環境規制を先取りし、鉛・カドミウム・六価クロムなどを完全に含まない無害な表面処理・コーティング技術を標準化しています。",
    metrics: "全製品で環境負荷物質フリー認証を取得済み",
  },
];

const governanceItems = [
  {
    title: "労働安全衛生・ゼロ災害への誓約",
    desc: "AIカメラによる危険行動検知やスマートウェアラブルによる熱中症予防を導入し、安心・安全な製造環境を徹底しています。",
  },
  {
    title: "責任ある鉱物調達（RMI準拠）",
    desc: "紛争地域からの原材料調達を一切行わず、OECDデュー・ディリジェンス・ガイダンスに準拠した透明性の高いサプライチェーンを構築。",
  },
  {
    title: "ダイバーシティ＆インクルージョン",
    desc: "多様な専門性を持つエンジニアが活躍できるよう、育児・介護サポートやグローバル研修制度を拡充しています。",
  },
];

export default function SustainabilityPage() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

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
              <Leaf size={14} />
              <span>SUSTAINABILITY & ESG</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              強さだけでは、<br />
              <span className="text-[var(--color-copper)]">未来にならない。</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/75 leading-relaxed font-light">
              鋼和素材は、循環型リサイクル、水素直接還元製鉄、そしてサプライチェーン全体での人権・環境デューデリジェンスを通じて、次世代のための持続可能な地球環境を創造します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="py-12 border-b border-white/10 bg-[#18181b]/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainabilityStats.map((stat, idx) => (
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

      {/* Carbon Neutral Roadmap 2030 / 2050 */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Carbon Neutral Roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-[var(--color-ivory)]">
              カーボンニュートラル2050への道筋
            </h2>
            <p className="text-[var(--color-ivory)]/70 text-base md:text-lg">
              明確な数値目標と段階的な技術実装により、温室効果ガス排出ゼロの製鉄・材料加工を実現します。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roadmapPhases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-[#1c1c1e] to-[#161618] border border-white/10 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-white/5 border-b border-l border-white/10 text-[10px] font-mono tracking-widest text-[var(--color-copper)] rounded-bl-lg">
                  {item.status}
                </div>

                <div>
                  <div className="text-xs font-mono text-[var(--color-copper)] font-bold mb-1">{item.phase}</div>
                  <div className="text-xs text-[var(--color-ivory)]/50 font-mono mb-4">{item.period}</div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--color-ivory)] leading-snug">{item.title}</h3>
                  <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[var(--color-copper)]">
                  <CheckCircle2 size={14} />
                  <span>KŌWA ESG COMMITMENT</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ESG Key Pillars */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#161618]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Environmental Initiatives
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-ivory)]">
              4つの環境行動指針
            </h2>
            <p className="text-[var(--color-ivory)]/70 text-sm md:text-base mt-2">
              資源循環、エネルギー転換、水資源保全、有害化学物質フリーの徹底。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {esgPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6">{pillar.icon}</div>
                  <div className="text-xs font-mono text-[var(--color-copper)] font-semibold mb-1">{pillar.sub}</div>
                  <h3 className="text-2xl font-bold text-[var(--color-ivory)] mb-4">{pillar.title}</h3>
                  <p className="text-sm text-[var(--color-ivory)]/75 leading-relaxed mb-6">{pillar.desc}</p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs font-mono text-[var(--color-copper)] flex items-center gap-2">
                  <CheckCircle2 size={16} className="shrink-0" />
                  <span>{pillar.metrics}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Governance */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Social & Governance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-ivory)]">
              社会と共生するガバナンス体制
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governanceItems.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-lg font-bold text-[var(--color-ivory)] mb-3">{item.title}</h4>
                <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Download & CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#1c1c1e] via-[#252830] to-[#1c1c1e] border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-copper)] bg-[var(--color-copper)]/10 px-3 py-1 rounded-full border border-[var(--color-copper)]/20">
                <FileSpreadsheet size={14} />
                <span>ANNUAL ESG REPORT 2025/2026</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-ivory)]">
                サステナビリティ・ESGレポートの閲覧
              </h3>
              <p className="text-sm md:text-base text-[var(--color-ivory)]/70 leading-relaxed">
                温室効果ガス排出量（Scope 1, 2, 3詳細データ）、環境負荷低減活動、ダイバーシティ推進指標などの詳細データをまとめた最新レポートを公開しています。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={handleDownload}
                className="px-8 py-4 rounded-xl bg-[var(--color-copper)] text-white font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-copper)]/20"
              >
                {downloaded ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>ダウンロード完了</span>
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    <span>ESGレポート (PDF)</span>
                  </>
                )}
              </button>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl border border-white/20 text-[var(--color-ivory)] font-bold tracking-wider hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
              >
                <span>環境方針について問い合わせる</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
