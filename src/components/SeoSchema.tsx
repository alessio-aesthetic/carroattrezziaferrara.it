import { site } from "@/lib/site";

export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Carroattrezzi a Ferrara",
    url: site.url,
    telephone: site.tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Renata Viganò, 3",
      postalCode: "44124",
      addressLocality: "Ferrara",
      addressRegion: "FE",
      addressCountry: "IT",
    },
    areaServed: ["Ferrara", "Cento", "Comacchio", "Argenta", "Copparo", "Bondeno"],
    openingHours: "Mo-Su 00:00-23:59",
    image: `${site.url}/images/towing/f-hero-main.webp`,
    priceRange: "$$",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
