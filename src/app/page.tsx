import SeoSchema from "@/components/SeoSchema";
import { AboutBlock, Cta, Faq, Hero, HomeCopy, ServicesGrid, TrustBar, Zones } from "@/components/SiteSections";

export const metadata = {
  title: "Carroattrezzi a Ferrara 24H | Soccorso Stradale Rapido",
  description: "Carroattrezzi a Ferrara per traino auto, recupero veicoli, assistenza stradale e trasporto verso officina. Intervento rapido, chiama 0532 182 0746.",
};

export default function Home() {
  return (
    <main>
      <SeoSchema />
      <Hero />
      <TrustBar />
      <HomeCopy />
      <ServicesGrid />
      <AboutBlock />
      <Zones />
      <Faq />
      <Cta />
    </main>
  );
}
