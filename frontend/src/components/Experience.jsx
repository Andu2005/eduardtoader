import Reveal from "@/components/Reveal";
import { Check } from "lucide-react";

export default function Experience({ t }) {
  return (
    <section id="experience" className="bg-[#101a38] px-6 py-24 sm:px-12 sm:py-32 lg:px-20" data-testid="experience-section">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37]/90">02 — {t.label}</p>
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-slate-50 sm:text-4xl">{t.heading}</h2>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{t.note}</p>
        </Reveal>

        <div className="relative mt-16 border-l border-white/10 pl-8 sm:pl-12" data-testid="experience-timeline-container">
          {t.roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.08} className="relative pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full border border-[#D4AF37] bg-[#0B132B] sm:-left-[53px]"
              />
              <div className="group border border-white/10 bg-[#1C2541]/50 p-7 transition-colors duration-500 hover:border-[#D4AF37]/40 hover:bg-[#1C2541]/90 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl font-medium text-slate-50">{role.title}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{role.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{role.company}</p>
                <ul className="mt-6 space-y-3">
                  {role.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                      <Check size={15} className="mt-0.5 shrink-0 text-[#14B8A6]" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
