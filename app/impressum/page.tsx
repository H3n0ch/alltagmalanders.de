import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Alltag mal anders",
  description: "Impressum und Anbieterkennzeichnung von Alltag mal anders.",
};

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Impressum</h1>

      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Maximilian Schreiber<br />
            Gartenstraße 14<br />
            10115 Berlin<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">Kontakt</h2>
          <p>
            E-Mail: redaktion@alltagmalanders.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Maximilian Schreiber<br />
            Gartenstraße 14<br />
            10115 Berlin
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            Haftungsausschluss
          </h2>
          <h3 className="font-medium text-zinc-800 mb-1">Haftung für Inhalte</h3>
          <p className="mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich.
          </p>
          <h3 className="font-medium text-zinc-800 mb-1">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            Urheberrecht
          </h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
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
