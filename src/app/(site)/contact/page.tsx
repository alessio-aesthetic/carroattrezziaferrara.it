import { Cta } from "@/components/SiteSections";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Contatti",
  description: "Contatta Carroattrezzi Ferrara: telefono 0532 080237, email assistenza@carroattrezziaferrara.it, sede in Via Mario Tenani 6.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="bg-slate-950 py-20 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-blue-300">contatti</p>
          <h1 className="mb-6 text-4xl font-black lg:text-6xl">Contatta il carroattrezzi a Ferrara</h1>
          <p className="text-lg leading-8 text-slate-200">Per urgenze chiama direttamente. Per richieste programmate puoi inviare una email indicando veicolo, punto di ritiro, destinazione e orario preferito.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-3xl font-black text-slate-950">Richiedi assistenza</h2>
            <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="space-y-4">
              <input name="nome" placeholder="Nome e cognome" className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-primary" />
              <input name="telefono" placeholder="Telefono" className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-primary" />
              <input name="posizione" placeholder="Dove si trova il veicolo?" className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-primary" />
              <textarea name="messaggio" placeholder="Descrivi problema, veicolo e destinazione" rows={6} className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-primary" />
              <button className="rounded-full bg-primary px-8 py-4 font-extrabold text-white hover:bg-blue-700">Invia richiesta</button>
            </form>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8">
            <h2 className="mb-6 text-3xl font-black text-slate-950">Dati utili</h2>
            <div className="space-y-5 text-lg text-slate-700">
              <p><strong>Telefono:</strong> <Link href={`tel:${site.tel}`} className="text-primary">{site.phone}</Link></p>
              <p><strong>Email:</strong> <Link href={`mailto:${site.email}`} className="text-primary">{site.email}</Link></p>
              <p><strong>Sede:</strong> {site.address}</p>
              <p><strong>Orari:</strong> assistenza per urgenze stradali 24 ore su 24.</p>
            </div>
            <iframe title="Mappa Ferrara" className="mt-8 h-72 w-full rounded-2xl border-0" loading="lazy" src="https://www.google.com/maps?q=Via%20Mario%20Tenani%206%2044122%20Ferrara%20FE&output=embed" />
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
