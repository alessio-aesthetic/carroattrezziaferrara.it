import { Cta, ServicesGrid } from "@/components/SiteSections";

export const metadata = {
  title: "Servizi carroattrezzi a Ferrara",
  description: "Tutti i servizi di carroattrezzi a Ferrara: soccorso stradale, traino auto, recupero veicoli, assistenza autostrada, moto e deposito auto.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <section className="bg-slate-950 py-20 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-blue-300">servizi</p>
          <h1 className="mb-6 text-4xl font-black lg:text-6xl">Servizi carroattrezzi a Ferrara</h1>
          <p className="text-lg leading-8 text-slate-200">Dal traino urgente al trasporto programmato, ogni servizio viene organizzato con attenzione alla sicurezza del veicolo e alla chiarezza per il cliente.</p>
        </div>
      </section>
      <ServicesGrid />
      <Cta />
    </main>
  );
}
