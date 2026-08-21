"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Building2,
  Sparkles,
  HelpCircle
} from "lucide-react";

const inquiryTypes = [
  "技術相談・仕様検討",
  "製品見積り・在庫確認",
  "試作受託・共同研究",
  "カタログ・物性データ請求",
  "採用・企業情報",
  "その他のお問い合わせ",
];

const materialCategories = [
  "特殊鋼・高張力鋼（超高強度・耐摩耗鋼）",
  "超耐熱・ニッケル基超合金（航空宇宙・タービン用）",
  "DLC・セラミックナノコーティング（表面改質）",
  "フッ素樹脂・高分子複合材料（半導体・耐薬品）",
  "低炭素エコ鋼材「Kōwa-Green™」",
  "その他・未定（技術者と相談希望）",
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState(inquiryTypes[0]);
  const [formData, setFormData] = useState({
    company: "",
    department: "",
    name: "",
    email: "",
    phone: "",
    materialCategory: materialCategories[0],
    message: "",
    agreePrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert("個人情報の取り扱いに同意の上、送信してください。");
      return;
    }

    setIsSubmitting(true);
    // Simulate high-end submission
    setTimeout(() => {
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const generatedTicket = `KOWA-${new Date().getFullYear()}-${randomNum}`;
      setTicketId(generatedTicket);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setTicketId(null);
    setFormData({
      company: "",
      department: "",
      name: "",
      email: "",
      phone: "",
      materialCategory: materialCategories[0],
      message: "",
      agreePrivacy: false,
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141416] text-[var(--color-ivory)] selection:bg-[var(--color-copper)] selection:text-white">
      {/* Hero Header */}
      <section className="relative py-16 px-6 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#1c1c1e] to-[#141416]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-copper)]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-copper)]/15 border border-[var(--color-copper)]/30 text-xs font-mono text-[var(--color-copper)] mb-6">
              <Mail size={14} />
              <span>CONTACT & INQUIRY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              お問い合わせ・<br />
              <span className="text-[var(--color-copper)]">技術相談窓口</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-ivory)]/75 leading-relaxed font-light">
              新材料の共同開発、試作サンプルのご用命、お見積りや物性データシートのご請求など、どのようなことでもお気軽にご相談ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Response Guarantee Ribbon */}
      <section className="py-6 border-b border-white/10 bg-[#18181b]/70">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[var(--color-ivory)]/75 font-mono">
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-[var(--color-copper)] shrink-0" />
            <span>原則24営業時間以内に担当技術者が回答</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck size={16} className="text-[var(--color-copper)] shrink-0" />
            <span>秘密保持（NDA）に基づく厳格な情報管理</span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-[var(--color-copper)] shrink-0" />
            <span>少量試作・物性シミュレーションから対応可能</span>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Office Directory */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form Area (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#18181b] rounded-2xl border border-white/10 p-8 md:p-10 shadow-2xl relative">
              
              {ticketId ? (
                /* Success Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[var(--color-copper)]/20 border-2 border-[var(--color-copper)] flex items-center justify-center text-[var(--color-copper)] mx-auto">
                    <CheckCircle2 size={40} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ivory)]">
                    お問い合わせを受け付けました
                  </h3>

                  <p className="text-sm md:text-base text-[var(--color-ivory)]/70 max-w-md mx-auto leading-relaxed">
                    お問い合わせいただき誠にありがとうございます。入力いただいたメールアドレスへ確認メールをお送りいたしました。
                  </p>

                  <div className="p-6 rounded-xl bg-black/40 border border-white/10 max-w-sm mx-auto font-mono text-center">
                    <div className="text-xs text-[var(--color-ivory)]/50 mb-1">受付管理番号 (Ticket ID)</div>
                    <div className="text-xl font-bold text-[var(--color-copper)] tracking-wider">{ticketId}</div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-sm font-semibold tracking-wider transition-colors"
                    >
                      新しいお問い合わせを入力
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Inquiry Input Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step 1: Inquiry Type Selector */}
                  <div>
                    <label className="block text-xs font-mono text-[var(--color-copper)] font-bold uppercase tracking-wider mb-3">
                      お問い合わせ種別（必須）
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {inquiryTypes.map((type) => {
                        const isSelected = selectedType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`p-3 rounded-lg text-xs font-semibold tracking-wide transition-all text-left border ${
                              isSelected
                                ? "bg-[var(--color-copper)] text-white border-[var(--color-copper)] shadow-md"
                                : "bg-white/5 border-white/10 text-[var(--color-ivory)]/70 hover:bg-white/10"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Company & Department */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--color-ivory)]/80">
                        貴社名 <span className="text-[var(--color-copper)]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="例：株式会社 〇〇製作所"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/30 focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--color-ivory)]/80">
                        部署名・お役職
                      </label>
                      <input
                        type="text"
                        placeholder="例：技術開発本部 主任研究員"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/30 focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Step 3: Name, Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--color-ivory)]/80">
                        お名前 <span className="text-[var(--color-copper)]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="例：鋼和 太郎"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/30 focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[var(--color-ivory)]/80">
                        お電話番号 <span className="text-[var(--color-copper)]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="例：03-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/30 focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-ivory)]/80">
                      メールアドレス <span className="text-[var(--color-copper)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="例：name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/30 focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors font-mono"
                    />
                  </div>

                  {/* Step 4: Category */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-ivory)]/80">
                      対象材料・技術分野
                    </label>
                    <select
                      value={formData.materialCategory}
                      onChange={(e) => setFormData({ ...formData, materialCategory: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1c1c1e] border border-white/10 text-sm text-[var(--color-ivory)] focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors"
                    >
                      {materialCategories.map((cat, idx) => (
                        <option key={idx} value={cat} className="bg-[#1c1c1e] text-[var(--color-ivory)]">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 5: Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-ivory)]/80">
                      ご相談内容・要求仕様（使用温度、耐荷重、寸法、ロット数など） <span className="text-[var(--color-copper)]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="例：航空宇宙機器向けの耐熱ニッケル合金について、使用温度850℃環境下での耐酸化性および引張強度データのご提供と、試作サンプル5kgのお見積りをお願いできますでしょうか。"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-[var(--color-ivory)] placeholder-[var(--color-ivory)]/30 focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Privacy Agreement */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-white/20 accent-[var(--color-copper)] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-[var(--color-ivory)]/70 leading-relaxed cursor-pointer">
                      当社の
                      <Link href="/privacy-policy" target="_blank" className="text-[var(--color-copper)] underline mx-1 hover:text-white">
                        プライバシーポリシー（個人情報の取り扱い）
                      </Link>
                      に同意の上、送信します。
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[var(--color-copper)] text-white font-bold tracking-widest hover:bg-[var(--color-copper)]/80 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-copper)]/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        送信中...
                      </span>
                    ) : (
                      <>
                        <span>送信する</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Direct Contacts & Desk Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone / Desk */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1c1c1e] to-[#22242a] border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-ivory)] flex items-center gap-2">
                <Phone className="text-[var(--color-copper)]" size={20} />
                お電話でのお問い合わせ
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs text-[var(--color-ivory)]/50 mb-1 font-mono">本社・技術営業部（国内案件）</div>
                  <div className="text-2xl font-bold font-mono text-[var(--color-ivory)]">03-1234-5678</div>
                  <div className="text-xs text-[var(--color-ivory)]/50 mt-1">受付：平日 9:00 - 18:00（土日祝除く）</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs text-[var(--color-ivory)]/50 mb-1 font-mono">仙台R&Dセンター（試作・受託研究相談）</div>
                  <div className="text-xl font-bold font-mono text-[var(--color-ivory)]">022-345-6789</div>
                  <div className="text-xs text-[var(--color-ivory)]/50 mt-1">受付：平日 9:00 - 17:30</div>
                </div>
              </div>
            </div>

            {/* Headquarters & Main Centers */}
            <div className="p-8 rounded-2xl bg-[#18181b] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-ivory)] flex items-center gap-2">
                <Building2 className="text-[var(--color-copper)]" size={20} />
                主要拠点案内
              </h3>

              <div className="space-y-4 text-xs text-[var(--color-ivory)]/75">
                <div className="border-b border-white/5 pb-3">
                  <div className="font-bold text-sm text-[var(--color-ivory)] mb-1">東京本社</div>
                  <p>〒100-0005 東京都千代田区丸の内1丁目1-1 鋼和ビル 45F</p>
                </div>
                <div className="border-b border-white/5 pb-3">
                  <div className="font-bold text-sm text-[var(--color-ivory)] mb-1">北九州特殊製鉄所</div>
                  <p>〒803-0801 福岡県北九州市小倉北区西港町12-5</p>
                </div>
                <div className="border-b border-white/5 pb-3">
                  <div className="font-bold text-sm text-[var(--color-ivory)] mb-1">大阪先端化学事業所</div>
                  <p>〒592-8331 大阪府堺市西区築港新町2丁目15</p>
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--color-ivory)] mb-1">ヨーロッパ支社（ドイツ）</div>
                  <p>Immermannstraße 65, 40210 Düsseldorf, Germany</p>
                </div>
              </div>
            </div>

            {/* FAQ Quick Link Banner */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HelpCircle className="text-[var(--color-copper)]" size={22} />
                <div>
                  <div className="text-sm font-bold text-[var(--color-ivory)]">よくあるご質問（FAQ）</div>
                  <div className="text-xs text-[var(--color-ivory)]/50">納期や規格認証の回答を掲載中</div>
                </div>
              </div>
              <Link
                href="/faq"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold font-mono tracking-wider transition-colors"
              >
                FAQを見る
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
