const variants = {
  solid: "bg-emerald-800 text-white hover:bg-emerald-900",
  green: "bg-emerald-100 text-emerald-900 hover:bg-emerald-200",
  amber: "bg-amber-100 text-amber-900 hover:bg-amber-200",
  plain: "bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-100",
};

// A rounded link button. Props: href, variant, children.
export default function Pill({ href = "#", variant = "plain", children }) {
  return (
    <a
      href={href}
      className={`rounded-full px-5 py-2.5 font-mono text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
