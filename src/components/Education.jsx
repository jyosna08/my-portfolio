import Section from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education" label="WHERE I'VE STUDIED" title="Education" dot="green">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <article key={e.school} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="font-semibold">{e.school}</h3>
            <p className="mt-1 text-sm text-stone-600">{e.degree}</p>
            <p className="mt-3 font-mono text-xs text-stone-500">{e.period}</p>
            <p className="mt-2 text-sm text-stone-600">CGPA: {e.cgpa}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
