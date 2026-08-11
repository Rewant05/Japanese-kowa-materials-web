export const metadata = {
  title: "Company Profile | 会社概要",
};

export default function CompanyPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Company Profile | 会社概要</h1>
        <div className="w-16 h-1 bg-[var(--color-copper)] mb-12" />
        <p className="text-xl text-[var(--color-ivory)]/70 max-w-3xl leading-relaxed">
          Headquartered in Tokyo, Japan, Kōwa Materials operates globally with manufacturing and R&D facilities across Asia, Europe, and North America.
        </p>
        
      </div>
    </div>
  );
}
