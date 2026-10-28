import Pill from "./Pill";
import StackCard from "./StackCard";
import { profile, stackCards } from "../data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <p className="font-mono text-xs tracking-widest text-rose-700">{profile.role}</p>
        <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">{profile.tagline}</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Pill href="#projects" variant="solid">View projects</Pill>
          <a href={profile.links.resume} download="my-resume.pdf" className="rounded-full bg-amber-100 px-5 py-3 text-sm font-medium text-stone-800">
                 Download resume
</a>
          <Pill href={profile.links.linkedin}>LinkedIn</Pill>
          <Pill href={profile.links.github}>GitHub</Pill>
        </div>
      </div>

      <div className="space-y-3">
        {stackCards.map((card) => (
          <StackCard key={card.label} {...card} inline />
        ))}
      </div>
    </section>
  );
}
