export default function Marquee({ items }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#101a38] py-5" data-testid="editorial-marquee">
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center font-mono text-xs uppercase tracking-[0.35em] text-slate-400"
          >
            <span className="px-8">{item}</span>
            <span className="text-[#D4AF37]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
