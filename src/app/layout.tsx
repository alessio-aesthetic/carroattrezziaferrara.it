import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { site } from "@/lib/site";
import "../styles/index.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Carroattrezzi a Ferrara 24H | Soccorso Stradale Rapido",
    template: "%s | Carroattrezzi Ferrara",
  },
  description: "Carroattrezzi a Ferrara per soccorso stradale, traino auto, recupero veicoli e assistenza urgente. Chiama 0532 080237.",
  openGraph: {
    title: "Carroattrezzi a Ferrara 24H",
    description: "Soccorso stradale, traino auto e recupero veicoli a Ferrara e provincia.",
    url: site.url,
    siteName: site.domain,
    images: ["/images/towing/hero-tow-truck.jpg"],
    locale: "it_IT",
    type: "website",
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="it">
      <body>
        <Providers>
          <div className="isolate bg-white text-slate-900">
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
