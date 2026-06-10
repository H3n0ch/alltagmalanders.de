import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";

const categoryStyles: Record<string, string> = {
  Natur: "bg-green-100 text-green-800",
  "Natur & Gesundheit": "bg-emerald-100 text-emerald-800",
  Wohnen: "bg-sky-100 text-sky-800",
  Lifestyle: "bg-violet-100 text-violet-800",
  Finanzen: "bg-amber-100 text-amber-800",
  Investment: "bg-orange-100 text-orange-800",
  Immobilien: "bg-rose-100 text-rose-800",
};

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
