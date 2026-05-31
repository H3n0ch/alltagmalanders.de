import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Naturlandschaften Deutschland: Die schönsten Orte abseits der Touristenpfade – Alltag mal anders",
  description:
    "Deutschland hat mehr zu bieten als Bayern und die Nordseeküste. Wir zeigen die schönsten, noch unbekannten Naturlandschaften – für alle die echte Stille suchen.",
};

const linkClass = "font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors";

export default function NaturlandschaftenDeutschland() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Natur
        </span>
        <span className="text-xs text-zinc-300">·</span>
        <time className="text-xs text-zinc-400">9. Juni 2026</time>
      </div>

      <div className="relative w-full h-72 sm:h-96 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop"
          alt="Grüne Hügellandschaft in Deutschland"
          fill
          className="object-cover"
          preload
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        Naturlandschaften Deutschland: Die schönsten Orte abseits der Touristenpfade
      </h1>

      <p className="text-lg text-zinc-500 leading-relaxed mb-10 border-l-4 border-zinc-200 pl-4">
        Wer in Deutschland Natur erleben will, denkt zuerst an Zugspitze,
        Rügen oder den Schwarzwald. Dabei verstecken sich die wirklich
        eindrucksvollen Landschaften oft abseits der Reiseführer – man muss
        sie nur kennen.
      </p>

      <div className="prose-zinc space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Deutschland ist landschaftlich vielfältiger als sein Ruf. Zwischen
          dem flachen Norden und den Alpen im Süden liegen Moore, Flussauen,
          Mittelgebirge und Buchenwälder, die zu den ältesten Europas gehören.
          Das Problem: die bekanntesten Spots sind überlaufen. Wer wirklich
          Natur erleben will – Stille, Weite, unberührte Landschaft – muss ein
          bisschen tiefer suchen.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Die Mecklenburgische Seenplatte abseits der Hauptrouten
        </h2>
        <p>
          Die Mecklenburgische Seenplatte gilt als Kanu-Paradies – aber die
          meisten Paddler fahren dieselben Routen. Wer auf die kleinen
          Verbindungskanäle ausweicht, hat ganze Gewässer für sich allein.
          Schilfufer, Fischadler, Seeadler, und abends kein anderes Boot in
          Sichtweite. Im Frühling, wenn die Birken ausschlagen und das Wasser
          spiegelglatt ist, gibt es kaum ein schöneres Naturerlebnis in
          Mitteleuropa.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Das Biosphärenreservat Schorfheide-Chorin
        </h2>
        <p>
          Nur 80 Kilometer nördlich von Berlin liegt eine der größten
          Waldlandschaften Mitteleuropas – und die wenigsten Berliner kennen
          sie. Das Biosphärenreservat Schorfheide-Chorin umfasst über 120.000
          Hektar Wälder, Seen und Moore. Klosterruinen aus dem 13. Jahrhundert
          stehen zwischen alten Buchenwäldern, die zum{" "}
          <a href="https://www.bund.net/natur-landschaft/waelder/" className={linkClass} target="_blank" rel="noopener noreferrer">
            UNESCO-Weltnaturerbe
          </a>{" "}
          gehören. Kein Ski-Tourismus, kein Massenandrang. Nur Wald, Wasser
          und gelegentlich ein Elch.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Das Pfälzer Bergland im Herbst
        </h2>
        <p>
          Der{" "}
          <a href="https://de.wikipedia.org/wiki/Pf%C3%A4lzerwald" className={linkClass} target="_blank" rel="noopener noreferrer">
            Pfälzerwald
          </a>{" "}
          ist das größte zusammenhängende Waldgebiet Deutschlands – und im
          Herbst verwandelt er sich in ein Farbenmeer. Während der
          Rheintal-Tourismus die Weinstraße entlangzieht, wandern hier kaum
          Besucher durch das eigentliche Bergland. Sandsteinfelsen, Burgruinen
          und menschenleere Wege – wer einen langen Herbstsamstag für sich
          allein haben will, fährt nicht nach Heidelberg, sondern ins Pfälzer
          Bergland.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Das Elbsandsteingebirge jenseits der Bastei
        </h2>
        <p>
          Die Bastei kennt jeder. Aber die{" "}
          <a href="https://de.wikipedia.org/wiki/S%C3%A4chsische_Schweiz" className={linkClass} target="_blank" rel="noopener noreferrer">
            Sächsische Schweiz
          </a>{" "}
          ist viel größer als dieser eine Felsen. Wer ein bisschen tiefer in
          das Elbsandsteingebirge einsteigt – zu Fuß oder per Klettersteig –
          entdeckt Felslabyrinthе, enge Schluchten und Aussichtspunkte ohne
          Geländer und ohne Menschenmassen. Früh morgens, wenn der Morgennebel
          in den Tälern liegt, sieht diese Landschaft aus wie ein chinesisches
          Tuschegemälde.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Warum diese Orte so wertvoll sind – und was sie mit Wohnen zu tun haben
        </h2>
        <p>
          Echte Naturerlebnisse – fern vom Parkplatz-Tourismus – haben einen
          Effekt, den Stadturlaube nicht erzielen können. Studien zeigen, dass
          schon 20 Minuten in einer naturbelassenen Umgebung Cortisol senkt und
          die Konzentrationsfähigkeit steigert. Nicht als Wellness-Versprechen,
          sondern als messbare physiologische Reaktion.
        </p>
        <p>
          Wer diese Orte einmal kennt, versteht auch besser, warum immer mehr
          Menschen sich fragen: Warum wohne ich eigentlich in der Stadt? Laut{" "}
          <a href="https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/_inhalt.html" className={linkClass} target="_blank" rel="noopener noreferrer">
            Statistischem Bundesamt
          </a>{" "}
          sind die Mieten in deutschen Großstädten seit 2010 um über 60 Prozent
          gestiegen – während Lagen im ländlichen Raum und in Naturnähe oft
          noch erschwinglich sind. Alternative Wohnformen abseits der Ballungsräume
          sind nicht nur ein Lebensgefühl, sondern zunehmend auch eine
          ökonomische Entscheidung.
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
