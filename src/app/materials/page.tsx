export const metadata = {
  title: "Materials Catalog | 製品情報",
};

export default function MaterialsPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Materials Catalog | 製品情報</h1>
        <div className="w-16 h-1 bg-[var(--color-copper)] mb-12" />
        <p className="text-xl text-[var(--color-ivory)]/70 max-w-3xl leading-relaxed">
          Explore our comprehensive catalog of advanced materials, from structural steel and specialty alloys to surface treatments and advanced composites. Each material is engineered for specific performance parameters.
        </p>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {[
          { code: "KŌWA-STRUCT", desc: "Structural Steel", app: "Architecture" },
          { code: "KŌWA-CERA", desc: "Specialty Alloys", app: "Aerospace" },
          { code: "KŌWA-CHEM", desc: "Surface Treatments", app: "Industrial" },
          { code: "KŌWA-NEX", desc: "Lightweight Alloys", app: "Automotive" },
          { code: "KŌWA-ELEC", desc: "Advanced Composites", app: "Energy" }
        ].map((item, idx) => (
          <div key={idx} className="border border-white/10 p-6 bg-[var(--color-gunmetal)] hover:border-[var(--color-copper)] transition-colors group">
            <p className="text-xs tracking-widest text-[var(--color-copper)] mb-2">MATERIAL CODE</p>
            <h4 className="text-2xl font-bold mb-4">{item.code}</h4>
            <p className="text-sm text-[var(--color-ivory)]/70 mb-4">{item.desc}</p>
            <p className="text-sm font-mono mb-8">App: {item.app}</p>
            <button className="text-sm tracking-widest border border-white/20 px-4 py-2 w-full group-hover:bg-[var(--color-copper)] group-hover:border-[var(--color-copper)] transition-colors">
              DOWNLOAD DATASHEET
            </button>
          </div>
        ))}
      </div>
  
      </div>
    </div>
  );
}
