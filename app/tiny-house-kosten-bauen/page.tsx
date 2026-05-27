import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiny House selbst bauen: Was kostet das wirklich? – Alltag mal anders",
  description:
    "Tiny House bauen klingt günstig – doch Grundstück, Genehmigung und Ausbau summieren sich schnell. Ein realistischer Blick auf die tatsächlichen Kosten.",
};

export default function TinyHouseKostenBauen() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Wohnen
        </span>
        <span className="text-xs text-zinc-300">·</span>
        <time className="text-xs text-zinc-400">29. Mai 2026</time>
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        Tiny House selbst bauen: Was kostet das wirklich?
      </h1>

      <p className="text-lg text-zinc-500 leading-relaxed mb-10 border-l-4 border-zinc-200 pl-4">
        50.000 Euro für ein Tiny House – das klingt erstmal günstig. Doch
        sobald Grundstück, Genehmigung und Anschlusskosten dazukommen, sieht
        die Rechnung oft ganz anders aus. Ein nüchterner Blick auf die
        tatsächlichen Kosten.
      </p>

      <div className="prose-zinc space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Tiny Houses gelten als erschwingliche Alternative zum klassischen
          Eigenheim. Und tatsächlich sind die reinen Baukosten überschaubar:
          Ein solide gebautes Tiny House auf Rädern kostet vom Hersteller
          zwischen 40.000 und 90.000 Euro – je nach Ausstattung, Material und
          Größe. Wer handwerklich begabt ist und Eigenleistung einbringt, kann
          deutlich darunter bleiben. Die eigentlichen Kostentreiber liegen
          jedoch woanders.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Der Faktor Grundstück
        </h2>
        <p>
          Ein Tiny House ohne Stellplatz ist wie ein Auto ohne Garage. Wer
          kein eigenes Grundstück hat, muss entweder mieten oder kaufen – und
          das in einer Region, in der Tiny Houses baurechtlich zulässig sind.
          Das schränkt die Auswahl erheblich ein. Campingplätze bieten eine
          günstige Übergangslösung, sind aber für dauerhaftes Wohnen oft nicht
          zugelassen. Manche Kommunen haben spezielle Tiny-House-Gebiete
          ausgewiesen, doch diese sind bundesweit noch die Ausnahme.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Genehmigung, Anschlüsse, Nebenkosten
        </h2>
        <p>
          Wer ein Tiny House dauerhaft bewohnen möchte, braucht in den meisten
          Bundesländern eine Baugenehmigung – und die ist alles andere als
          selbstverständlich. Verfahren dauern oft Monate, manche Anträge
          scheitern an Bebauungsplänen. Hinzu kommen Kosten für den Anschluss
          an Wasser, Abwasser und Strom: zwischen 3.000 und 15.000 Euro, je
          nach Lage und Entfernung zum nächsten Anschluss.
        </p>
        <p>
          Wer diese Hürden vermeiden will, kann auf spezialisierte Anbieter
          zurückgreifen, die fertig erschlossene Stellplätze oder
          schlüsselfertige Modelle anbieten. Plattformen wie{" "}
          <a
            href="https://tinyhouse.investments/wissen/iab-tiny-house"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors"
          >
            tinyhouse.investments
          </a>{" "}
          erklären detailliert, wie solche Modelle funktionieren und was
          Interessierte bei der Planung beachten sollten.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Realistische Gesamtkosten
        </h2>
        <p>
          Wer alle Posten zusammenzählt, landet schnell bei 100.000 bis
          150.000 Euro für ein legal nutzbares Tiny House auf eigenem
          Stellplatz – inklusive Grundstückskosten. Das ist weniger als eine
          Eigentumswohnung in einer deutschen Großstadt, aber weit entfernt
          von den romantisierten 30.000 Euro, die manche Blogs versprechen.
        </p>
        <p>
          Günstigere Lösungen sind möglich – sie erfordern jedoch mehr
          Eigenleistung, mehr Zeit und oft Kompromisse bei Lage oder Komfort.
          Wer sich vorab gut informiert und realistisch kalkuliert, kann mit
          einem Tiny House trotzdem deutlich günstiger wohnen als im
          konventionellen Eigenheim.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Selbst bauen oder kaufen?
        </h2>
        <p>
          Eigenleistung spart Geld – aber nur wenn das handwerkliche
          Know-how vorhanden ist. Ein schlecht isoliertes Tiny House kostet im
          Winter mehr Heizenergie, als die eingesparten Baukosten je
          kompensieren. Wer sich für den Eigenbau entscheidet, sollte zumindest
          kritische Gewerke wie Elektrik, Sanitär und Dämmung von Fachleuten
          ausführen lassen. Ein guter Mittelweg: das Rohgerüst kaufen,
          Innenausbau selbst machen.
        </p>
        <p>
          Unterm Strich gilt: Ein Tiny House ist eine ernsthafte Option für
          alle, die bewusster wohnen und Kosten sparen wollen. Aber es ist
          kein Selbstläufer. Wer sich intensiv damit beschäftigt, findet einen
          Weg – wer das Abenteuer unterschätzt, erlebt böse Überraschungen.
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
