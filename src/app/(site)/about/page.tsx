import { AboutBlock, Cta, Faq } from "@/components/SiteSections";
import { site } from "@/lib/site";

export const metadata = {
  title: "Chi siamo",
  description: "Scopri il servizio di carroattrezzi a Ferrara: assistenza stradale, traino auto e recupero veicoli con contatto diretto.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="bg-slate-950 py-20 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-blue-300">chi siamo</p>
          <h1 className="mb-6 text-4xl font-black lg:text-6xl">Carroattrezzi a Ferrara con assistenza chiara e gestione professionale</h1>
          <p className="text-lg leading-8 text-slate-200">Siamo il contatto locale per chi ha bisogno di recuperare un veicolo, organizzare un traino o ricevere supporto dopo un guasto. Lavoriamo con un obiettivo semplice: trasformare un imprevisto in una procedura gestita con ordine.</p>
        </div>
      </section>
      <AboutBlock />
      <section className="bg-slate-50 py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          {["Valutazione telefonica precisa", "Trasporto verso officina o deposito", "Assistenza per privati e aziende"].map((item) => <div key={item} className="rounded-2xl bg-white p-7 font-extrabold text-slate-900 shadow-sm">{item}</div>)}
        </div>
      </section>
      <Faq />
      <Cta />
    </main>
  );
}
