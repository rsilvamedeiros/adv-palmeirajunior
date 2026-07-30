"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { LogoLockup } from "@/components/brand/logo-lockup";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/areas", label: "Áreas de Atuação" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-marfim">
      <div className="mx-auto flex max-w-[var(--container-page)] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Página inicial">
          <LogoLockup markClassName="h-8 w-8" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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
