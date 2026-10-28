import Pill from "./Pill";
import { profile } from "../data";

const navLinks = ["Training", "Education", "Projects", "Stack", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200/70 bg-[#fbf8f1]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-wide">{profile.name.toUpperCase()}</a>

        <ul className="hidden gap-8 font-mono text-sm text-stone-600 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-emerald-800">{link}</a>
            </li>
          ))}
        </ul>

        <div className="hidden gap-2 lg:flex">
          <Pill href={`mailto:${profile.email}`} variant="green">Say hi</Pill>
          <Pill href={profile.links.linkedin}>LinkedIn</Pill>
          <Pill href={profile.links.github}>GitHub</Pill>
        </div>
      </nav>
    </header>
  );
}
