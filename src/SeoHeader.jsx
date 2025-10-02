export default function SeoHeader({ title, subtitle, hidden = false }) {
  const h1Class = hidden
    ? "sr-only"
    : "text-3xl md:text-4xl font-bold tracking-tight";
  return (
    <header className="mb-4">
      <h1 className={h1Class}>{title}</h1>
      {subtitle ? <p className="text-neutral-600 mt-1">{subtitle}</p> : null}
    </header>
  );
}
