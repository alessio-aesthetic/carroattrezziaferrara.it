import { Cta } from "@/components/SiteSections";
import { site, zones, zoneText } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zone = zones.find((item) => item.slug === slug);
  if (!zone) return {};
  return {
    title: zone.title,
    description: `${zone.title}: soccorso stradale, traino auto e recupero veicoli con contatto diretto. Chiama ${site.phone}.`,
    alternates: { canonical: `${site.url}/zone/${zone.slug}/` },
  };
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zone = zones.find((item) => item.slug === slug);
  if (!zone) notFound();
  const paragraphs = zoneText(zone.name);

  return (
    <main className="pt-24">
      <section className="bg-slate-950 py-20 text-white">
        <div className="container max-w-4xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-blue-300">zona servita</p>
          <h1 className="mb-6 text-4xl font-black lg:text-6xl">{zone.title}</h1>
          <p className="text-lg leading-8 text-slate-200">Assistenza stradale, traino auto, recupero veicoli e trasporto verso officina nella zona di {zone.name}.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="space-y-7 text-lg leading-8 text-slate-650">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <h2 className="text-3xl font-black text-slate-950">Vie e aree coperte a {zone.name}</h2>
            <p>Interveniamo in centro, zone residenziali, aree artigianali, parcheggi, strade provinciali e collegamenti verso Ferrara. Quando chiami, comunica un riferimento preciso: via, incrocio, distributore, parcheggio o punto visibile nelle vicinanze.</p>
            <div className="grid gap-5 md:grid-cols-3">
              {["Guasto improvviso", "Incidente", "Trasporto auto"].map((item) => <div key={item} className="rounded-2xl bg-blue-50 p-6 font-extrabold text-primary">{item}</div>)}
            </div>
          </article>
          <aside className="h-fit rounded-3xl bg-slate-50 p-7">
            <h2 className="mb-4 text-2xl font-black text-slate-950">Chiama da {zone.name}</h2>
            <p className="mb-6 text-slate-600">Indica posizione e problema del veicolo: organizziamo l intervento piu adatto.</p>
            <Link href={`tel:${site.tel}`} className="block rounded-full bg-primary px-6 py-4 text-center font-extrabold text-white">{site.phone}</Link>
          </aside>
        </div>
      </section>
      <Cta />
    </main>
  );
}
