import { Cta } from "@/components/SiteSections";
import { serviceText, services, site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.title}: assistenza stradale, traino e recupero veicoli con contatto diretto. Chiama ${site.phone}.`,
    alternates: { canonical: `${site.url}/servizi/${service.slug}/` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const paragraphs = serviceText(service.title);
  const faq = [
    ["Quanto tempo richiede l intervento?", "Dipende dalla posizione e dal traffico, ma la richiesta viene valutata subito per organizzare la soluzione piu rapida."],
    ["Dove potete portare il veicolo?", "In officina, in deposito o presso una destinazione concordata con il proprietario."],
    ["Quali informazioni devo dare?", "Posizione precisa, modello del veicolo, problema riscontrato e destinazione preferita."],
  ];

  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <Image src={service.image} alt={service.title} fill priority className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        <div className="container relative max-w-4xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-blue-300">servizio</p>
          <h1 className="mb-6 text-4xl font-black lg:text-6xl">{service.title}</h1>
          <p className="text-lg leading-8 text-slate-200">{service.short}</p>
          <Link href={`tel:${site.tel}`} className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-extrabold text-white">Chiama {site.phone}</Link>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="space-y-8 text-lg leading-8 text-slate-650">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="grid gap-5 md:grid-cols-3">
              {["Contatto diretto", "Mezzo adeguato", "Gestione sicura"].map((item) => <div key={item} className="rounded-2xl bg-blue-50 p-6 font-extrabold text-primary">{item}</div>)}
            </div>
            <h2 className="text-3xl font-black text-slate-950">Domande frequenti su {service.title.toLowerCase()}</h2>
            {faq.map(([q, a]) => <div key={q} className="rounded-2xl border border-slate-200 p-6"><h3 className="mb-2 text-xl font-extrabold text-slate-950">{q}</h3><p>{a}</p></div>)}
          </article>
          <aside className="h-fit rounded-3xl bg-slate-50 p-7">
            <h2 className="mb-4 text-2xl font-black text-slate-950">Serve assistenza?</h2>
            <p className="mb-6 text-slate-600">Chiama e descrivi posizione, veicolo e problema: ti guidiamo nella soluzione migliore.</p>
            <Link href={`tel:${site.tel}`} className="block rounded-full bg-primary px-6 py-4 text-center font-extrabold text-white">{site.phone}</Link>
          </aside>
        </div>
      </section>
      <Cta />
    </main>
  );
}
