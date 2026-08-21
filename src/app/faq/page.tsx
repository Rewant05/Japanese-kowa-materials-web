"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageSquare, 
  Layers, 
  ShieldCheck, 
  Truck, 
  Leaf, 
  Briefcase,
  ArrowRight,
  Phone
} from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  q: string;
  a: string;
  tags: string[];
}

const categories = [
  { id: "all", label: "全て" },
  { id: "products", label: "製品・仕様", icon: <Layers size={14} /> },
  { id: "prototype", label: "試作・カスタム開発", icon: <MessageSquare size={14} /> },
  { id: "quality", label: "品質・規格認証", icon: <ShieldCheck size={14} /> },
  { id: "logistics", label: "納期・海外配送", icon: <Truck size={14} /> },
  { id: "environment", label: "環境・RoHS/REACH", icon: <Leaf size={14} /> },
  { id: "business", label: "取引・受託研究", icon: <Briefcase size={14} /> },
];

const faqs: FAQItem[] = [
  {
    id: "f1",
    category: "prototype",
    q: "小ロットの試作や特殊組成のカスタマイズ溶解には対応していますか？",
    a: "はい、柔軟に対応しております。当社の仙台R&Dセンターおよび北九州特殊製鉄所では、研究開発向けの5kg〜50kg規模の小型真空溶解炉（VIM）から、量産前のパイロット試作（数百kg〜数トン）まで対応可能な設備を備えています。特定の引張強度、耐食性、熱膨張係数を満たす独自合金の配合設計から受託可能です。",
    tags: ["試作", "小ロット", "カスタム合金", "VIM溶解"],
  },
  {
    id: "f2",
    category: "quality",
    q: "品質保証体制および取得している国際認証規格を教えてください。",
    a: "当社は全製造拠点でISO 9001（品質）、ISO 14001（環境）を取得しているほか、航空宇宙・防衛産業向け品質マネジメント規格である「JIS Q 9100 / AS9100」および自動車産業規格「IATF 16949」の認証を取得しています。全出荷ロットについて、分光分析による化学成分検査、引張試験、超音波探傷検査（UT）、微細組織観察（SEM）を実施し、公的ミルシート（検査証明書）を発行いたします。",
    tags: ["ISO9001", "JIS Q 9100", "ミルシート", "検査証明書"],
  },
  {
    id: "f3",
    category: "products",
    q: "どのような形状・寸法での材料供給が可能ですか？",
    a: "丸棒（丸鋼）、角鋼、鍛造ブロック、厚板・薄板、冷間圧延ストリップ、高精度シームレスパイプ、異形押出材、および金属3Dプリンター用の高流動性球状アトマイズ粉末など、お客様の加工用途に応じた多彩な形状で供給可能です。指定寸法への切断やプレ機械加工（粗削り）を施した状態での納品も承ります。",
    tags: ["丸棒", "鍛造ブロック", "板材", "3Dプリンター粉末"],
  },
  {
    id: "f4",
    category: "products",
    q: "ダイヤモンドライクカーボン（DLC）や特殊表面処理のみの受託加工は可能ですか？",
    a: "はい、お客様から支給いただいた部品・金型・治具への受託コーティング加工（DLC、TiAlN、CrN、セラミックナノ被膜等）を承っております。大阪先端化学事業所にて、基材の事前脱脂洗浄からプラズマ窒化、CVD/PVD成膜、膜厚・密着性検査まで一気通貫で対応いたします。",
    tags: ["DLCコーティング", "受託成膜", "金型", "表面処理"],
  },
  {
    id: "f5",
    category: "environment",
    q: "欧州RoHS指令やREACH規制、PFAS規制への対応状況はどうなっていますか？",
    a: "当社の全製品はRoHS指令（10物質規制）およびREACH規則（SVHC高懸念物質）に完全適合しており、化学物質不含有証明書（RoHS/REACH適合宣言書）およびchemSHERPAデータの即時発行が可能です。また、環境負荷が懸念されるPFAS（有機フッ素化合物）の代替技術開発も完了しており、環境配慮型マテリアルを順次実用化しています。",
    tags: ["RoHS", "REACH", "chemSHERPA", "PFASフリー"],
  },
  {
    id: "f6",
    category: "environment",
    q: "低炭素エコ鋼材ブランド「Kōwa-Green™」のCO2削減率と認証について教えてください。",
    a: "「Kōwa-Green™」は、100%再生可能エネルギー由来電力による特殊電炉製錬と高純度リサイクルスクラップを主原料とし、従来の高炉法特殊鋼と比較して製品製造時のCO2排出量を最大78%削減しています。第三者検証機関によるカーボンフットプリント（CFP）算定レポートを製品ごとにご提供可能です。",
    tags: ["Kōwa-Green", "カーボンフットプリント", "エコ鋼材", "脱炭素"],
  },
  {
    id: "f7",
    category: "logistics",
    q: "標準的な納期と急ぎの特急対応について教えてください。",
    a: "標準規格品の在庫材については、ご注文確定後2〜5営業日以内の出荷が可能です。特殊熱処理や特注寸法加工を伴う場合は約2〜4週間、新規インゴット溶解からのフルカスタム生産の場合は約6〜10週間が目安となります。試作フェーズでお急ぎの案件については、優先ラインを設けて短納期対応いたしますのでご相談ください。",
    tags: ["標準納期", "特急対応", "在庫品", "短納期"],
  },
  {
    id: "f8",
    category: "logistics",
    q: "海外工場や海外子会社への直接輸出・デリバリーは可能ですか？",
    a: "はい。ドイツ（デュッセルドルフ）、シンガポール、米国（デトロイト）の海外拠点と連携し、世界主要30カ国以上の産業拠点へ直送（DDP/CIF/FOB）可能です。輸出貿易管理令に基づく該非判定書の作成や通関書類の手配も社内貿易専門チームが迅速に対応いたします。",
    tags: ["海外輸出", "該非判定書", "通関", "グローバル配送"],
  },
  {
    id: "f9",
    category: "business",
    q: "初回取引の流れや秘密保持契約（NDA）の締結手順を教えてください。",
    a: "新材料開発や図面を伴うご相談の場合、初回ヒアリング前に速やかに電子契約または書面にて秘密保持契約（NDA）を締結いたします。その後、技術要件定義・仕様決定 → 試作お見積り → ご発注 → 試作製造・検査 → 評価データ提出 というステップで進みます。法人取引の掛け払い（月末締め翌月末払い等）にも柔軟に対応しております。",
    tags: ["NDA", "秘密保持契約", "初回取引", "見積り"],
  },
  {
    id: "f10",
    category: "business",
    q: "大学や外部研究機関との共同研究契約は可能ですか？",
    a: "はい。当社では年間30件以上の産学連携共同研究プロジェクトを推進しております。知的財産権の帰属、論文発表の許諾条件、共同特許出願の取り決めなど、大学・公的研究機関の規程に沿った柔軟な共同研究契約（JRA）を締結可能です。",
    tags: ["共同研究", "産学連携", "特許出願", "大学連携"],
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>("f1");

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Header */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-copper)]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              よくある質問（FAQ）
            </h1>
            <p className="text-lg text-[var(--color-ivory)]/75 leading-relaxed font-light max-w-2xl mx-auto mb-8">
              製品仕様、試作受託、品質保証、国際規格、納期、取引条件についてお客様から多く寄せられるご質問にお答えします。
            </p>

            {/* Search Box */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="キーワードでFAQを検索（例: 試作、DLC、RoHS、納期、ISO...）"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/15 text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/40 focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-all shadow-xl"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-ivory)]/50" size={20} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[var(--color-ivory)]/50 hover:text-white"
                >
                  クリア
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
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

          {/* Results count */}
          <div className="flex justify-between items-center text-xs font-mono text-[var(--color-ivory)]/50 mb-6 px-2">
            <span>該当件数: {filteredFaqs.length}件</span>
            {searchQuery && <span>検索条件: &ldquo;{searchQuery}&rdquo;</span>}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[var(--color-ivory)]/60 mb-4">お探しの条件に一致する質問が見つかりませんでした。</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-mono text-[var(--color-copper)] underline hover:text-white"
                >
                  全件表示に戻す
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIndex === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    layout
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white/[0.08] border-[var(--color-copper)]/50 shadow-xl"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-start gap-4">
                        <span className="w-7 h-7 rounded-lg bg-[var(--color-copper)]/20 text-[var(--color-copper)] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                          Q
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-[var(--color-ivory)] leading-snug">
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`text-[var(--color-copper)] shrink-0 transition-transform duration-300 mt-1 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-white/10 ml-11">
                            <div className="flex items-start gap-3">
                              <span className="text-xs font-mono text-[var(--color-copper)] font-bold mt-1 shrink-0">
                                回答:
                              </span>
                              <p className="text-sm md:text-base text-[var(--color-ivory)]/80 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                              {faq.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[var(--color-ivory)]/50">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Bottom Help Banner */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#222429] border border-white/15 text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">解決しないご不明点がございましたら</h3>
            <p className="text-[var(--color-ivory)]/70 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              材料仕様の詳細、特注見積りのご依頼、技術的な課題解決について、専門の技術営業スタッフが迅速にお答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-lg bg-[var(--color-copper)] text-white font-bold tracking-wider hover:bg-[var(--color-copper)]/80 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-copper)]/20"
              >
                <span>直接お問い合わせする</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:0312345678"
                className="px-8 py-3.5 rounded-lg border border-white/20 text-[var(--color-ivory)] font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={16} className="text-[var(--color-copper)]" />
                <span>03-1234-5678（技術相談窓口）</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
