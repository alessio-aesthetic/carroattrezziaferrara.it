"use client";

import { site } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

export default function Header() {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 64);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = sticky || pathUrl !== "/";

  return (
    <header className={`ud-header left-0 top-0 z-40 flex w-full items-center ${sticky ? "fixed border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur" : "absolute bg-transparent"}`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-64 max-w-full px-4">
            <Link href="/" className="flex items-center gap-3 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl font-black text-white shadow-lg">CA</span>
              <span className={`leading-tight ${light ? "text-slate-950" : "text-white"}`}>
                <span className="block text-lg font-extrabold tracking-tight">Carroattrezzi Ferrara</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] opacity-70">soccorso stradale</span>
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end px-4">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Apri menu"
              className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-2 ring-primary focus:ring-2 lg:hidden"
            >
              <span className={`my-1.5 block h-0.5 w-7 ${light ? "bg-slate-900" : "bg-white"}`} />
              <span className={`my-1.5 block h-0.5 w-7 ${light ? "bg-slate-900" : "bg-white"}`} />
              <span className={`my-1.5 block h-0.5 w-7 ${light ? "bg-slate-900" : "bg-white"}`} />
            </button>

            <nav className={`navbar absolute right-0 top-full z-30 w-[290px] rounded-xl border border-slate-200 bg-white p-5 shadow-xl duration-200 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${navbarOpen ? "visible opacity-100" : "invisible opacity-0 lg:visible lg:opacity-100"}`}>
              <ul className="block lg:flex lg:items-center lg:gap-8">
                {menuData.map((item, index) => (
                  <li className="group relative" key={item.id}>
                    {item.path ? (
                      <Link onClick={() => setNavbarOpen(false)} href={item.path} className={`block py-3 text-base font-semibold hover:text-primary lg:py-7 ${light ? "text-slate-800" : "lg:text-white text-slate-800"}`}>
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <button onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className={`flex w-full items-center justify-between py-3 text-base font-semibold hover:text-primary lg:py-7 ${light ? "text-slate-800" : "lg:text-white text-slate-800"}`}>
                          {item.title}<span className="ml-2">⌄</span>
                        </button>
                        <div className={`rounded-xl border border-slate-100 bg-white p-3 shadow-xl lg:invisible lg:absolute lg:left-0 lg:top-full lg:w-[310px] lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 ${openIndex === index ? "block" : "hidden lg:block"}`}>
                          {item.submenu?.map((sub) => (
                            <Link key={sub.id} onClick={() => setNavbarOpen(false)} href={sub.path || "#"} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-primary">
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <Link href={`tel:${site.tel}`} className="ml-6 hidden rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 lg:inline-flex">
              Chiama {site.phone}
            </Link>
          </div>
        </div>
      </div>
      <Link href={`tel:${site.tel}`} className="fixed bottom-4 left-4 right-4 z-[1000] rounded-full bg-primary px-5 py-4 text-center text-base font-extrabold text-white shadow-2xl lg:hidden">
        Chiama ora {site.phone}
      </Link>
    </header>
  );
}
