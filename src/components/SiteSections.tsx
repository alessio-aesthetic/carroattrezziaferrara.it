import { services, site, zones } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 lg:min-h-[760px] lg:pt-44">
      <Image src="/images/towing/hero-tow-truck.jpg" alt="Carroattrezzi a Ferrara per traino auto" fill priority className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
      <div className="container relative">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-200">soccorso stradale rapido</p>
          <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">Carroattrezzi a Ferrara 24H per auto ferme, guasti e incidenti</h1>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-200">Quando il veicolo non riparte, serve un servizio chiaro, veloce e organizzato. Interveniamo per traino auto, recupero mezzi, assistenza stradale, trasporto verso officina e gestione del veicolo in sicurezza.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={`tel:${site.tel}`} className="rounded-full bg-primary px-8 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-blue-600/30 hover:bg-blue-700">Chiama {site.phone}</Link>
            <Link href="/contact/" className="rounded-full border border-white/30 px-8 py-4 text-center text-base font-bold text-white hover:bg-white hover:text-slate-950">Richiedi assistenza</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-6">
      <div className="container grid gap-4 text-sm font-bold text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
        {["Interventi su Ferrara e provincia", "Traino verso officina o deposito", "Assistenza per auto, moto e furgoni", "Contatto telefonico diretto"].map((item) => <div key={item} className="rounded-xl bg-slate-50 px-5 py-4">{item}</div>)}
      </div>
    </section>
  );
}

export function HomeCopy() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">intervento ordinato</p>
            <h2 className="mb-6 text-3xl font-black text-slate-950 lg:text-5xl">Un carroattrezzi a Ferrara deve essere rapido, ma soprattutto affidabile.</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>Quando un auto si ferma, il problema non e solo meccanico. C e la sicurezza del conducente, il traffico intorno, l ansia di capire dove portare il veicolo e la necessita di non perdere ore in telefonate inutili. Per questo il servizio nasce da una prima valutazione chiara.</p>
              <p>Ti chiediamo dove si trova il mezzo, se e in una posizione pericolosa, che tipo di veicolo e coinvolto e quale destinazione preferisci. In base a queste informazioni organizziamo il traino, il recupero o l assistenza piu adatta.</p>
              <p>Il servizio e utile per guasti improvvisi, incidenti, batterie scariche, pneumatici danneggiati, auto non marcianti, trasporti programmati e veicoli da consegnare in officina. Ogni intervento viene gestito con attenzione al mezzo e con comunicazione semplice.</p>
            </div>
          </div>
          <div className="relative h-[520px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl">
            <Image src="/images/towing/vehicle-recovery.jpg" alt="Recupero veicolo con carroattrezzi" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">servizi</p>
          <h2 className="text-3xl font-black text-slate-950 lg:text-5xl">Servizi di carroattrezzi e assistenza stradale</h2>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link href={`/servizi/${service.slug}/`} key={service.slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-52">
                <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-extrabold text-slate-950">{service.title}</h3>
                <p className="text-slate-600">{service.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative h-[460px] overflow-hidden rounded-[2rem]">
            <Image src="/images/towing/mechanic-lift.jpg" alt="Assistenza tecnica per veicolo fermo" fill className="object-cover" />
          </div>
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-primary">chi siamo</p>
            <h2 className="mb-6 text-3xl font-black text-slate-950 lg:text-5xl">Un servizio locale costruito per risolvere, non per complicare.</h2>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>Il nostro lavoro e aiutare chi si trova con un veicolo fermo e ha bisogno di una soluzione concreta. Non promettiamo miracoli: organizziamo il recupero nel modo piu sensato, proteggendo il mezzo e spiegando ogni passaggio.</p>
              <p>Il contatto diretto permette di capire subito se serve un carroattrezzi, un trasporto programmato, un supporto sul posto o una consegna in officina. Questa chiarezza riduce stress, attese e incomprensioni.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Sicurezza", "Chiarezza", "Rapidita"].map((item) => <div key={item} className="rounded-xl bg-blue-50 p-5 font-extrabold text-primary">{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Zones() {
  return (
    <section className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-blue-300">zone servite</p>
          <h2 className="text-3xl font-black lg:text-5xl">Carroattrezzi a Ferrara e nei comuni vicini</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {zones.map((zone) => <Link key={zone.slug} href={`/zone/${zone.slug}/`} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-bold hover:bg-white hover:text-slate-950">{zone.title}</Link>)}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const items = [
    ["Quando conviene chiamare il carroattrezzi?", "Quando il veicolo non puo ripartire in sicurezza, dopo un incidente, con una gomma danneggiata, batteria scarica o guasto che impedisce la marcia."],
    ["Portate l auto nella mia officina?", "Si, il veicolo puo essere trasportato verso officina, deposito o destinazione concordata, in base alla situazione e alla distanza."],
    ["Serve indicare la posizione precisa?", "Si. Una posizione chiara aiuta a organizzare l intervento e a ridurre i tempi, soprattutto in aree trafficate o strade provinciali."],
    ["Intervenite anche per moto?", "Si, gestiamo anche moto e scooter con attenzione al fissaggio e al trasporto."],
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <h2 className="mb-10 text-3xl font-black text-slate-950 lg:text-5xl">Domande frequenti</h2>
        <div className="grid gap-5 lg:grid-cols-2">
          {items.map(([q, a]) => <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="mb-3 text-xl font-extrabold text-slate-950">{q}</h3><p className="leading-7 text-slate-600">{a}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-black lg:text-5xl">Auto ferma a Ferrara?</h2>
          <p className="mt-3 text-blue-100">Chiama ora e descrivi posizione, veicolo e problema.</p>
        </div>
        <Link href={`tel:${site.tel}`} className="rounded-full bg-white px-8 py-4 text-center font-extrabold text-primary">Chiama {site.phone}</Link>
      </div>
    </section>
  );
}
