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
            KŌWA MATERIALS<br />
            Engineering materials for a better future.
          </p>
        </div>

        {/* Links 1 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-semibold tracking-widest mb-2">PRODUCTS</h4>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Specialty Steel</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Advanced Alloys</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Industrial Chemicals</Link>
          <Link href="/materials" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Surface Treatments</Link>
        </div>

        {/* Links 2 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-semibold tracking-widest mb-2">COMPANY</h4>
          <Link href="/about" className="text-sm hover:text-[var(--color-ivory)] transition-colors">About Us</Link>
          <Link href="/research" className="text-sm hover:text-[var(--color-ivory)] transition-colors">R&D / Lab</Link>
          <Link href="/sustainability" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Sustainability</Link>
          <Link href="/careers" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Careers</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[var(--color-ivory)] font-semibold tracking-widest mb-2">LEGAL</h4>
          <Link href="/faq" className="text-sm hover:text-[var(--color-ivory)] transition-colors">FAQ</Link>
          <Link href="/privacy-policy" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Terms & Conditions</Link>
          <Link href="/contact" className="text-sm hover:text-[var(--color-ivory)] transition-colors">Contact</Link>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} KŌWA MATERIALS. All rights reserved.</p>
        <p className="mt-2 md:mt-0 tracking-widest uppercase">Precision Manufactured in Japan</p>
      </div>
    </footer>
  );
}
