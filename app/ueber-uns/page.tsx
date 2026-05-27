import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns – Alltag mal anders",
  description:
    "Alltag mal anders ist ein deutsches Lifestyle-Magazin über alternatives Wohnen, Nachhaltigkeit und bewusstes Leben. Wer wir sind und worum es uns geht.",
};

export default function UeberUns() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-6">Über uns</h1>

      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <p>
          Alltag mal anders ist ein unabhängiges deutsches Magazin für Menschen,
          die ihr Leben bewusst gestalten wollen. Wir schreiben über
          alternative Wohnformen, nachhaltigen Lebensstil, Natur und smarte
          Entscheidungen – abseits vom Mainstream.
        </p>

        <p>
          Die Seite entstand aus einer einfachen Beobachtung: Viele Menschen
          merken, dass das klassische Lebensmodell – große Wohnung, volles
          Haus, endlose Konsumliste – sie nicht glücklicher macht. Sie suchen
          nach echten Alternativen. Genau dafür sind wir da.
        </p>

        <p>
          Unsere Themen reichen von Tiny Houses und Van Life über Minimalismus
          und Frugal Living bis hin zu Naturerlebnissen und nachhaltigem Alltag.
          Wir schreiben nicht für Klicks, sondern für Menschen die wirklich etwas
          verändern wollen.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Zusammenarbeit & Gastbeiträge
        </h2>
        <p>
          Du schreibst zu Themen wie nachhaltiges Wohnen, alternative
          Lebensformen, Natur, Minimalismus oder bewusster Konsum? Wir freuen
          uns über Gastbeiträge die zu unserem Magazin passen. Schreib uns eine
          kurze Anfrage mit Themenvorschlag – wir melden uns zeitnah.
        </p>
        <p>
          Kontakt:{" "}
          <a
            href="mailto:redaktion@alltagmalanders.de"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors"
          >
            redaktion@alltagmalanders.de
          </a>
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
