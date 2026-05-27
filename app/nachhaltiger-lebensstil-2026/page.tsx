import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nachhaltiger Lebensstil 2026 – Alltag mal anders",
  description:
    "Nachhaltigkeit ist kein Trend mehr, sondern eine Haltung. Welche konkreten Schritte im Alltag wirklich etwas bewirken.",
};

export default function NachhaltigerLebensstil() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Lifestyle
        </span>
        <span className="text-xs text-zinc-300">·</span>
        <time className="text-xs text-zinc-400">18. Mai 2026</time>
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        Nachhaltiger Lebensstil 2026: Wie kleine Veränderungen große Wirkung
        erzielen
      </h1>

      <p className="text-lg text-zinc-500 leading-relaxed mb-10 border-l-4 border-zinc-200 pl-4">
        Nachhaltigkeit ist kein Trend mehr, sondern eine Haltung. Welche
        konkreten Schritte im Alltag wirklich etwas bewirken – und welche nur
        das Gewissen beruhigen.
      </p>

      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Wer heute über einen nachhaltigen Lebensstil spricht, meint damit
          selten den Umstieg auf ein Leben im Selbstversorger-Haus ohne Strom
          und Internet. Gemeint ist vielmehr ein bewusster Umgang mit Ressourcen
          im Alltag – Entscheidungen, die summiert einen echten Unterschied
          machen, ohne das Leben komplett auf den Kopf zu stellen.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Die größten Hebel im Alltag
        </h2>
        <p>
          Nicht jede nachhaltige Maßnahme ist gleich wirkungsvoll. Studien
          zeigen immer wieder, dass bestimmte Entscheidungen den persönlichen
          CO₂-Fußabdruck weit stärker reduzieren als andere. An erster Stelle
          steht das Thema Mobilität: Wer ein Mal pro Woche auf das Auto
          verzichtet und stattdessen das Fahrrad oder den öffentlichen
          Nahverkehr nutzt, spart über das Jahr gerechnet mehr ein als durch
          konsequentes Vermeiden von Plastiktüten.
        </p>
        <p>
          An zweiter Stelle folgt die Ernährung. Eine Reduktion des Fleischkonsums
          – auch ohne vollständige Veganisierung – hat messbare Auswirkungen auf
          den Ressourcenverbrauch. Das bedeutet nicht, dass man aufhören muss,
          gelegentlich Fleisch zu essen. Aber wer statt sieben Fleischmahlzeiten
          pro Woche auf drei oder vier kommt, macht bereits einen bedeutenden
          Unterschied.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Zuhause: Wo sich nachhaltige Entscheidungen lohnen
        </h2>
        <p>
          Im eigenen Zuhause bietet vor allem die Energie einen großen Hebel.
          Wer auf einen Ökostromtarif wechselt, handelt in wenigen Minuten –
          und reduziert seinen Beitrag zur fossilen Energieerzeugung dauerhaft.
          Ähnlich verhält es sich mit der Heizung: Das Absenken der
          Raumtemperatur um ein bis zwei Grad spart im Jahr spürbar Heizenergie
          und Kosten.
        </p>
        <p>
          Beim Konsum lohnt es sich, vor jedem Kauf zu fragen: Brauche ich das
          wirklich, und wenn ja – gibt es eine gebrauchte Alternative? Plattformen
          für Secondhand-Käufe haben sich in den letzten Jahren stark
          professionalisiert. Ob Kleidung, Elektronik oder Möbel – vieles lässt
          sich heute gebraucht in sehr gutem Zustand finden.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Nachhaltigkeit und Alltag in Einklang bringen
        </h2>
        <p>
          Der häufigste Fehler beim Versuch, nachhaltiger zu leben, ist
          Perfektionismus. Wer sich vornimmt, von heute auf morgen alles zu
          ändern, scheitert meist schnell und kehrt zu alten Gewohnheiten zurück.
          Nachhaltiger ist – im wörtlichen Sinne – ein schrittweiser Ansatz:
          eine Gewohnheit nach der anderen, mit realistischen Zielen.
        </p>
        <p>
          2026 bietet dafür mehr Unterstützung als je zuvor. Digitale Tools
          helfen beim Tracken des eigenen Verbrauchs, nachhaltige Produkte sind
          in der Breite angekommen, und das gesellschaftliche Bewusstsein ist
          gewachsen. Nachhaltiger zu leben bedeutet heute nicht mehr Verzicht –
          sondern eine bewusstere Form zu wählen, wie man die Dinge des Alltags
          gestaltet.
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
