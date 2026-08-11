export const metadata = {
  title: "News & Updates | ニュース",
};

export default function NewsPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">News & Updates | ニュース</h1>
        <div className="w-16 h-1 bg-[var(--color-copper)] mb-12" />
        <p className="text-xl text-[var(--color-ivory)]/70 max-w-3xl leading-relaxed">
          Stay updated with the latest breakthroughs, corporate announcements, and industry insights from Kōwa Materials.
        </p>
        
      </div>
    </div>
  );
}
