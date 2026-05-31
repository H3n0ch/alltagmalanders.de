import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Van Life: Wohnen auf Rädern – Freiheit oder Illusion? – Alltag mal anders",
  description:
    "Van Life klingt nach Freiheit, Abenteuer und günstigem Wohnen. Was steckt wirklich dahinter – und was kostet das Leben im Kastenwagen wirklich?",
};

const linkClass = "font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors";

export default function VanLifeMobilesWohnen() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Wohnen
        </span>
        <span className="text-xs text-zinc-300">·</span>
        <time className="text-xs text-zinc-400">2. Juni 2026</time>
      </div>

      <div className="relative w-full h-72 sm:h-96 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80&auto=format&fit=crop"
          alt="Ausgebauter Campervan in der Natur"
          fill
          className="object-cover"
          preload
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        Van Life: Wohnen auf Rädern – Freiheit oder Illusion?
      </h1>

      <p className="text-lg text-zinc-500 leading-relaxed mb-10 border-l-4 border-zinc-200 pl-4">
        Ein ausgebauter Kastenwagen, ein Laptop, kein fester Wohnsitz – die
        Van-Life-Bewegung hat Hunderttausende Menschen inspiriert. Doch was
        steckt wirklich hinter dem Lebensstil, der auf Instagram so verlockend
        aussieht?
      </p>

      <div className="prose-zinc space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Van Life ist mehr als ein Trend. Für viele ist es ein bewusster Bruch
          mit dem gewohnten Konsummuster: keine Monatsmiete, keine festen
          Bindungen, kein überfüllter Kleiderschrank. Stattdessen: Flexibilität,
          Natur und das Gefühl, überall zu Hause sein zu können. Klingt gut –
          aber die Realität ist deutlich vielschichtiger.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Van Life als Antwort auf den Wohnungsmarkt
        </h2>
        <p>
          Dass Van Life zuletzt so stark gewachsen ist, hat auch strukturelle
          Gründe. In deutschen Großstädten ist der Mietmarkt seit Jahren
          angespannt: Laut{" "}
          <a href="https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/_inhalt.html" className={linkClass} target="_blank" rel="noopener noreferrer">
            Statistischem Bundesamt
          </a>{" "}
          geben Mieter in Städten wie München oder Frankfurt im Schnitt über
          30 Prozent ihres Nettoeinkommens für Wohnen aus. Der Van wird da für
          manche zur radikalen Gegenbewegung: kein Vermieter, keine
          Mieterhöhung, kein Wohnungsmarkt.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Was Van Life wirklich kostet
        </h2>
        <p>
          Ein gut ausgebauter Transporter – egal ob VW T6, Mercedes Sprinter
          oder Ford Transit – kostet als Rohling zwischen 15.000 und 40.000 Euro.
          Der Ausbau mit Bett, Küchenzeile, Solarpanel und Isolierung schlägt
          noch einmal mit 5.000 bis 20.000 Euro zu Buche, je nachdem, ob man
          selbst Hand anlegt oder professionelle Ausbauer beauftragt.
        </p>
        <p>
          Hinzu kommen laufende Kosten: Kraftstoff, Versicherung, Werkstatt
          und Campinggebühren summieren sich schnell auf 700 bis 1.200 Euro im
          Monat. Wer gleichzeitig noch eine Meldeadresse in Deutschland braucht –
          für Behördengänge, Krankenversicherung, Post – zahlt oft eine kleine
          Pauschale an Verwandte oder nutzt spezielle Domizildienstleister.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Die rechtliche Grauzone
        </h2>
        <p>
          In Deutschland ist wildes Campen auf öffentlichem Gelände grundsätzlich
          verboten. Wer mit dem Van in der Stadt oder am Waldrand übernachtet,
          riskiert Bußgelder. Viele Van-Lifer weichen deshalb auf offizielle
          Stellplätze aus oder nutzen Plattformen, die Privatgrundstücke
          vermitteln. In anderen europäischen Ländern – Spanien, Portugal,
          Skandinavien – sind die Regeln deutlich liberaler. Das{" "}
          <a href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/themen/stadtentwicklung/wohnen/wohnen-node.html" className={linkClass} target="_blank" rel="noopener noreferrer">
            Bundesministerium für Wohnen
          </a>{" "}
          diskutiert seit Jahren, wie alternative Wohnformen rechtlich
          besser abgesichert werden könnten – bisher ohne klare Lösung.
        </p>
        <p>
          Ähnlich wie beim Van Life suchen viele Menschen nach alternativen
          Wohnformen, die bezahlbar, flexibel und nachhaltig sind.{" "}
          <a href="https://de.wikipedia.org/wiki/Tiny_House" className={linkClass} target="_blank" rel="noopener noreferrer">
            Tiny Houses
          </a>{" "}
          bedienen denselben Wunsch – aber mit festem Fundament. Wer mehr über
          die verschiedenen Investitionsmodelle erfahren möchte, findet auf{" "}
          <a href="https://tinyhouse.investments" className={linkClass} target="_blank" rel="noopener noreferrer">
            tinyhouse.investments
          </a>{" "}
          einen Überblick über stationäre Alternativen zum klassischen Wohnen.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Wem Van Life wirklich passt
        </h2>
        <p>
          Van Life funktioniert am besten für Menschen, die ortsunabhängig
          arbeiten, keine schulpflichtigen Kinder haben und ein hohes Maß an
          Improvisationsfähigkeit mitbringen. Wer regelmäßig schlechtes Wetter,
          volle Campingplätze, technische Defekte und den Mangel an Privatsphäre
          romantisiert, wird früher oder später ernüchtert sein.
        </p>
        <p>
          Für viele ist Van Life deshalb eine Phase – eine Art Sabbatical auf
          Rädern – und kein dauerhafter Lebensentwurf. Nach einem oder zwei
          Jahren kehren die meisten zurück zu einer festen Unterkunft, oft mit
          einem veränderten Blick auf das, was sie wirklich brauchen.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Freiheit ist möglich – aber mit Plan
        </h2>
        <p>
          Van Life ist keine Illusion – aber auch kein Selbstläufer. Wer gut
          vorbereitet ist, ein solides Budget hat und realistische Erwartungen
          mitbringt, kann mit dem Leben auf Rädern echte Freiheit erleben.
          Entscheidend ist: nicht den Instagram-Bildern nachjagen, sondern den
          eigenen Alltag ehrlich hinterfragen. Was brauche ich wirklich? Wie
          viel Raum? Die Antwort darauf ist für jeden anders – und das ist gut so.
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
