import Pill from "./Pill";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-16 text-center">
        <p className="font-mono text-xs tracking-widest text-emerald-800">LET'S TALK</p>
        <h2 className="mx-auto mt-4 max-w-xl text-4xl font-bold leading-tight">
          Open to full-stack developer roles.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Pill href={`mailto:${profile.email}`} variant="solid">{profile.email}</Pill>
          <Pill href={profile.links.linkedin}>LinkedIn</Pill>
          <Pill href={profile.links.github}>GitHub</Pill>
          <a href={profile.links.resume} download="my-resume.pdf" className="rounded-full bg-amber-100 px-5 py-3 text-sm font-medium text-stone-800">
  Download resume
</a>
        </div>
      </div>
      <p className="mt-8 font-mono text-xs text-stone-500">
        © 2026 {profile.name}. Built with React and Tailwind CSS.
      </p>
    </section>
  );
}
