"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { LogoLockup } from "@/components/brand/logo-lockup";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/lib/content/practice-areas";

const navItems = [
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-marfim">
      <div className="mx-auto flex max-w-[var(--container-page)] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Página inicial">
          <LogoLockup markClassName="h-8 w-8" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <Link
              href="/areas"
              className="flex items-center gap-1.5 font-sans text-sm font-medium text-marfim/80 transition-colors hover:text-marfim"
            >
              Áreas de Atuação
              <svg
                viewBox="0 0 10 6"
                className="h-[5px] w-[8px] fill-current opacity-60"
                aria-hidden="true"
              >
                <path d="M0 0 5 6 10 0Z" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border border-marfim/10 bg-navy-ink shadow-xl shadow-black/20">
                <ul className="py-2">
                  {practiceAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="block px-5 py-3 font-sans text-sm text-marfim/80 transition-colors hover:bg-marfim/5 hover:text-marfim"
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-marfim/10 px-5 py-3">
                  <Link
                    href="/areas"
                    className="font-sans text-xs font-semibold text-latao"
                  >
                    Ver todas as áreas →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-marfim/80 transition-colors hover:text-marfim"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          href="/contato"
          variant="primary"
          className="hidden px-5 py-2.5 text-xs md:inline-flex"
        >
          Agendar Consulta
        </Button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={clsx(
                "absolute left-0 top-0 h-px w-5 bg-marfim transition-transform duration-200",
                open && "top-[7px] rotate-45",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-[7px] h-px w-5 bg-marfim transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-[14px] h-px w-5 bg-marfim transition-transform duration-200",
                open && "top-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-marfim/10 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <div>
              <button
                type="button"
                onClick={() => setAreasOpen((v) => !v)}
                aria-expanded={areasOpen}
                className="flex w-full items-center justify-between py-2.5 font-sans text-sm font-medium text-marfim/85"
              >
                Áreas de Atuação
                <svg
                  viewBox="0 0 10 6"
                  className={clsx(
                    "h-[6px] w-[10px] fill-current opacity-60 transition-transform",
                    areasOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                >
                  <path d="M0 0 5 6 10 0Z" />
                </svg>
              </button>
              {areasOpen && (
                <div className="flex flex-col gap-0.5 border-l border-marfim/10 pb-2 pl-4">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      onClick={() => setOpen(false)}
                      className="py-2 font-sans text-sm text-marfim/70"
                    >
                      {area.name}
                    </Link>
                  ))}
                  <Link
                    href="/areas"
                    onClick={() => setOpen(false)}
                    className="py-2 font-sans text-sm font-semibold text-latao"
                  >
                    Ver todas as áreas →
                  </Link>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-sans text-sm font-medium text-marfim/85"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/contato"
              variant="primary"
              onClick={() => setOpen(false)}
              className="mt-3 justify-center text-xs"
            >
              Agendar Consulta
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
