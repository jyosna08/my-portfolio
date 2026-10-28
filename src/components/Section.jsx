const dots = {
  green: "bg-emerald-500",
  blue: "bg-sky-500",
  amber: "bg-amber-500",
  violet: "bg-violet-500",
};

// Wrapper reused by every section: small label, big title, then the content (children).
export default function Section({ id, label, title, dot = "green", children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <p className="font-mono text-xs tracking-widest text-stone-500">{label}</p>
      <h2 className="mt-2 flex items-center gap-3 text-4xl font-bold">
        <span className={`h-2.5 w-2.5 rounded-full ${dots[dot]}`} />
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
