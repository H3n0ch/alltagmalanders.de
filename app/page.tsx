import Link from "next/link";

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
  },
  {
    slug: "waldbaden-shinrin-yoku",
    title: "Waldbaden: Was der japanische Trend Shinrin-Yoku wirklich bringt",
    excerpt:
      "Einfach durch den Wald gehen – klingt banal. Doch Shinrin-Yoku ist durch Studien belegt und beruhigt das Nervensystem nachweislich. Was steckt wirklich dahinter?",
    date: "5. Juni 2026",
    category: "Natur & Gesundheit",
  },
  {
    slug: "van-life-mobiles-wohnen",
    title: "Van Life: Wohnen auf Rädern – Freiheit oder Illusion?",
    excerpt:
      "Ein ausgebauter Kastenwagen, kein fester Wohnsitz – Van Life hat Hunderttausende inspiriert. Was steckt wirklich hinter dem Lebensstil, der auf Instagram so verlockend aussieht?",
    date: "2. Juni 2026",
    category: "Wohnen",
  },
  {
    slug: "tiny-house-kosten-bauen",
    title: "Tiny House selbst bauen: Was kostet das wirklich?",
    excerpt:
      "50.000 Euro für ein Tiny House klingt günstig – doch sobald Grundstück, Genehmigung und Anschlüsse dazukommen, sieht die Rechnung anders aus. Ein nüchterner Blick auf die tatsächlichen Kosten.",
    date: "29. Mai 2026",
    category: "Wohnen",
  },
  {
    slug: "frugal-living-sparen-alltag",
    title: "Frugal Living: Wie weniger Ausgaben mehr Lebensqualität bringt",
    excerpt:
      "Frugal Living wird oft mit Geiz verwechselt. Dabei geht es um etwas anderes: Ausgaben bewusst steuern, damit Geld und Zeit dorthin fließen, wo sie wirklich etwas bewirken.",
    date: "26. Mai 2026",
    category: "Finanzen",
  },
  {
    slug: "tiny-houses-als-kapitalanlage",
    title: "Tiny Houses als Kapitalanlage: Warum Mini-Häuser große Renditen versprechen",
    excerpt:
      "Das Konzept des Tiny House hat sich vom Nischentrend zur ernsthaften Anlageklasse entwickelt. Wir zeigen, warum immer mehr Investoren auf Mini-Häuser setzen und was dabei zu beachten ist.",
    date: "24. Mai 2026",
    category: "Investment",
  },
  {
    slug: "nachhaltiger-lebensstil-2026",
    title: "Nachhaltiger Lebensstil 2026: Wie kleine Veränderungen große Wirkung erzielen",
    excerpt:
      "Nachhaltigkeit ist kein Trend mehr, sondern eine Haltung. Welche konkreten Schritte im Alltag wirklich etwas bewirken – und welche nur das Gewissen beruhigen.",
    date: "18. Mai 2026",
    category: "Lifestyle",
  },
  {
    slug: "minimalismus-im-alltag",
    title: "Minimalismus im Alltag: Weniger besitzen, mehr erleben",
    excerpt:
      "Wer anfängt, Dinge loszulassen, entdeckt oft mehr Raum – nicht nur in der Wohnung, sondern auch im Kopf. Ein praktischer Einstieg in den minimalistischen Lebensstil.",
    date: "10. Mai 2026",
    category: "Lifestyle",
  },
];

const [featured, ...rest] = articles;

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Hero */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
          Wohnen, Leben und Investieren –{" "}
          <span className="text-green-700">neu gedacht</span>
        </h1>
        <p className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed">
          Alltag mal anders begleitet Menschen, die ihr Leben bewusst gestalten
          wollen: Natur, alternative Wohnformen und smarte Entscheidungen.
        </p>
      </div>

      {/* Featured article */}
      <Link
        href={`/${featured.slug}`}
        className="group block bg-white rounded-2xl border border-stone-200 p-8 mb-10 hover:border-green-300 hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              categoryStyles[featured.category] ?? "bg-stone-100 text-stone-600"
            }`}
          >
            {featured.category}
          </span>
          <span className="text-xs text-stone-400">{featured.date}</span>
          <span className="ml-auto text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
            Aktuell
          </span>
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-3 leading-snug group-hover:text-green-800 transition-colors">
          {featured.title}
        </h2>
        <p className="text-stone-500 leading-relaxed mb-4">{featured.excerpt}</p>
        <span className="text-sm font-semibold text-green-700 group-hover:underline">
          Artikel lesen →
        </span>
      </Link>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {rest.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-green-300 hover:shadow-sm transition-all flex flex-col"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  categoryStyles[article.category] ?? "bg-stone-100 text-stone-600"
                }`}
              >
                {article.category}
              </span>
              <span className="text-xs text-stone-400">{article.date}</span>
            </div>
            <h2 className="text-base font-bold text-stone-900 mb-2 leading-snug group-hover:text-green-800 transition-colors flex-1">
              {article.title}
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed line-clamp-3 mb-4">
              {article.excerpt}
            </p>
            <span className="text-xs font-semibold text-green-700 group-hover:underline mt-auto">
              Weiterlesen →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
