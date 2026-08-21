"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Award, Users, Globe2, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Factory } from "lucide-react";

const corporateStats = [
  { label: "設立", value: "1958年", sub: "創業68年の歴史と信頼" },
  { label: "資本金", value: "45億円", sub: "堅実な財務基盤" },
  { label: "連結売上高", value: "1,280億円", sub: "2025年度実績" },
  { label: "グループ従業員数", value: "1,240名", sub: "研究開発員 約320名" },
];

const philosophyPoints = [
  {
    num: "01",
    title: "品質への誠実（Integrity）",
    desc: "1ミクロンの狂いも許さない厳格な品質管理体制。日本の伝統的な製鉄精神を受け継ぎ、一切の妥協を排した最高精度の素材を提供します。",
  },
  {
    num: "02",
    title: "先端科学の探求（Exploration）",
    desc: "AIマテリアルズ・インフォマティクスと量子シミュレーションを駆使し、未知の物性を持つ革新的な超合金と機能性化合物を創出します。",
  },
  {
    num: "03",
    title: "社会と地球の共創（Co-Creation）",
    desc: "循環型リサイクルとカーボンニュートラル製鉄を強力に推進し、持続可能な未来インフラの発展に貢献します。",
  },
];

const historyTimeline = [
  {
    year: "1958",
    title: "鋼和特殊製鋼所として創業",
    desc: "東京都大田区にて高強度炭素鋼の鍛造・熱処理加工を開始。日本の産業復興を支える基幹部品供給に着手。",
  },
  {
    year: "1974",
    title: "北九州製鉄所・真空溶解炉の導入",
    desc: "大型真空誘導溶解（VIM）設備を新設し、高純度特殊合金鋼の量産体制を確立。",
  },
  {
    year: "1992",
    title: "ナノ表面改質・高機能コーティング事業発足",
    desc: "ダイヤモンドライクカーボン（DLC）および産業用フッ素樹脂複合材料の研究開発を本格化。",
  },
  {
    year: "2008",
    title: "航空宇宙品質マネジメント JIS Q 9100 認証取得",
    desc: "ジェットエンジン用耐熱超合金およびチタン合金部材のグローバルサプライチェーンに参入。",
  },
  {
    year: "2018",
    title: "仙台R&Dセンター・マテリアルズインフォマティクスラボ新設",
    desc: "AIシミュレーションによる合金組成自動予測システムを独自開発し、材料開発期間を従来の1/3に短縮。",
  },
  {
    year: "2026",
    title: "低炭素エコ鋼材「Kōwa-Green™」グローバル展開",
    desc: "100%再生可能エネルギー電炉と水素直接還元技術を融合した次世代ゼロカーボン素材の商用供給を開始。",
  },
];

