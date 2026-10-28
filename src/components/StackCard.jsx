const tones = {
  green: "bg-emerald-50 border-emerald-200",
  blue: "bg-sky-50 border-sky-200",
  amber: "bg-amber-50 border-amber-200",
  violet: "bg-violet-50 border-violet-200",
};

// One coloured card: a label and a list of skills.
export default function StackCard({ label, tone, items, inline = false }) {
  return (
    <div className={`rounded-2xl border p-5 ${tones[tone]}`}>
      <p className="font-mono text-xs tracking-widest text-stone-500">{label}</p>
      {inline ? (
        <p className="mt-2 font-mono text-sm">{items.join("  ·  ")}</p>
      ) : (
        <ul className="mt-3 space-y-1.5 text-sm">
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}
