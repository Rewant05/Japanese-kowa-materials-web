import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f10] text-[var(--color-ivory)]/70 pt-20 pb-12 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-copper)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--color-industrial-blue)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        
        {/* Brand & Corporate Summary */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-gunmetal)] flex items-center justify-center border border-white/20 shadow-md">
              <span className="text-xl font-black tracking-widest text-[var(--color-ivory)]">鋼</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-[var(--color-ivory)]">
                鋼和素材株式会社
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[var(--color-copper)] font-mono uppercase">
                Kōwa Materials & Chemical Co., Ltd.
              </span>
            </div>
          </Link>

          <p className="text-sm leading-relaxed text-[var(--color-ivory)]/60 max-w-sm">
            より良い未来のための素材工学。1958年の創業以来、日本の卓越した冶金技術と最先端の材料科学を融合し、世界各国の基幹産業を支える革新素材を提供しています。
          </p>

          <div className="space-y-2 text-xs text-[var(--color-ivory)]/60 pt-2">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[var(--color-copper)] shrink-0" />
              <span>東京都千代田区丸の内1丁目1-1 鋼和ビル</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[var(--color-copper)] shrink-0" />
              <span>03-1234-5678（代表）</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[var(--color-copper)] shrink-0" />
              <span>info@kowamaterials.jp</span>
            </div>
          </div>
        </div>

        {/* Column 1: Products & Tech */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-bold tracking-widest text-sm mb-2 border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-copper)]" />
            製品・技術
          </h4>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">特殊鋼・高張力鋼</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">超耐熱・ニッケル合金</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">機能性コーティング・DLC</Link>
          <Link href="/technology" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">真空誘導溶解（VIM）</Link>
          <Link href="/technology" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">HIP熱間等方加圧成型</Link>
          <Link href="/applications" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">産業応用・事例紹介</Link>
        </div>

        {/* Column 2: R&D & Sustainability */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-bold tracking-widest text-sm mb-2 border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-copper)]" />
            イノベーション・ESG
          </h4>
          <Link href="/research" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">研究開発（R&D）体制</Link>
          <Link href="/research" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">マテリアルズ・インフォマティクス</Link>
          <Link href="/research" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">ナノ構造解析ラボ</Link>
          <Link href="/sustainability" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">サステナビリティ方針</Link>
          <Link href="/sustainability" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">カーボンニュートラル2050</Link>
          <Link href="/sustainability" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">低炭素エコ鋼材シリーズ</Link>
        </div>

        {/* Column 3: Corporate & Support */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-bold tracking-widest text-sm mb-2 border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-copper)]" />
            企業情報・サポート
          </h4>
          <Link href="/about" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">会社概要・役員一覧</Link>
          <Link href="/careers" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200 flex items-center justify-between">
            <span>採用情報</span>
            <span className="text-[10px] bg-[var(--color-copper)]/20 text-[var(--color-copper)] px-1.5 py-0.5 rounded font-mono">RECRUIT</span>
          </Link>
          <Link href="/news" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">ニュース＆リリース</Link>
          <Link href="/faq" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">よくある質問（FAQ）</Link>
          <Link href="/contact" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200 flex items-center gap-1 font-bold text-[var(--color-ivory)]">
            <span>お問い合わせ・試作相談</span>
            <ArrowUpRight size={14} />
          </Link>
          <Link href="/privacy-policy" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">プライバシーポリシー</Link>
          <Link href="/terms-and-conditions" className="text-sm hover:text-[var(--color-ivory)] hover:translate-x-1 transition-all duration-200">利用規約</Link>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-ivory)]/50 gap-4">
        <p>&copy; {new Date().getFullYear()} 鋼和素材株式会社 (Kōwa Materials & Chemical Co., Ltd.). All Rights Reserved.</p>
        <div className="flex items-center gap-6 font-mono text-[11px] tracking-wider uppercase">
          <span>ISO 9001 / ISO 14001 認証取得</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Made in Japan</span>
        </div>
      </div>
    </footer>
  );
}
