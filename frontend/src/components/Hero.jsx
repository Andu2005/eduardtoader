import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowDown } from "lucide-react";

const VISUAL = "/eduard-toader.webp";

const line = {
  hidden: { y: "115%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.13 },
  }),
};

export default function Hero({ t, onNav }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden px-6 pt-36 sm:px-12 sm:pt-40 lg:px-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[#D4AF37]/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-[#14B8A6]/10 blur-[140px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-16 pb-20 lg:grid-cols-12">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37]/90"
            data-testid="hero-overline"
          >
            {t.overline}
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-slate-50 sm:text-7xl lg:text-[5.5rem]"
          >
            {t.lines.map((l, i) => (
              <span key={l} className="block overflow-hidden pb-1">
                <motion.span
                  custom={i}
                  variants={line}
                  initial="hidden"
                  animate="visible"
                  className={`block ${i === 1 ? "italic text-[#D4AF37]" : ""}`}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            data-testid="hero-subheadline"
          >
            {t.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onNav("#experience")}
              data-testid="hero-primary-cta"
              className="group flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B132B] transition-colors duration-300 hover:bg-[#e6c65c]"
            >
              {t.primaryCta}
              <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <button
              onClick={() => onNav("#contact")}
              data-testid="hero-secondary-cta"
              className="border border-white/20 px-7 py-3.5 text-sm font-medium text-slate-200 transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              {t.secondaryCta}
            </button>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: portraitY }} className="relative lg:col-span-5">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative ml-auto aspect-[4/5] max-w-md"
          >
            <div aria-hidden="true" className="absolute -inset-3 border border-[#D4AF37]/40" />
            <div
              aria-hidden="true"
              className="absolute -top-10 left-1/2 h-56 w-[130%] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[90px]"
            />
            <img
              src={VISUAL}
              alt={t.portraitAlt}
              data-testid="hero-executive-portrait"
              className="h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 flex w-full items-center gap-3 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF37]/70 bg-[#0B132B]/80 font-serif text-base font-semibold text-[#D4AF37] backdrop-blur-sm">
                ET
              </span>
              <div>
                <p className="font-serif text-lg leading-tight text-slate-50">Eduard Toader</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/90">{t.visualCaption}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-t border-white/10 py-10 sm:grid-cols-3"
        data-testid="hero-stats"
      >
        {t.stats.map((s) => (
          <div key={s.label} className="flex items-baseline gap-4">
            <span className="font-serif text-4xl font-semibold text-[#D4AF37] sm:text-5xl">{s.value}</span>
            <span className="max-w-[10rem] font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{s.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mx-auto flex max-w-7xl items-center gap-3 pb-10 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500"
      >
        <ArrowDown size={14} className="animate-bounce" />
        {t.scroll}
      </motion.div>
    </section>
  );
}
