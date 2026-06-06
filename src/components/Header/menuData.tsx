import { services, zones } from "@/lib/site";
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  { id: 1, title: "Home", path: "/" },
  {
    id: 2,
    title: "Servizi",
    submenu: [
      { id: 21, title: "Tutti i servizi", path: "/servizi/" },
      ...services.map((service, index) => ({
        id: 30 + index,
        title: service.title.replace(" a Ferrara", ""),
        path: `/servizi/${service.slug}/`,
      })),
    ],
  },
  {
    id: 3,
    title: "Zone",
    submenu: zones.map((zone, index) => ({
      id: 80 + index,
      title: zone.title,
      path: `/zone/${zone.slug}/`,
    })),
  },
  { id: 4, title: "Chi siamo", path: "/about/" },
  { id: 5, title: "Contatti", path: "/contact/" },
];

export default menuData;
