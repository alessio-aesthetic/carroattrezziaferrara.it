import { services, site, zones } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 text-white">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl font-black">CA</span>
                <div>
                  <p className="text-xl font-extrabold">Carroattrezzi Ferrara</p>
                  <p className="text-sm text-slate-400">soccorso stradale e traino auto</p>
                </div>
              </div>
              <p className="max-w-sm text-slate-300">Interventi per auto ferme, incidenti, trasporti programmati e assistenza stradale a Ferrara e provincia.</p>
              <div className="mt-6 space-y-2 text-sm text-slate-300">
                <p>{site.address}</p>
                <p><a href={`tel:${site.tel}`} className="hover:text-white">{site.phone}</a></p>
                <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <h4 className="mb-5 font-bold">Servizi</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {services.slice(0, 8).map((service) => <li key={service.slug}><Link className="hover:text-white" href={`/servizi/${service.slug}/`}>{service.title.replace(" a Ferrara", "")}</Link></li>)}
            </ul>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <h4 className="mb-5 font-bold">Zone</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {zones.slice(0, 8).map((zone) => <li key={zone.slug}><Link className="hover:text-white" href={`/zone/${zone.slug}/`}>{zone.name}</Link></li>)}
            </ul>
          </div>
          <div className="w-full px-4 lg:w-3/12">
            <h4 className="mb-5 font-bold">Contatti rapidi</h4>
            <p className="mb-5 text-sm text-slate-300">Per urgenze su strada chiama direttamente: e il modo piu veloce per organizzare il recupero.</p>
            <Link href={`tel:${site.tel}`} className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-blue-700">Chiama {site.phone}</Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-sm text-slate-400">© {new Date().getFullYear()} {site.domain}. Tutti i diritti riservati.</div>
      </div>
    </footer>
  );
}
