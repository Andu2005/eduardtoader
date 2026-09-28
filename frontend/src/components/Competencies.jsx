import Reveal from "@/components/Reveal";
import { Compass, Sun, Building2, Handshake, ShieldCheck } from "lucide-react";

const REAL_ESTATE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjByZWFsJTIwZXN0YXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzkwNTkwMzA1fDA&ixlib=rb-4.1.0&q=85";
const SOLAR =
  "https://images.unsplash.com/photo-1768839727824-28d6f0dcd1d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHJlbmV3YWJsZSUyMGVuZXJneSUyMGZhcm18ZW58MHx8fHwxNzkwNTkwMzA1fDA&ixlib=rb-4.1.0&q=85";

const ICONS = [Compass, Sun, Building2, Handshake, ShieldCheck];
const IMAGES = [REAL_ESTATE, SOLAR, null, null, null];

export default function Competencies({ t }) {
  const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

  return (
    <section id="competencies" className="px-6 py-24 sm:px-12 sm:py-32 lg:px-20" data-testid="competencies-section">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37]/90">03 — {t.label}</p>
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-slate-50 sm:text-4xl">{t.heading}</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12" data-testid="core-competencies-bento">
          {t.cards.map((card, i) => {
            const Icon = ICONS[i];
            const img = IMAGES[i];
            return (
              <Reveal key={card.title} delay={i * 0.07} className={spans[i]}>
                <div className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden border border-white/10 bg-[#1C2541]/50 p-7 transition-colors duration-500 hover:border-[#D4AF37]/40">
                  {img && (
                    <>
                      <img
                        src={img}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
                      />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/70 to-[#0B132B]/20" />
                    </>
                  )}
                  <div className="relative">
                    <Icon size={26} className="mb-5 text-[#D4AF37]" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl font-medium text-slate-50 sm:text-2xl">{card.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">{t.tagsLabel}</p>
          <div className="flex flex-wrap gap-3" data-testid="skills-tags">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.15em] text-slate-300 transition-colors duration-300 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
