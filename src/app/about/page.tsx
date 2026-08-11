export const metadata = {
  title: "About Us | 企業情報",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">About Us | 企業情報</h1>
        <div className="w-16 h-1 bg-[var(--color-copper)] mb-12" />
        <p className="text-xl text-[var(--color-ivory)]/70 max-w-3xl leading-relaxed">
          Kōwa Materials was founded in 1958 with a singular vision: to push the boundaries of metallurgical science. Rooted in traditional Japanese craftsmanship, we have evolved into a global leader in advanced materials and industrial chemicals.
        </p>
        
      </div>
    </div>
  );
}
