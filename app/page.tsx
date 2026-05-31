import Link from "next/link";
import Image from "next/image";

const categoryStyles: Record<string, string> = {
  Natur: "bg-green-100 text-green-800",
  "Natur & Gesundheit": "bg-emerald-100 text-emerald-800",
  Wohnen: "bg-sky-100 text-sky-800",
  Lifestyle: "bg-violet-100 text-violet-800",
  Finanzen: "bg-amber-100 text-amber-800",
  Investment: "bg-orange-100 text-orange-800",
};

const articles = [
  {
    slug: "naturlandschaften-deutschland",
    title: "Naturlandschaften Deutschland: Die schönsten Orte abseits der Touristenpfade",
    excerpt:
      "Deutschland ist landschaftlich vielfältiger als sein Ruf. Wir zeigen die schönsten, noch unbekannten Naturlandschaften – für alle die echte Stille suchen.",
    date: "9. Juni 2026",
    category: "Natur",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "waldbaden-shinrin-yoku",
    title: "Waldbaden: Was der japanische Trend Shinrin-Yoku wirklich bringt",
    excerpt:
      "Einfach durch den Wald gehen – klingt banal. Doch Shinrin-Yoku ist durch Studien belegt und beruhigt das Nervensystem nachweislich. Was steckt wirklich dahinter?",
    date: "5. Juni 2026",
    category: "Natur & Gesundheit",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "van-life-mobiles-wohnen",
    title: "Van Life: Wohnen auf Rädern – Freiheit oder Illusion?",
    excerpt:
      "Ein ausgebauter Kastenwagen, kein fester Wohnsitz – Van Life hat Hunderttausende inspiriert. Was steckt wirklich hinter dem Lebensstil, der auf Instagram so verlockend aussieht?",
    date: "2. Juni 2026",
    category: "Wohnen",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "tiny-house-kosten-bauen",
    title: "Tiny House selbst bauen: Was kostet das wirklich?",
    excerpt:
      "50.000 Euro für ein Tiny House klingt günstig – doch sobald Grundstück, Genehmigung und Anschlüsse dazukommen, sieht die Rechnung anders aus. Ein nüchterner Blick auf die tatsächlichen Kosten.",
    date: "29. Mai 2026",
    category: "Wohnen",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "frugal-living-sparen-alltag",
    title: "Frugal Living: Wie weniger Ausgaben mehr Lebensqualität bringt",
    excerpt:
      "Frugal Living wird oft mit Geiz verwechselt. Dabei geht es um etwas anderes: Ausgaben bewusst steuern, damit Geld und Zeit dorthin fließen, wo sie wirklich etwas bewirken.",
    date: "26. Mai 2026",
    category: "Finanzen",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "tiny-houses-als-kapitalanlage",
    title: "Tiny Houses als Kapitalanlage: Warum Mini-Häuser große Renditen versprechen",
    excerpt:
      "Das Konzept des Tiny House hat sich vom Nischentrend zur ernsthaften Anlageklasse entwickelt. Wir zeigen, warum immer mehr Investoren auf Mini-Häuser setzen und was dabei zu beachten ist.",
    date: "24. Mai 2026",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "nachhaltiger-lebensstil-2026",
    title: "Nachhaltiger Lebensstil 2026: Wie kleine Veränderungen große Wirkung erzielen",
    excerpt:
      "Nachhaltigkeit ist kein Trend mehr, sondern eine Haltung. Welche konkreten Schritte im Alltag wirklich etwas bewirken – und welche nur das Gewissen beruhigen.",
    date: "18. Mai 2026",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    slug: "minimalismus-im-alltag",
    title: "Minimalismus im Alltag: Weniger besitzen, mehr erleben",
    excerpt:
      "Wer anfängt, Dinge loszulassen, entdeckt oft mehr Raum – nicht nur in der Wohnung, sondern auch im Kopf. Ein praktischer Einstieg in den minimalistischen Lebensstil.",
    date: "10. Mai 2026",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop",
  },
];

const [featured, ...rest] = articles;

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Hero */}
      <div className="mb-14 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">
          Der Blog für alternative Immobilien
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
          Wohnen neu denken –{" "}
          <span className="text-green-700">jenseits des Mainstreams</span>
        </h1>
        <p className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed">
          Tiny Houses, Van Life, Minimalismus und clevere Investments: Wir zeigen,
          wie alternatives Wohnen heute aussieht – ehrlich, praktisch und inspirierend.
        </p>
      </div>

      {/* Featured article */}
      <Link
        href={`/${featured.slug}`}
        className="group block bg-white rounded-2xl border border-stone-200 overflow-hidden mb-10 hover:border-green-300 hover:shadow-lg transition-all"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            preload
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                categoryStyles[featured.category] ?? "bg-stone-100 text-stone-600"
              }`}
            >
              {featured.category}
            </span>
            <span className="text-xs font-medium text-white bg-green-700/80 px-2 py-0.5 rounded-full backdrop-blur-sm">
              Aktuell
            </span>
          </div>
        </div>
        <div className="p-7">
          <p className="text-xs text-stone-400 mb-2">{featured.date}</p>
          <h2 className="text-2xl font-bold text-stone-900 mb-3 leading-snug group-hover:text-green-800 transition-colors">
            {featured.title}
          </h2>
          <p className="text-stone-500 leading-relaxed mb-4">{featured.excerpt}</p>
          <span className="text-sm font-semibold text-green-700 group-hover:underline">
            Artikel lesen →
          </span>
        </div>
      </Link>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rest.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-green-300 hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    categoryStyles[article.category] ?? "bg-stone-100 text-stone-600"
                  }`}
                >
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs text-stone-400 mb-2">{article.date}</p>
              <h2 className="text-base font-bold text-stone-900 mb-2 leading-snug group-hover:text-green-800 transition-colors flex-1">
                {article.title}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <span className="text-xs font-semibold text-green-700 group-hover:underline mt-auto">
                Weiterlesen →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
