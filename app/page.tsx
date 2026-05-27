import Link from "next/link";

const articles = [
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

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-zinc-900 mb-3">
          Wohnen, Leben und Investieren – neu gedacht
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed">
          Alltag mal anders begleitet Menschen, die ihr Leben bewusst gestalten
          wollen: alternative Wohnformen, nachhaltiger Lebensstil und smarte
          Entscheidungen für die Zukunft.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-zinc-100">
        {articles.map((article) => (
          <article key={article.slug} className="py-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                {article.category}
              </span>
              <span className="text-xs text-zinc-300">·</span>
              <time className="text-xs text-zinc-400">{article.date}</time>
            </div>
            <h2 className="text-xl font-semibold text-zinc-900 mb-2 leading-snug">
              <Link
                href={`/${article.slug}`}
                className="hover:text-zinc-600 transition-colors"
              >
                {article.title}
              </Link>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-4">{article.excerpt}</p>
            <Link
              href={`/${article.slug}`}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Weiterlesen →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
