import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hausboote als Wohnform: Leben auf dem Wasser – Alltag mal anders",
  description:
    "Hausboote sind mehr als Romantik – sie sind eine ernsthafte Alternative zum klassischen Wohnen. Was kostet es wirklich, auf dem Wasser zu leben?",
};

const linkClass = "font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors";

export default function HausbooteAlsWohnform() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Wohnen
        </span>
        <span className="text-xs text-zinc-300">·</span>
        <time className="text-xs text-zinc-400">12. Juni 2026</time>
      </div>

      <div className="relative w-full h-72 sm:h-96 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80&auto=format&fit=crop"
          alt="Hausboote auf einem Kanal"
          fill
          className="object-cover"
          preload
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        Hausboote als Wohnform: Leben auf dem Wasser
      </h1>

      <p className="text-lg text-zinc-500 leading-relaxed mb-10 border-l-4 border-zinc-200 pl-4">
        Hausboote wirken auf den ersten Blick wie eine romantische Spinnerei.
        Doch für eine wachsende Zahl von Menschen sind sie eine ernsthafte,
        bezahlbare Alternative zum klassischen Immobilienmarkt – mit echten
        Vor- und Nachteilen.
      </p>

      <div className="prose-zinc space-y-6 text-zinc-700 leading-relaxed">
        <p>
          In Amsterdam wohnen über 2.500 Menschen dauerhaft auf{" "}
          <a href="https://de.wikipedia.org/wiki/Hausboot" className={linkClass} target="_blank" rel="noopener noreferrer">
            Hausbooten
          </a>
          . In Berlin, Hamburg und Düsseldorf wächst die Szene ebenfalls –
          angetrieben von einem Wohnungsmarkt, der für viele schlicht nicht
          mehr erschwinglich ist. Ein Hausboot bietet, was viele suchen:
          Naturverbundenheit, Individualität und eine deutlich günstigere
          Einstiegsschwelle als eine vergleichbare Stadtwohnung.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Was ein Hausboot kostet
        </h2>
        <p>
          Gebrauchte Hausboote sind ab etwa 30.000 Euro zu haben – für ein
          einfaches, bewohnbares Gefährt auf einem festen Liegeplatz. Neubauten
          oder ausgebaute Designboote können 150.000 Euro und mehr kosten.
          Entscheidend ist dabei meist nicht das Boot selbst, sondern der
          Liegeplatz: Stegmieten in deutschen Städten liegen je nach Lage
          zwischen 200 und 600 Euro im Monat – deutlich unter vergleichbaren
          Mieten für Wohnungen an ähnlichen Standorten.
        </p>
        <p>
          Hinzu kommen Kosten für Strom-, Wasser- und Abwasseranschluss sowie
          eine spezielle Hausboot-Versicherung. Laut{" "}
          <a href="https://www.verbraucherzentrale.de" className={linkClass} target="_blank" rel="noopener noreferrer">
            Verbraucherzentrale
          </a>{" "}
          sollten Kaufinteressenten außerdem auf den technischen Zustand des
          Rumpfs achten – Wartungskosten werden von Einsteigern häufig
          unterschätzt.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Rechtliche Grundlagen in Deutschland
        </h2>
        <p>
          Hausboote bewegen sich in Deutschland in einer rechtlichen Grauzone.
          Je nachdem, ob das Boot als Fahrzeug zugelassen oder fest vertäut
          und an Land angeschlossen ist, gelten unterschiedliche Vorschriften.
          Dauerhaftes Wohnen auf einem Hausboot erfordert in vielen Kommunen
          eine Sondergenehmigung – und nicht jeder Liegeplatz ist für
          Wohnzwecke ausgewiesen. Eine Abfrage beim zuständigen Wasser- und
          Schifffahrtsamt sowie beim Baurechtsamt der Gemeinde ist deshalb
          vor dem Kauf Pflicht.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Das Leben an Bord – Alltag und Einschränkungen
        </h2>
        <p>
          Wer auf einem Hausboot lebt, wählt einen anderen Rhythmus. Der Blick
          aufs Wasser am Morgen, die Stille im Winter, das Schaukeln bei Wind –
          das sind Erfahrungen, die kein Stadtapartment bieten kann. Gleichzeitig
          sind die Wohnflächen in der Regel kleiner, Stauraum ist begrenzt, und
          technische Defekte sind komplexer zu beheben als in einem Festgebäude.
        </p>
        <p>
          Für Familien mit Kindern oder Menschen mit Mobilitätseinschränkungen
          ist das Leben auf dem Wasser oft weniger praktikabel. Für Paare,
          Alleinlebende und alle, die Wert auf eine ungewöhnliche Wohnumgebung
          legen, kann es eine der stimmigsten Alternativen zum konventionellen
          Immobilienmarkt sein.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Hausboote als Kapitalanlage
        </h2>
        <p>
          Auch als Ferienvermietung sind gut positionierte Hausboote attraktiv.
          Plattformen wie Airbnb verzeichnen steigende Nachfrage nach
          ungewöhnlichen Unterkünften – und ein Hausboot in einer deutschen
          Wasserstadt oder an einem Naturgewässer kann hohe Auslastungsraten
          erzielen. Der{" "}
          <a href="https://www.destatis.de/DE/Themen/Wirtschaft/Preise/Baupreise-Immobilienpreisindex/_inhalt.html" className={linkClass} target="_blank" rel="noopener noreferrer">
            Immobilienpreisindex des Statistischen Bundesamts
          </a>{" "}
          zeigt, dass unkonventionelle Wohnformen zunehmend an Wert gewinnen,
          während der klassische Markt stagniert.
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
