"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Mail, ChevronRight } from "lucide-react";

const links = [
  { href: "/materials", label: "製品情報", sub: "Materials" },
  { href: "/technology", label: "技術", sub: "Technology" },
  { href: "/applications", label: "応用分野", sub: "Applications" },
  { href: "/research", label: "研究開発", sub: "R&D", aliases: ["/rd", "/r-and-d"] },
  { href: "/sustainability", label: "サステナビリティ", sub: "Sustainability", aliases: ["/sustanibility"] },
  { href: "/about", label: "会社概要", sub: "About Us", aliases: ["/about-us", "/company"] },
  { href: "/faq", label: "よくある質問", sub: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (link: typeof links[0]) => {
    if (pathname === link.href) return true;
    if (link.aliases && link.aliases.some((alias) => pathname === alias || pathname.startsWith(`${alias}/`))) {
      return true;
    }
    if (link.href !== "/" && pathname.startsWith(link.href)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#141416]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
            : "bg-[#141416]/80 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-gunmetal)] flex items-center justify-center border border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-black tracking-widest text-[var(--color-ivory)]">鋼</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-widest text-[var(--color-ivory)] flex items-center gap-1.5">
                鋼和素材
                <span className="text-[10px] font-mono text-[var(--color-copper)] font-normal tracking-widest px-1.5 py-0.5 rounded bg-[var(--color-copper)]/10 border border-[var(--color-copper)]/20">
                  KŌWA
                </span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[var(--color-ivory)]/50 uppercase font-light">
                Advanced Materials & Tech
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {links.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm tracking-wider transition-all duration-200 group ${
                    active
                      ? "text-[var(--color-ivory)] font-medium"
                      : "text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10 flex flex-col items-center">
                    <span>{link.label}</span>
                    <span className="text-[9px] text-[var(--color-ivory)]/40 font-mono tracking-tight uppercase group-hover:text-[var(--color-copper)] transition-colors">
                      {link.sub}
                    </span>
                  </span>
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-lg border border-white/15 shadow-inner"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`relative group overflow-hidden px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                pathname === "/contact" || pathname === "/inquiry"
                  ? "bg-[var(--color-copper)] text-white shadow-lg shadow-[var(--color-copper)]/25"
                  : "bg-[var(--color-ivory)] text-[var(--color-graphite)] hover:bg-white hover:shadow-lg"
              }`}
            >
              <span>お問い合わせ</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-ivory)] hover:bg-white/10 transition-colors z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー切り替え"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl xl:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-full bg-[#141416] pt-28 pb-12 px-6 overflow-y-auto flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="text-xs font-mono text-[var(--color-copper)] tracking-widest uppercase border-b border-white/10 pb-2">
                  Navigation Menu
                </div>

                <nav className="flex flex-col space-y-2">
                  {links.map((link) => {
                    const active = isActive(link);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${
                          active
                            ? "bg-white/10 text-[var(--color-ivory)] font-bold border border-white/15"
                            : "text-[var(--color-ivory)]/75 hover:bg-white/5 hover:text-[var(--color-ivory)]"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-lg tracking-wide">{link.label}</span>
                          <span className="text-xs text-[var(--color-ivory)]/40 font-mono">{link.sub}</span>
                        </div>
                        <ChevronRight size={18} className={active ? "text-[var(--color-copper)]" : "text-white/20"} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Footer CTAs */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 rounded-xl bg-[var(--color-copper)] text-white text-center font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-copper)]/20"
                >
                  <Mail size={18} />
                  <span>お問い合わせフォーム</span>
                </Link>

                <div className="grid grid-cols-2 gap-3 text-xs text-[var(--color-ivory)]/60">
                  <a
                    href="tel:0312345678"
                    className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <Phone size={14} className="text-[var(--color-copper)]" />
                    <span>03-1234-5678</span>
                  </a>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-center">
                    <span>平日 9:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
