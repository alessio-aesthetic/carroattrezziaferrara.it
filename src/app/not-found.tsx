import Link from "next/link";

export const metadata = {
  title: "Pagina non trovata | Carroattrezzi Ferrara",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-blue-300">
          errore 404
        </p>
        <h1 className="mb-6 text-4xl font-black lg:text-6xl">
          Pagina non trovata
        </h1>
        <p className="mb-8 text-slate-300">
          La pagina che cerchi non esiste o è stata spostata. Torna alla home
          per richiedere assistenza stradale a Ferrara.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-primary px-8 py-4 font-extrabold text-white"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  );
}
