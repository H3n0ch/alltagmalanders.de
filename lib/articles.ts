export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  category: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: "mietpreise-deutschland-alternativen",
    title: "Mietpreise 2026: Warum immer mehr Deutsche alternative Wohnformen wählen",
    excerpt:
      "Die Mieten in deutschen Großstädten steigen seit über einem Jahrzehnt schneller als die Löhne. Was das für Mieter bedeutet – und welche Alternativen wirklich funktionieren.",
    date: "18. Juni 2026",
    isoDate: "2026-06-18",
    category: "Immobilien",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "cohousing-gemeinschaftlich-wohnen",
    title: "Cohousing: Warum Gemeinschaft günstiger wohnen lässt",
    excerpt:
      "Cohousing verbindet private Rückzugsräume mit geteilter Infrastruktur – und kann die Wohnkosten erheblich senken. Ein Überblick über das Modell und wo es in Deutschland funktioniert.",
    date: "15. Juni 2026",
    isoDate: "2026-06-15",
    category: "Wohnen",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "hausboote-als-wohnform",
    title: "Hausboote als Wohnform: Leben auf dem Wasser",
    excerpt:
      "Hausboote wirken auf den ersten Blick wie eine romantische Spinnerei. Doch für eine wachsende Zahl von Menschen sind sie eine ernsthafte, bezahlbare Alternative zum klassischen Immobilienmarkt.",
    date: "12. Juni 2026",
    isoDate: "2026-06-12",
    category: "Wohnen",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "naturlandschaften-deutschland",
    title: "Naturlandschaften Deutschland: Die schönsten Orte abseits der Touristenpfade",
    excerpt:
      "Deutschland ist landschaftlich vielfältiger als sein Ruf. Wir zeigen die schönsten, noch unbekannten Naturlandschaften – für alle die echte Stille suchen.",
    date: "9. Juni 2026",
    isoDate: "2026-06-09",
    category: "Natur",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "waldbaden-shinrin-yoku",
    title: "Waldbaden: Was der japanische Trend Shinrin-Yoku wirklich bringt",
    excerpt:
      "Einfach durch den Wald gehen – klingt banal. Doch Shinrin-Yoku ist durch Studien belegt und beruhigt das Nervensystem nachweislich. Was steckt wirklich dahinter?",
    date: "5. Juni 2026",
    isoDate: "2026-06-05",
    category: "Natur & Gesundheit",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "klassische-immobilie-oder-alternative-wohnform-2026",
    title: "Klassische Immobilie oder alternative Wohnform – was lohnt sich 2026 wirklich?",
    excerpt:
      "Ein ehrlicher Vergleich aus Maklersicht: Eigentumswohnung und Einfamilienhaus vs. Tiny House und Co. – was lohnt sich 2026 wirklich?",
    date: "2. Juni 2026",
    isoDate: "2026-06-02",
    category: "Immobilien",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "van-life-mobiles-wohnen",
    title: "Van Life: Wohnen auf Rädern – Freiheit oder Illusion?",
    excerpt:
      "Ein ausgebauter Kastenwagen, kein fester Wohnsitz – Van Life hat Hunderttausende inspiriert. Was steckt wirklich hinter dem Lebensstil, der auf Instagram so verlockend aussieht?",
    date: "2. Juni 2026",
    isoDate: "2026-06-02",
    category: "Wohnen",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "tiny-house-steuern-sparen",
    title: "Tiny House & Steuern: So sparst du als Vermieter legal",
    excerpt:
      "Wer ein Tiny House vermietet, kann erhebliche Steuervorteile nutzen – von der Abschreibung bis zur Betriebskosten-Absetzung. Was wirklich möglich ist und worauf du achten musst.",
    date: "5. Juni 2026",
    isoDate: "2026-06-05",
    category: "Finanzen",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "tiny-house-kosten-bauen",
    title: "Tiny House selbst bauen: Was kostet das wirklich?",
    excerpt:
      "50.000 Euro für ein Tiny House klingt günstig – doch sobald Grundstück, Genehmigung und Anschlüsse dazukommen, sieht die Rechnung anders aus. Ein nüchterner Blick auf die tatsächlichen Kosten.",
    date: "29. Mai 2026",
    isoDate: "2026-05-29",
    category: "Wohnen",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "frugal-living-sparen-alltag",
    title: "Frugal Living: Wie weniger Ausgaben mehr Lebensqualität bringt",
    excerpt:
      "Frugal Living wird oft mit Geiz verwechselt. Dabei geht es um etwas anderes: Ausgaben bewusst steuern, damit Geld und Zeit dorthin fließen, wo sie wirklich etwas bewirken.",
    date: "26. Mai 2026",
    isoDate: "2026-05-26",
    category: "Finanzen",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "tiny-houses-als-kapitalanlage",
    title: "Tiny Houses als Kapitalanlage: Warum Mini-Häuser große Renditen versprechen",
    excerpt:
      "Das Konzept des Tiny House hat sich vom Nischentrend zur ernsthaften Anlageklasse entwickelt. Wir zeigen, warum immer mehr Investoren auf Mini-Häuser setzen und was dabei zu beachten ist.",
    date: "24. Mai 2026",
    isoDate: "2026-05-24",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "nachhaltiger-lebensstil-2026",
    title: "Nachhaltiger Lebensstil 2026: Wie kleine Veränderungen große Wirkung erzielen",
    excerpt:
      "Nachhaltigkeit ist kein Trend mehr, sondern eine Haltung. Welche konkreten Schritte im Alltag wirklich etwas bewirken – und welche nur das Gewissen beruhigen.",
    date: "18. Mai 2026",
    isoDate: "2026-05-18",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "minimalismus-im-alltag",
    title: "Minimalismus im Alltag: Weniger besitzen, mehr erleben",
    excerpt:
      "Wer anfängt, Dinge loszulassen, entdeckt oft mehr Raum – nicht nur in der Wohnung, sondern auch im Kopf. Ein praktischer Einstieg in den minimalistischen Lebensstil.",
    date: "10. Mai 2026",
    isoDate: "2026-05-10",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop",
  },
];
