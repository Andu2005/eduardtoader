import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact({ t, footer, lang }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", typeIndex: 0, message: "" });
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/inquiries`, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        inquiry_type: t.form.types[form.typeIndex],
        message: form.message,
        lang,
      });
      toast.success(t.toastSuccess);
      setForm({ name: "", email: "", phone: "", typeIndex: 0, message: "" });
    } catch {
      toast.error(t.toastError);
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full border border-white/15 bg-[#0B132B] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors duration-300 focus:border-[#D4AF37]";

  return (
    <section id="contact" className="bg-[#101a38] px-6 pb-0 pt-24 sm:px-12 sm:pt-32 lg:px-20" data-testid="contact-section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37]/90">04 — {t.label}</p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-slate-50 sm:text-5xl">{t.heading}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">{t.sub}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-[#D4AF37]" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{t.card.emailLabel}</p>
                <a href={`mailto:${t.card.email}`} data-testid="contact-email-link" className="text-sm text-slate-200 hover:text-[#D4AF37]">
                  {t.card.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-[#D4AF37]" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{t.card.phoneLabel}</p>
                <span className="text-sm text-slate-200">{t.card.phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-[#D4AF37]" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{t.card.locationLabel}</p>
                <span className="text-sm text-slate-200">{t.card.location}</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/eduard-toader-07b82912/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="linkedin-profile-link"
              className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-sm text-slate-200 transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <Linkedin size={17} />
              linkedin.com/in/eduard-toader
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={handleSubmit} data-testid="contact-inquiry-form" className="border border-white/10 bg-[#1C2541]/50 p-7 sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">{t.form.name}</label>
                <input required minLength={2} value={form.name} onChange={set("name")} data-testid="contact-name-input" className={inputCls} />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">{t.form.phone}</label>
                <input
                  required
                  type="tel"
                  minLength={5}
                  value={form.phone}
                  onChange={set("phone")}
                  data-testid="contact-phone-input"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">{t.form.email}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  data-testid="contact-email-input"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">{t.form.type}</label>
                <select
                  value={form.typeIndex}
                  onChange={set("typeIndex")}
                  data-testid="contact-type-select"
                  className={`${inputCls} appearance-none`}
                >
                  {t.form.types.map((type, i) => (
                    <option key={type} value={i} className="bg-[#0B132B]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">{t.form.message}</label>
                <textarea
                  required
                  minLength={10}
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  data-testid="contact-message-input"
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              data-testid="contact-submit-button"
              className="group mt-8 flex w-full items-center justify-center gap-3 bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-[#0B132B] transition-colors duration-300 hover:bg-[#e6c65c] disabled:opacity-60 sm:w-auto"
            >
              {sending ? t.form.sending : t.form.submit}
              <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>

      <footer className="mx-auto max-w-7xl border-t border-white/10 py-10" data-testid="site-footer">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-[#D4AF37]/60 font-serif text-sm font-semibold text-[#D4AF37]">
              ET
            </span>
            <span className="text-sm text-slate-400">{footer.tagline}</span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{footer.rights}</p>
        </div>
      </footer>
    </section>
  );
}
