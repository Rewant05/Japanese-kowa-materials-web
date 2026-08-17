import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111112] text-[var(--color-ivory)]/60 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-widest text-[var(--color-ivory)]">鋼和</span>
          </Link>
          <p className="text-sm tracking-wider">
            鋼和素材<br />
            より良い未来のための素材工学。
          </p>
        </div>

        {/* Links 1 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-semibold tracking-widest mb-2">製品</h4>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">特殊鋼</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">先端合金</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">産業用化学</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">表面処理</Link>
        </div>

        {/* Links 2 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-semibold tracking-widest mb-2">企業情報</h4>
          <Link href="/about" className="text-sm hover:text-[var(--color-ivory)] transition-colors">会社概要</Link>
          <Link href="/research" className="text-sm hover:text-[var(--color-ivory)] transition-colors">研究開発 / ラボ</Link>
          <Link href="/sustainability" className="text-sm hover:text-[var(--color-ivory)] transition-colors">サステナビリティ</Link>
          <Link href="/careers" className="text-sm hover:text-[var(--color-ivory)] transition-colors">採用情報</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-semibold tracking-widest mb-2">法務情報</h4>
          <Link href="/faq" className="text-sm hover:text-[var(--color-ivory)] transition-colors">よくある質問</Link>
          <Link href="/privacy-policy" className="text-sm hover:text-[var(--color-ivory)] transition-colors">プライバシーポリシー</Link>
          <Link href="/terms-and-conditions" className="text-sm hover:text-[var(--color-ivory)] transition-colors">利用規約</Link>
          <Link href="/contact" className="text-sm hover:text-[var(--color-ivory)] transition-colors">お問い合わせ</Link>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} 鋼和. 全著作権所有。</p>
        <p className="mt-2 md:mt-0 tracking-widest uppercase">日本国内での精密製造</p>
      </div>
    </footer>
  );
}
