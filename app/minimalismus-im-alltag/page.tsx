import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minimalismus im Alltag – Alltag mal anders",
  description:
    "Wer anfängt, Dinge loszulassen, entdeckt oft mehr Raum – nicht nur in der Wohnung, sondern auch im Kopf.",
};

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
          Minimalismus ist in den letzten Jahren zu einem viel diskutierten
          Konzept geworden. Doch hinter dem Begriff verbergen sich oft sehr
          unterschiedliche Vorstellungen: Für die einen bedeutet er weiße Wände,
          leere Regale und ein Leben aus dem Rucksack. Für andere ist es
          schlicht die Entscheidung, bewusster mit dem zu sein, was man besitzt
          und kauft. Beide Ansätze haben ihre Berechtigung – und beide können
          das Alltagsleben positiv verändern.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Warum wir so viel besitzen
        </h2>
        <p>
          Das Streben nach mehr ist tief in unserer Konsumgesellschaft verankert.
          Werbung, soziale Medien und das Verhalten unseres Umfelds suggerieren
          uns ständig, dass wir etwas brauchen, das wir noch nicht haben. Das
          Ergebnis: überfüllte Wohnungen, volle Kleiderschränke und eine diffuse
          Unzufriedenheit, die durch den nächsten Kauf nie wirklich verschwindet.
        </p>
        <p>
          Psychologische Studien zeigen, dass Menschen dazu neigen, den zukünftigen
          Nutzen von Dingen zu überschätzen. Wir kaufen das Fitnessgerät in der
          Erwartung, es täglich zu nutzen – und es steht nach drei Wochen
          unbenutzt in der Ecke. Minimalismus bedeutet nicht, asketisch zu
          leben, sondern diesen Mechanismus zu erkennen und bewusster dagegen
          anzugehen.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Der erste Schritt: Entrümpeln mit System
        </h2>
        <p>
          Wer mit dem Minimalismus beginnen möchte, fängt am besten nicht damit
          an, sich strenge Regeln aufzuerlegen. Viel wirkungsvoller ist es, einen
          konkreten Bereich zu wählen – zum Beispiel die Küche oder den Kleiderschrank –
          und dort systematisch zu sortieren. Eine einfache Frage hilft dabei:
          „Habe ich diesen Gegenstand in den letzten zwölf Monaten genutzt?"
          Wenn die Antwort Nein ist, hat das Objekt vermutlich keinen Platz mehr
          im Leben.
        </p>
        <p>
          Wichtig ist dabei, Dinge nicht einfach in den Keller zu verlagern,
          sondern tatsächlich abzugeben – an Secondhand-Läden, Sozialkaufhäuser
          oder über Online-Plattformen. Das schafft nicht nur physisch Platz,
          sondern hinterlässt auch ein anderes Gefühl als das bloße Verstecken.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Minimalismus und Wohnen: Wie weniger mehr Raum schafft
        </h2>
        <p>
          Eine der spürbarsten Auswirkungen des Minimalismus zeigt sich in der
          eigenen Wohnung. Wer Gegenstände reduziert, gewinnt subjektiv mehr
          Raum – auch ohne umzuziehen. Räume wirken größer, übersichtlicher und
          ruhiger. Das hat Auswirkungen auf das Wohlbefinden: Unordnung und
          visuelle Reizüberflutung erzeugen nachweislich Stress, während
          aufgeräumte Umgebungen das Denken und Entspannen erleichtern.
        </p>
        <p>
          Kein Wunder also, dass Minimalismus und das Interesse an kleinen
          Wohnformen Hand in Hand gehen. Wer gelernt hat, mit weniger
          auszukommen, braucht auch weniger Platz – und eröffnet sich damit
          gleichzeitig neue Möglichkeiten für flexiblere, günstigere oder
          ungewöhnlichere Wohnformen.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900 mt-10">
          Minimalismus als Haltung, nicht als Ideal
        </h2>
        <p>
          Minimalismus scheitert dann, wenn er zum neuen Perfektionismus wird.
          Wenn man sich schlecht fühlt, weil man noch zu viele Bücher besitzt
          oder die Küche nicht „minimalistisch genug" aussieht, hat man das
          eigentliche Ziel verfehlt. Es geht nicht darum, einem Bild zu
          entsprechen, das Instagram oder Lifestyle-Blogs vorgeben. Es geht
          darum, das eigene Leben ein wenig leichter zu machen – Schritt für
          Schritt, in einem eigenen Tempo.
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
