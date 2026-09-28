import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ t, lang, setLang, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "#about", label: t.about },
    { id: "#experience", label: t.experience },
    { id: "#competencies", label: t.competencies },
    { id: "#contact", label: t.contact },
  ];

  const go = (id) => {
    setOpen(false);
    onNav(id);
  };

  return (
    <header
      data-testid="sticky-navbar"
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "border-b border-white/10 bg-[#0B132B]/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12 lg:px-20">
        <button onClick={() => go("#top")} className="group flex items-center gap-3" data-testid="nav-logo">
          <span className="flex h-9 w-9 items-center justify-center border border-[#D4AF37]/60 font-serif text-lg font-semibold text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0B132B]">
            ET
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 sm:block">{t.brand}</span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id.slice(1)}`}
              className="text-sm text-slate-300 transition-colors duration-300 hover:text-[#D4AF37]"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center border border-white/15 font-mono text-[11px] uppercase tracking-widest" data-testid="language-toggle-button">
            {["en", "ro"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                data-testid={`lang-${l}`}
                className={`px-3 py-1.5 transition-colors duration-300 ${
                  lang === l ? "bg-[#D4AF37] text-[#0B132B]" : "text-slate-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => go("#contact")}
            data-testid="nav-contact-cta"
            className="hidden border border-[#D4AF37] px-5 py-2 text-sm font-medium text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B132B] sm:block"
          >
            {t.cta}
          </button>
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-button"
            className="text-slate-200 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-white/10 bg-[#0B132B]/95 backdrop-blur-xl lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  data-testid={`mobile-nav-link-${l.id.slice(1)}`}
                  className="py-3 text-left font-serif text-2xl text-slate-200 transition-colors hover:text-[#D4AF37]"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
