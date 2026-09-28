import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { translations } from "@/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Competencies from "@/components/Competencies";
import Contact from "@/components/Contact";

function App() {
  const [lang, setLang] = useState("en");
  const lenisRef = useRef(null);
  const t = translations[lang];

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -70, duration: 1.4 });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] font-sans text-slate-100 antialiased selection:bg-[#D4AF37] selection:text-[#0B132B]">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar t={t.nav} lang={lang} setLang={setLang} onNav={scrollTo} />
      <main>
        <Hero t={t.hero} onNav={scrollTo} />
        <Marquee items={t.marquee} />
        <About t={t.about} />
        <Experience t={t.experience} />
        <Competencies t={t.competencies} />
        <Contact t={t.contact} footer={t.footer} lang={lang} />
      </main>
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}

export default App;
