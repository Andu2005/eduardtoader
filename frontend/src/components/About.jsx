import Reveal from "@/components/Reveal";

const IMAGE =
  "https://images.unsplash.com/photo-1748063578185-3d68121b11ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjByZWFsJTIwZXN0YXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzkwNTkwMzA1fDA&ixlib=rb-4.1.0&q=85";

export default function About({ t }) {
  return (
    <section id="about" className="px-6 py-24 sm:px-12 sm:py-32 lg:px-20" data-testid="about-section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37]/90">01 — {t.label}</p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-slate-50 sm:text-4xl">{t.heading}</h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={IMAGE} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div aria-hidden="true" className="absolute inset-0 border border-white/10" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate-300">{t.p1}</p>
            <p className="mt-6 text-base leading-relaxed text-slate-400">{t.p2}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3" data-testid="about-pillars">
            {t.pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.1} className="bg-[#0B132B] p-6">
                <p className="font-serif text-xl text-[#D4AF37]">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
