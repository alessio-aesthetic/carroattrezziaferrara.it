export const site = {
  name: "Carroattrezzi a Ferrara",
  domain: "carroattrezziaferrara.it",
  url: "https://carroattrezziaferrara.it",
  phone: "0532 080237",
  tel: "+390532080237",
  email: "assistenza@carroattrezziaferrara.it",
  address: "Via Mario Tenani, 6 - 44122 Ferrara FE",
  city: "Ferrara",
  province: "FE",
};

export const services = [
  {
    slug: "soccorso-stradale-24h",
    title: "Soccorso stradale 24H a Ferrara",
    short: "Assistenza rapida per guasti, auto ferme, incidenti e situazioni urgenti su strada.",
    image: "/images/towing/roadside-emergency.jpg",
  },
  {
    slug: "traino-auto",
    title: "Traino auto a Ferrara",
    short: "Trasporto del veicolo verso officina, deposito o destinazione concordata.",
    image: "/images/towing/hero-tow-truck.jpg",
  },
  {
    slug: "recupero-veicoli-incidentati",
    title: "Recupero veicoli incidentati a Ferrara",
    short: "Intervento ordinato dopo sinistri, urti, uscite di strada o veicoli non marcianti.",
    image: "/images/towing/night-assistance.jpg",
  },
  {
    slug: "trasporto-auto",
    title: "Trasporto auto a Ferrara",
    short: "Trasferimento programmato di auto usate, nuove, ferme o da consegnare in officina.",
    image: "/images/towing/vehicle-recovery.jpg",
  },
  {
    slug: "carroattrezzi-moto",
    title: "Carroattrezzi moto a Ferrara",
    short: "Recupero di moto, scooter e veicoli leggeri con attenzione a fissaggio e trasporto.",
    image: "/images/towing/tow-truck-yard.jpg",
  },
  {
    slug: "avviamento-batteria",
    title: "Avviamento batteria a Ferrara",
    short: "Supporto per batteria scarica, auto che non parte e prima valutazione del problema.",
    image: "/images/towing/mechanic-lift.jpg",
  },
  {
    slug: "cambio-gomma",
    title: "Cambio gomma a Ferrara",
    short: "Assistenza per forature, pneumatici danneggiati e veicoli fermi a bordo strada.",
    image: "/images/towing/roadside-emergency.jpg",
  },
  {
    slug: "sblocco-auto",
    title: "Sblocco auto a Ferrara",
    short: "Aiuto in caso di chiavi chiuse nel veicolo o accesso bloccato, con gestione prudente.",
    image: "/images/towing/mechanic-lift.jpg",
  },
  {
    slug: "rimozione-veicoli",
    title: "Rimozione veicoli a Ferrara",
    short: "Rimozione e spostamento mezzi in aree private, cortili, parcheggi e spazi aziendali.",
    image: "/images/towing/hero-tow-truck.jpg",
  },
  {
    slug: "recupero-fuoristrada",
    title: "Recupero fuoristrada a Ferrara",
    short: "Interventi per veicoli bloccati in fondi difficili, strade bianche o aree non asfaltate.",
    image: "/images/towing/night-assistance.jpg",
  },
  {
    slug: "assistenza-autostrada",
    title: "Assistenza autostrada a Ferrara",
    short: "Supporto per auto ferme nei collegamenti principali, con priorita alla sicurezza.",
    image: "/images/towing/roadside-emergency.jpg",
  },
  {
    slug: "deposito-auto",
    title: "Deposito auto a Ferrara",
    short: "Custodia e gestione del veicolo dopo recupero, guasto o trasporto concordato.",
    image: "/images/towing/tow-truck-yard.jpg",
  },
];

export const zones = [
  "Ferrara",
  "Cento",
  "Comacchio",
  "Argenta",
  "Copparo",
  "Bondeno",
  "Portomaggiore",
  "Poggio Renatico",
  "Vigarano Mainarda",
  "Occhiobello",
  "Tresignana",
  "Codigoro",
].map((name) => ({
  name,
  slug: name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("à", "a")
    .replaceAll("è", "e")
    .replaceAll("é", "e")
    .replaceAll("ì", "i")
    .replaceAll("ò", "o")
    .replaceAll("ù", "u"),
  title: `Carroattrezzi a ${name}`,
}));

export function serviceText(title: string) {
  return [
    `${title} significa avere un riferimento chiaro quando l auto non puo proseguire, quando un guasto blocca la giornata o quando serve spostare il veicolo senza rischiare danni aggiuntivi. Il servizio viene organizzato ascoltando prima la situazione: posizione, tipo di veicolo, sintomi del guasto, accessi disponibili e destinazione richiesta.`,
    "La priorita e mettere in sicurezza il conducente e il mezzo. Per questo chiediamo sempre dove si trova l auto, se e in carreggiata, se ci sono passeggeri a bordo e se il veicolo puo essere mosso. Da queste informazioni dipende il tipo di intervento: semplice assistenza sul posto, recupero con carroattrezzi, traino verso officina o trasporto programmato.",
    "Lavoriamo con un approccio pratico e trasparente. Prima dell uscita spieghiamo cosa serve sapere, durante l intervento proteggiamo il veicolo e al termine indichiamo la soluzione piu adatta: consegna in officina, deposito, trasferimento presso un indirizzo o gestione concordata con il proprietario.",
    "Il servizio e pensato per privati, professionisti, aziende e automobilisti di passaggio. Che si tratti di una batteria scarica, una gomma danneggiata, un incidente o un auto che non parte, l obiettivo resta lo stesso: ridurre attesa, stress e incertezza, con un intervento ordinato e comprensibile.",
  ];
}

export function zoneText(city: string) {
  return [
    `Il servizio di carroattrezzi a ${city} e pensato per chi ha bisogno di assistenza stradale senza perdere tempo tra telefonate confuse, informazioni incomplete e attese indefinite. Prima di inviare il mezzo raccogliamo posizione, modello del veicolo, condizioni della strada e destinazione preferita.`,
    `A ${city} interveniamo per auto ferme, guasti improvvisi, incidenti, batterie scariche, pneumatici danneggiati e veicoli da trasportare verso officina o deposito. Ogni richiesta viene gestita con attenzione alla sicurezza, soprattutto quando il veicolo si trova vicino a traffico, incroci, parcheggi affollati o strade provinciali.`,
    `La forza di un buon servizio locale e la chiarezza: sapere chi chiamare, cosa comunicare e quale soluzione aspettarsi. Per questo il contatto telefonico e diretto, con indicazioni semplici e una valutazione realistica dell intervento necessario.`,
    `Il carroattrezzi a ${city} e utile sia nelle emergenze sia nei trasferimenti programmati. Possiamo organizzare il traino verso un meccanico di fiducia, il trasporto di un mezzo non marciante o il recupero dopo un problema che impedisce di ripartire in sicurezza.`,
  ];
}
