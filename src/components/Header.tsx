"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/materials", label: "Materials" },
  { href: "/technology", label: "Technology" },
  { href: "/applications", label: "Applications" },
  { href: "/research", label: "Research" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/company", label: "Company" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--color-graphite)]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-xl font-bold tracking-widest text-[var(--color-ivory)]">鋼和</span>
            <span className="text-sm tracking-[0.2em] text-[var(--color-ivory)]/70 mt-1 hidden sm:block">KŌWA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 border border-[var(--color-ivory)]/30 text-[var(--color-ivory)] text-sm tracking-wider hover:bg-[var(--color-ivory)] hover:text-[var(--color-graphite)] transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[var(--color-ivory)] z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-graphite)] pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--color-ivory)] tracking-widest border-b border-white/10 pb-4"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-4 bg-[var(--color-ivory)] text-[var(--color-graphite)] text-center tracking-widest font-bold"
              >
                お問い合わせ
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
