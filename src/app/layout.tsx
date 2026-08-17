import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "鋼和 (Kōwa Materials) | より良い未来のための素材工学",
  description: "鋼和は伝統的な日本の職人技と高度な産業化学を融合させ、特殊鋼、高性能合金、最先端の表面処理を生み出します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-graphite)] text-[var(--color-ivory)]">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
