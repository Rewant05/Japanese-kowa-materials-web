import fs from 'fs';
import path from 'path';

const pages = [
  {
    name: 'about',
    title: 'About Us | 企業情報',
    content: 'Kōwa Materials was founded in 1958 with a singular vision: to push the boundaries of metallurgical science. Rooted in traditional Japanese craftsmanship, we have evolved into a global leader in advanced materials and industrial chemicals.'
  },
  {
    name: 'materials',
    title: 'Materials Catalog | 製品情報',
    content: 'Explore our comprehensive catalog of advanced materials, from structural steel and specialty alloys to surface treatments and advanced composites. Each material is engineered for specific performance parameters.',
    catalog: true
  },
  {
    name: 'technology',
    title: 'Technology | 技術',
    content: 'Our proprietary manufacturing processes combine extreme precision with algorithmic material discovery. We utilize AI-driven modeling to predict atomic structures before they are forged.'
  },
  {
    name: 'applications',
    title: 'Applications | 応用',
    content: 'From aerospace components withstanding extreme thermal stress to automotive structural steel offering unprecedented strength-to-weight ratios, Kōwa Materials are the foundation of modern engineering.'
  },
  {
    name: 'research',
    title: 'Research & Development | 研究開発',
    content: 'The KŌWA LAB is where tomorrow\'s materials are born. Our 500,000 sq ft R&D facility houses the world\'s most advanced electron microscopes and chemical synthesis laboratories.'
  },
  {
    name: 'sustainability',
    title: 'Sustainability | サステナビリティ',
    content: 'True strength lies in harmony with our environment. We are pioneering a closed-loop metallurgical ecosystem, aiming for 100% material traceability and drastically reducing carbon emissions.'
  },
  {
    name: 'company',
    title: 'Company Profile | 会社概要',
    content: 'Headquartered in Tokyo, Japan, Kōwa Materials operates globally with manufacturing and R&D facilities across Asia, Europe, and North America.'
  },
  {
    name: 'careers',
    title: 'Careers | 採用情報',
    content: 'Join a team of material scientists, chemical engineers, and master craftsmen dedicated to forging the future. We are always looking for innovators who respect tradition while pushing boundaries.'
  },
  {
    name: 'news',
    title: 'News & Updates | ニュース',
    content: 'Stay updated with the latest breakthroughs, corporate announcements, and industry insights from Kōwa Materials.'
  },
  {
    name: 'contact',
    title: 'Contact Us | お問い合わせ',
    content: 'Partner with our engineers to develop custom material solutions for your next project. Reach out to our global offices for technical support and sales inquiries.'
  },
  {
    name: 'faq',
    title: 'FAQ | よくあるご質問',
    content: 'Find answers to common questions regarding our material specifications, supply chain processes, and technical capabilities.'
  },
  {
    name: 'privacy-policy',
    title: 'Privacy Policy | プライバシーポリシー',
    content: 'We are committed to protecting your privacy and ensuring the security of your data. Read our policy to understand how we handle information.'
  },
  {
    name: 'terms-and-conditions',
    title: 'Terms & Conditions | 利用規約',
    content: 'These terms outline the rules and regulations for the use of Kōwa Materials\' website and services.'
  }
];

const generatePage = (page) => {
  const isCatalog = page.catalog;
  
  const catalogHTML = isCatalog ? `
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
  ` : '';

  const componentName = page.name.replace(/-./g, x => x[1].toUpperCase()).replace(/^./, x => x.toUpperCase());

  return `export const metadata = {
  title: "${page.title}",
};

export default function ${componentName}Page() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">${page.title}</h1>
        <div className="w-16 h-1 bg-[var(--color-copper)] mb-12" />
        <p className="text-xl text-[var(--color-ivory)]/70 max-w-3xl leading-relaxed">
          ${page.content.replace(/"/g, '&quot;')}
        </p>
        ${catalogHTML}
      </div>
    </div>
  );
}
`;
};

pages.forEach(page => {
  const dirPath = path.join(process.cwd(), 'src', 'app', page.name);
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), generatePage(page));
  console.log('Generated ' + page.name);
});
