import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/krm-content";

const pages = [
  { to: "/rental", label: "التأجير" },
  { to: "/services", label: "الخدمات" },
  { to: "/gallery", label: "المعرض" },
  { to: "/contact", label: "التواصل" },
] as const;

export function KrmShell({ children }: { children: ReactNode }) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen bg-mist font-sans text-ink antialiased selection:bg-accent/15"
    >
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-frost/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link to="/" aria-label="KRM للتأجير — الرئيسية" className="flex items-center gap-3">
            <img
              src={logo}
              alt="شعار KRM للتأجير"
              width={40}
              height={40}
              className="size-10 rounded-xl ring-1 ring-line"
            />
            <div className="leading-tight">
              <p className="text-sm font-bold">KRM للتأجير</p>
              <p className="text-[11px] text-ink-soft">الرياض · مرسيدس فقط</p>
            </div>
          </Link>
          <nav
            aria-label="التنقل الرئيسي"
            className="order-last flex w-full items-center justify-between gap-3 text-sm text-ink-soft md:order-none md:w-auto md:gap-8"
          >
            {pages.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-accent font-semibold" }}
                className="py-2 transition-colors hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-frost ring-1 ring-ink/5 transition-colors hover:bg-accent/90"
          >
            حجز فوري
          </a>
        </div>
      </header>

      <main className="min-h-[60vh]">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink-soft sm:flex-row">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="شعار KRM للتأجير"
              width={28}
              height={28}
              loading="lazy"
              className="size-7"
            />
            <p>© 2026 KRM للتأجير — الرياض</p>
          </div>
          <p className="font-latin tracking-tight">KRM Rentals · Riyadh · Mercedes Only</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-6 left-6 z-50 grid size-14 place-items-center rounded-full bg-wa text-frost shadow-lg ring-1 ring-ink/10 transition-transform hover:-translate-y-1"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