const locations = [
  {
    type: "本社・研究開発",
    name: "東京本社 / 丸の内オフィス",
    address: "東京都千代田区丸の内1丁目1-1 鋼和ビル",
    tel: "03-1234-5678",
    tags: ["統括管理", "グローバル営業", "企画戦略"],
  },
  {
    type: "先端研究拠点",
    name: "仙台先端材料イノベーションセンター",
    address: "宮城県仙台市泉区紫山3丁目8-1",
    tel: "022-345-6789",
    tags: ["ナノ構造解析", "AIインフォマティクス", "試作開発"],
  },
  {
    type: "主力製造プラント",
    name: "北九州特殊製鉄所",
    address: "福岡県北九州市小倉北区西港町12-5",
    tel: "093-987-6543",
    tags: ["真空溶解炉(VIM)", "HIP等方加圧", "超高張力鋼量産"],
  },
  {
    type: "化学・コーティングプラント",
    name: "大阪先端化学事業所",
    address: "大阪府堺市西区築港新町2丁目15",
    tel: "06-6789-0123",
    tags: ["表面処理", "フッ素樹脂複合体", "DLCコーティング"],
  },
  {
    type: "海外拠点",
    name: "ヨーロッパ支社（ドイツ・デュッセルドルフ）",
    address: "Immermannstraße 65, 40210 Düsseldorf, Germany",
    tel: "+49-211-123456",
    tags: ["欧州自動車・航空宇宙市場対応", "テクニカルサポート"],
  },
  {
    type: "海外拠点",
    name: "北米統括デスク（米国・デトロイト）",
    address: "2000 Town Center, Southfield, MI 48075, USA",
    tel: "+1-248-555-0199",
    tags: ["EV・モビリティ特殊鋼供給", "受託試験"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Header */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-[var(--color-copper)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <Building2 size={14} />
              <span>ABOUT KŌWA MATERIALS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              素材の叡智で、<br />
              <span className="text-[var(--color-copper)]">産業の未来を拓く。</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/75 leading-relaxed font-light">
              1958年の創業から68年。鋼和素材株式会社は、高強度特殊鋼、超耐熱合金、先端ナノコーティングを通じて、モビリティ、航空宇宙、エネルギー、半導体など世界中の基幹産業を根幹から支え続けています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Corporate Stats */}
      <section className="py-12 border-b border-white/10 bg-[#18181b]/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateStats.map((stat, idx) => (
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

      {/* Leadership Message */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1c1c1e] p-8 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-copper)]/20 rounded-full blur-2xl" />
              <div className="w-20 h-20 rounded-xl bg-[var(--color-gunmetal)] border border-white/20 flex items-center justify-center mb-8">
                <ShieldCheck size={36} className="text-[var(--color-copper)]" />
              </div>
              <blockquote className="text-xl font-medium leading-relaxed mb-8 text-[var(--color-ivory)]">
                「極限環境に挑む技術者たちの想いを、私たちは1ミクロンの妥協もない素材という結晶で具現化します。」
              </blockquote>
              <div className="pt-6 border-t border-white/10">
                <div className="text-lg font-bold text-[var(--color-ivory)]">鋼和 太郎</div>
                <div className="text-xs text-[var(--color-copper)] font-mono tracking-wider">代表取締役 社長執行役員</div>
                <div className="text-xs text-[var(--color-ivory)]/50 mt-1">工学博士 / 日本金属学会名誉会員</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-[var(--color-ivory)]/80 leading-relaxed text-base md:text-lg"
          >
            <div className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Message from the President
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ivory)]">
              不可能を可能にする素材を、日本から世界へ。
            </h2>
            <p>
              現代のテクノロジーはかつてない速さで進化しています。深宇宙を目指す探査ロケット、極低温水素で走るモビリティ、ナノメートル単位で集積される次世代半導体——。これらの最先端技術が真価を発揮するためには、超高温、極低温、強腐食、極大応力といった過酷な環境に耐えうる「究極の素材」が不可欠です。
            </p>
            <p>
              鋼和素材は、伝統的な日本の「たたら製鉄」に起源を持つ冶金の知恵と、最先端のデータサイエンスを融合させることで、従来の常識を超える物性を実現してまいりました。
            </p>
            <p>
              私たちは単なるサプライヤーにとどまらず、お客様の設計段階から深く共創する「マテリアル・イノベーション・パートナー」として、持続可能で豊かな社会の基盤を築き続けます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#161618]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Corporate Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-[var(--color-ivory)]">
              鋼和の企業理念
            </h2>
            <p className="text-[var(--color-ivory)]/70 text-base md:text-lg">
              私たちがすべての事業活動、研究開発、品質追求において指針とする3つの核となる価値観。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPoints.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-copper)]/50 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black font-mono text-[var(--color-copper)]/40 group-hover:text-[var(--color-copper)] transition-colors mb-6">
                    {item.num}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--color-ivory)]">{item.title}</h3>
                  <p className="text-[var(--color-ivory)]/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[var(--color-copper)]">
                  <CheckCircle2 size={14} />
                  <span>KŌWA CORE STANDARD</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Overview Data Table */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Company Data
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--color-ivory)]">
              会社概要
            </h2>
          </div>

          <div className="bg-[#18181b] rounded-2xl border border-white/10 overflow-hidden shadow-xl">
            <div className="divide-y divide-white/10 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">商号</div>
                <div className="md:col-span-3 text-[var(--color-ivory)] font-medium">鋼和素材株式会社（英文表記：Kōwa Materials & Chemical Co., Ltd.）</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">本社所在地</div>
                <div className="md:col-span-3 text-[var(--color-ivory)]">〒100-0005 東京都千代田区丸の内1丁目1-1 鋼和ビル</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">設立</div>
                <div className="md:col-span-3 text-[var(--color-ivory)]">1958年（昭和33年）10月15日</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">資本金</div>
                <div className="md:col-span-3 text-[var(--color-ivory)]">45億円（授権資本 120億円）</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">代表者</div>
                <div className="md:col-span-3 text-[var(--color-ivory)]">代表取締役 社長執行役員 鋼和 太郎</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">役員構成</div>
                <div className="md:col-span-3 text-[var(--color-ivory)] space-y-1">
                  <div>専務執行役員（技術統括・R&Dセンター長）：工学博士 佐藤 健一</div>
                  <div>常務執行役員（製造本部長）：高橋 誠</div>
                  <div>常務執行役員（グローバル営業本部長）：渡辺 真理</div>
                  <div>常勤監査役：小林 伸行</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">主要事業内容</div>
                <div className="md:col-span-3 text-[var(--color-ivory)] space-y-1">
                  <div>1. 高機能特殊鋼・超耐熱ニッケル基超合金の精錬および二次加工品の製造販売</div>
                  <div>2. 産業用ダイヤモンドライクカーボン（DLC）及び機能性セラミック表面処理加工</div>
                  <div>3. 半導体製造装置向け超高純度耐食フッ素樹脂複合材料の受託製造</div>
                  <div>4. マテリアルズ・インフォマティクスを活用した材料物性予測・共同研究受託</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-bold text-[var(--color-ivory)]/60">認証規格</div>
                <div className="md:col-span-3 text-[var(--color-ivory)]">
                  ISO 9001（品質）、ISO 14001（環境）、JIS Q 9100（航空宇宙・防衛品質規格）、IATF 16949（自動車産業品質規格）
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Milestones Timeline */}
      <section className="py-24 px-6 border-b border-white/10 bg-[#161618]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              History & Heritage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-[var(--color-ivory)]">
              鋼和の歩み（1958 - 2026）
            </h2>
            <p className="text-[var(--color-ivory)]/70">
              半世紀以上にわたり、日本のものづくりと共に進化し続けてきた挑戦の歴史。
            </p>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12 pl-8">
            {historyTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Marker */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--color-gunmetal)] border-2 border-[var(--color-copper)] group-hover:bg-[var(--color-copper)] transition-colors shadow-lg" />

                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-white/20 transition-colors">
                  <div className="text-xl font-bold font-mono text-[var(--color-copper)] mb-1">{item.year}</div>
                  <h3 className="text-lg font-bold text-[var(--color-ivory)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-ivory)]/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic & Global Network */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase font-bold">
              Locations & Facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-[var(--color-ivory)]">
              拠点・事業所ネットワーク
            </h2>
            <p className="text-[var(--color-ivory)]/70 text-sm md:text-base">
              日本国内の研究・生産拠点から、欧州・北米・アジアのグローバルサポートデスクまで迅速に連携。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--color-copper)]/50 transition-all"
              >
                <div className="inline-block px-2.5 py-1 rounded bg-[var(--color-copper)]/15 text-[var(--color-copper)] text-xs font-mono mb-4">
                  {loc.type}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-ivory)] mb-3">{loc.name}</h3>
                <div className="space-y-2 text-xs text-[var(--color-ivory)]/70 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[var(--color-copper)] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-[var(--color-copper)]">TEL:</span>
                    <span>{loc.tel}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {loc.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[var(--color-ivory)]/60 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#1c1c1e] via-[#24262b] to-[#1c1c1e] border border-white/15 text-center shadow-2xl flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">鋼和素材との協業・技術相談について</h3>
            <p className="text-[var(--color-ivory)]/70 max-w-2xl text-sm md:text-base mb-8">
              特殊合金の開発、試作サンプルのご用命、共同研究のご相談など、お気軽にお問い合わせください。専門の材料エンジニアが直接ご案内いたします。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-lg bg-[var(--color-copper)] text-white font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors flex items-center gap-2"
              >
                <span>お問い合わせフォームへ</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/research"
                className="px-8 py-3.5 rounded-lg border border-white/20 text-[var(--color-ivory)] font-medium hover:bg-white/5 transition-colors"
              >
                研究開発（R&D）体制を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
