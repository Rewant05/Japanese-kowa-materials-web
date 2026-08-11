import HeroSection from "@/components/HeroSection";
import MaterialExplorer from "@/components/MaterialExplorer";
import ProcessTimeline from "@/components/ProcessTimeline";
import ChemicalTechnology from "@/components/ChemicalTechnology";
import Craftsmanship from "@/components/Craftsmanship";
import Applications from "@/components/Applications";
import TechLab from "@/components/TechLab";
import Sustainability from "@/components/Sustainability";
import HistoryTimeline from "@/components/HistoryTimeline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MaterialExplorer />
      <ProcessTimeline />
      <ChemicalTechnology />
      <Craftsmanship />
      <Applications />
      <TechLab />
      <Sustainability />
      <HistoryTimeline />
    </>
  );
}
