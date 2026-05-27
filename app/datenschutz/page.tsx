import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – Alltag mal anders",
  description: "Datenschutzerklärung von Alltag mal anders.",
};

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-medium text-zinc-800 mb-1">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            2. Datenerfassung auf dieser Website
          </h2>
          <h3 className="font-medium text-zinc-800 mb-1">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
            Website entnehmen.
          </p>
          <h3 className="font-medium text-zinc-800 mb-1">
            Wie erfassen wir Ihre Daten?
          </h3>
          <p className="mb-4">
            Diese Website erhebt keine personenbezogenen Daten aktiv. Beim Besuch
            der Website können technisch bedingt Server-Logfiles entstehen, die
            Ihre IP-Adresse, den Zeitpunkt des Zugriffs und den aufgerufenen
            Seitenpfad enthalten. Diese Daten werden ausschließlich zur
            technischen Bereitstellung der Website verwendet und nicht mit anderen
            Datenquellen zusammengeführt.
          </p>
          <h3 className="font-medium text-zinc-800 mb-1">
            Wofür nutzen wir Ihre Daten?
          </h3>
          <p>
            Die Daten werden genutzt, um eine fehlerfreie Bereitstellung der
            Website zu gewährleisten. Es findet keine Weitergabe an Dritte statt.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            3. Hosting
          </h2>
          <p>
            Diese Website wird bei Netlify, Inc. gehostet. Anbieter ist Netlify,
            Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA. Details
            entnehmen Sie der Datenschutzerklärung von Netlify:{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-zinc-900 transition-colors"
            >
              https://www.netlify.com/privacy/
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            4. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem das Recht, die Berichtigung oder Löschung
            dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
            Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            5. Keine Cookies
          </h2>
          <p>
            Diese Website verwendet keine Cookies und setzt keine Tracking-
            oder Analyse-Tools ein. Es werden keine Daten an Werbeplattformen
            übermittelt.
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
