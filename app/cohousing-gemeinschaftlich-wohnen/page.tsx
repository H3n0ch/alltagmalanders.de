import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cohousing: Warum Gemeinschaft günstiger wohnen lässt – Alltag mal anders",
  description:
    "Cohousing verbindet privates Wohnen mit gemeinschaftlicher Infrastruktur – und kann die Wohnkosten erheblich senken. Ein Überblick über das Modell.",
};

const linkClass = "font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors";

export default function CohousingSemeinschaftlichWohnen() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Wohnen
        </span>
        <span className="text-xs text-zinc-300">·</span>
        <time className="text-xs text-zinc-400">15. Juni 2026</time>
      </div>

      <div className="relative w-full h-72 sm:h-96 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop"
          alt="Menschen in einem modernen Gemeinschaftsraum"
          fill
          className="object-cover"
          preload
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        Cohousing: Warum Gemeinschaft günstiger wohnen lässt
      </h1>

      <p className="text-lg text-zinc-500 leading-relaxed mb-10 border-l-4 border-zinc-200 pl-4">
        Cohousing ist mehr als eine WG für Erwachsene. Es ist ein
        Immobilienmodell, das private Rückzugsräume mit geteilter
        Infrastruktur verbindet – und damit Wohnkosten senkt, die sonst
        niemand alleine stemmen könnte.
      </p>

      <div className="prose-zinc space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Der Begriff{" "}
          <a href="https://de.wikipedia.org/wiki/Cohousing" className={linkClass} target="_blank" rel="noopener noreferrer">
            Cohousing
          </a>{" "}
          stammt aus Dänemark, wo das Modell in den 1960er Jahren entwickelt
          wurde. Heute ist es in Nordeuropa, den USA und zunehmend auch in
          Deutschland verbreitet. Das Grundprinzip: Jeder Haushalt hat seine
          eigene abgeschlossene Wohneinheit – aber Küche, Werkstatt, Garten,
          Gästezimmer und manchmal sogar Autos werden geteilt. Das spart
          Fläche, Kosten und schafft nebenbei soziale Verbindungen, die in
          anonymen Großstädten selten geworden sind.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Das Modell im Detail
        </h2>
        <p>
          Ein typisches Cohousing-Projekt besteht aus 10 bis 30 Privatwohnungen
          sowie einem Gemeinschaftshaus mit großer Küche, Essbereich und
          Aufenthaltsräumen. Die Bewohner entscheiden gemeinsam über Regeln,
          Investitionen und den Alltag des Projekts – in der Regel per
          Konsensverfahren. Wer nicht kochen möchte, kann an Gemeinschafts-
          mahlzeiten teilnehmen; wer Abstand braucht, zieht sich in die eigene
          Wohnung zurück.
        </p>
        <p>
          Die Kostenersparnis entsteht auf mehreren Ebenen: geteilte Geräte
          (Waschmaschine, Rasenmäher, Werkzeuge), geteilte Infrastruktur
          (Gästezimmer statt Eigennutzung) und oft günstigere Grundstückspreise
          durch gemeinschaftlichen Erwerb. Das{" "}
          <a href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/themen/wohnraumfoerderung/gemeinschaftliches-wohnen/gemeinschaftliches-wohnen-node.html" className={linkClass} target="_blank" rel="noopener noreferrer">
            Bundesministerium für Wohnen
          </a>{" "}
          fördert inzwischen Pilotprojekte für gemeinschaftliches Wohnen im
          Rahmen der sozialen Wohnraumförderung.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Wo es in Deutschland funktioniert
        </h2>
        <p>
          In Städten wie Freiburg, Tübingen und Berlin gibt es etablierte
          Cohousing-Projekte mit langen Wartelisten. Das Freiburger Vauban-Viertel
          gilt als europäisches Vorzeigeprojekt für nachhaltiges, gemeinschaftliches
          Wohnen. Das{" "}
          <a href="https://www.wohnprojekte-portal.de" className={linkClass} target="_blank" rel="noopener noreferrer">
            Wohnprojekte-Portal
          </a>{" "}
          listet aktuelle Projekte in ganz Deutschland und ermöglicht Interessierten
          die Kontaktaufnahme mit bestehenden Gruppen.
        </p>
        <p>
          Laut{" "}
          <a href="https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/_inhalt.html" className={linkClass} target="_blank" rel="noopener noreferrer">
            Statistischem Bundesamt
          </a>{" "}
          steigt der Anteil von Einpersonenhaushalten in Deutschland seit Jahren
          kontinuierlich – und damit auch der Bedarf an flexiblen, sozialen
          Wohnformen, die Isolation vermeiden ohne Privatheit aufzugeben.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Cohousing als Immobilieninvestment
        </h2>
        <p>
          Wer in ein Cohousing-Projekt einsteigt, erwirbt in der Regel eine
          klassische Eigentumseinheit – mit dem Unterschied, dass das Projekt
          als Ganzes durch die Gemeinschaft besser gepflegt wird und eine höhere
          soziale Stabilität aufweist als anonyme Eigentümergemeinschaften.
          Studien aus Dänemark zeigen, dass Cohousing-Projekte im Vergleich
          zu konventionellen Wohnanlagen langfristig höhere Zufriedenheitswerte
          und niedrigere Leerstandsquoten aufweisen.
        </p>
        <p>
          Für Investoren, die in das Modell einsteigen möchten, ohne selbst
          darin zu wohnen, gibt es zunehmend professionelle Trägerorganisationen,
          die Cohousing-Projekte entwickeln und verwalten.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Für wen ist es geeignet?
        </h2>
        <p>
          Cohousing ist nichts für Menschen, die maximale Autonomie und
          Anonymität suchen. Es erfordert Kompromissbereitschaft, die Fähigkeit
          zur Konfliktlösung und die Bereitschaft, Verantwortung für das
          Gemeinschaftsleben zu übernehmen. Für alle, die das mitbringen, bietet
          es eine Wohnform, die günstiger, sozialer und nachhaltiger ist als
          das klassische Eigenheim – und in einer Zeit steigender Mieten und
          wachsender Vereinsamung zunehmend attraktiv wird.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-100">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
