import Section from "./Section";
import { projects } from "../data";

// Small child component: one project card.
function ProjectCard({ name, year, status, featured, tags, desc }) {
  const style = featured ? "border-emerald-200 bg-emerald-50" : "border-stone-200 bg-white";
  return (
    <article className={`rounded-2xl border p-6 ${style}`}>
      <div className="flex items-center justify-between font-mono text-xs text-stone-500">
        <span>{featured ? "FEATURED" : "PROJECT"}</span>
        <span>{year}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">{name}</h3>
      <p className="mt-2 font-mono text-xs text-emerald-800">{tags.join("  ·  ")}</p>
      <p className="mt-3 leading-relaxed text-stone-600">{desc}</p>
      <p className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 font-mono text-xs text-amber-900">{status}</p>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" label="WHAT I'VE BUILT" title="Projects" dot="violet">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </Section>
  );
}
