import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Minimalismus im Alltag – Alltag mal anders",
  description:
    "Wer anfängt, Dinge loszulassen, entdeckt oft mehr Raum – nicht nur in der Wohnung, sondern auch im Kopf.",
};

const linkClass = "font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors";

export default function MinimalismusImAlltag() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Lifestyle
        </span>
        <span className="text-xs text-zinc-300">·</span>
        <time className="text-xs text-zinc-400">10. Mai 2026</time>
      </div>

      <div className="relative w-full h-72 sm:h-96 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80&auto=format&fit=crop"
          alt="Minimalistisches modernes Wohnzimmer"
          fill
          className="object-cover"
          preload
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        Minimalismus im Alltag: Weniger besitzen, mehr erleben
      </h1>

      <p className="text-lg text-zinc-500 leading-relaxed mb-10 border-l-4 border-zinc-200 pl-4">
        Wer anfängt, Dinge loszulassen, entdeckt oft mehr Raum – nicht nur in
        der Wohnung, sondern auch im Kopf. Ein praktischer Einstieg in den
        minimalistischen Lebensstil.
      </p>

      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <p>
          <a href="https://de.wikipedia.org/wiki/Minimalismus_(Lebensstil)" className={linkClass} target="_blank" rel="noopener noreferrer">
            Minimalismus
          </a>{" "}
          ist in den letzten Jahren zu einem viel diskutierten Konzept
          geworden. Doch hinter dem Begriff verbergen sich oft sehr
          unterschiedliche Vorstellungen: Für die einen bedeutet er weiße
          Wände, leere Regale und ein Leben aus dem Rucksack. Für andere ist
          es schlicht die Entscheidung, bewusster mit dem zu sein, was man
          besitzt und kauft. Beide Ansätze können das Alltagsleben positiv
          verändern.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Warum wir so viel besitzen
        </h2>
        <p>
          Das Streben nach mehr ist tief in unserer Konsumgesellschaft verankert.
          Werbung, soziale Medien und das Verhalten unseres Umfelds suggerieren
          uns ständig, dass wir etwas brauchen, das wir noch nicht haben.
          Psychologische Studien zeigen, dass Menschen dazu neigen, den
          zukünftigen Nutzen von Dingen zu überschätzen. Wir kaufen das
          Fitnessgerät in der Erwartung, es täglich zu nutzen – und es steht
          nach drei Wochen unbenutzt in der Ecke.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Der erste Schritt: Entrümpeln mit System
        </h2>
        <p>
          Wer mit dem Minimalismus beginnen möchte, fängt am besten nicht
          damit an, sich strenge Regeln aufzuerlegen. Viel wirkungsvoller ist
          es, einen konkreten Bereich zu wählen – zum Beispiel die Küche oder
          den Kleiderschrank – und dort systematisch zu sortieren. Eine einfache
          Frage hilft dabei: „Habe ich diesen Gegenstand in den letzten zwölf
          Monaten genutzt?" Wenn die Antwort Nein ist, hat das Objekt vermutlich
          keinen Platz mehr im Leben.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Minimalismus und Immobilien: Kleiner wohnen, mehr sparen
        </h2>
        <p>
          Eine der spürbarsten Auswirkungen des Minimalismus zeigt sich in der
          eigenen Wohnung. Wer Gegenstände reduziert, gewinnt subjektiv mehr
          Raum – auch ohne umzuziehen. Doch viele Menschen, die Minimalismus
          ernsthaft praktizieren, ziehen einen weiteren Schluss: Wenn ich
          weniger besitze, brauche ich auch weniger Platz. Laut{" "}
          <a href="https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/_inhalt.html" className={linkClass} target="_blank" rel="noopener noreferrer">
            Statistischem Bundesamt
          </a>{" "}
          zahlen deutsche Haushalte im Schnitt rund 27 Prozent ihres
          verfügbaren Einkommens für Wohnen – Tendenz steigend. Wer auf 20 statt
          50 Quadratmeter kommt, halbiert nicht nur die Miete, sondern auch
          den ökologischen Fußabdruck seiner Wohnsituation.
        </p>
        <p>
          Kein Wunder also, dass Minimalismus und das Interesse an alternativen
          Wohnformen wie Tiny Houses, Co-Living oder Hausbooten Hand in Hand
          gehen. Wer gelernt hat, mit weniger auszukommen, eröffnet sich
          gleichzeitig neue Möglichkeiten für flexiblere, günstigere oder
          ungewöhnlichere Wohnformen – und damit auch für eine andere Art von
          Immobilienentscheidung.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Minimalismus als Haltung, nicht als Ideal
        </h2>
        <p>
          Minimalismus scheitert dann, wenn er zum neuen Perfektionismus wird.
          Es geht nicht darum, einem Bild zu entsprechen, das Instagram oder
          Lifestyle-Blogs vorgeben. Es geht darum, das eigene Leben ein wenig
          leichter zu machen – Schritt für Schritt, in einem eigenen Tempo.
          Mehr Infos zur psychologischen Seite des Konsumverhaltens bietet die{" "}
          <a href="https://www.bpb.de/themen/wirtschaft/wirtschaftspolitik/305274/konsum-und-nachhaltigkeit/" className={linkClass} target="_blank" rel="noopener noreferrer">
            Bundeszentrale für politische Bildung
          </a>
          .
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
