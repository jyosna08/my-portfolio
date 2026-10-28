import Section from "./Section";
import { training } from "../data";

export default function Training() {
  return (
    <Section id="training" label="WHAT I'VE LEARNED" title="Training" dot="blue">
      <div className="space-y-4">
        {training.map((t) => (
          <article key={t.title} className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-6 md:grid-cols-[200px_1fr]">
            <div>
              <p className="font-semibold">{t.org}</p>
              <p className="mt-1 font-mono text-xs text-stone-500">{t.period}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sky-800">{t.title}</h3>
              <p className="mt-2 text-stone-600">{t.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
