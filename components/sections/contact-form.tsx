"use client";

import clsx from "clsx";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/lib/content/practice-areas";

const fieldBase =
  "w-full border-b bg-transparent py-3 font-sans text-sm outline-none transition-colors";

export function ContactForm({
  variant = "on-navy",
}: {
  variant?: "on-navy" | "on-light";
}) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const fieldClasses = clsx(
    fieldBase,
    variant === "on-navy"
      ? "border-marfim/25 text-marfim placeholder:text-marfim/40 focus:border-marfim"
      : "border-grafite/25 text-grafite placeholder:text-grafite/40 focus:border-navy",
  );
  const labelClasses = clsx(
    "font-sans text-xs font-semibold uppercase tracking-[0.1em]",
    variant === "on-navy" ? "text-marfim/55" : "text-grafite/55",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Validação e UI prontas; o envio real (POST /contact — docs/09-api.md)
    // entra quando o backend for conectado nesta próxima etapa.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div
        className={clsx(
          "border p-8",
          variant === "on-navy" ? "border-marfim/20" : "border-grafite/20",
        )}
      >
        <p className="font-serif text-lg font-semibold">Mensagem recebida.</p>
        <p
          className={clsx(
            "mt-2 text-sm leading-relaxed",
            variant === "on-navy" ? "text-marfim/70" : "text-grafite/70",
          )}
        >
          Vamos analisar sua mensagem e retornar em breve pelo e-mail ou
          telefone informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Nome
          </label>
          <input id="name" name="name" type="text" required className={clsx(fieldClasses, "mt-2")} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="phone">
            Telefone
          </label>
          <input id="phone" name="phone" type="tel" className={clsx(fieldClasses, "mt-2")} />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="email">
          E-mail
        </label>
        <input id="email" name="email" type="email" required className={clsx(fieldClasses, "mt-2")} />
      </div>

      <div>
        <label className={labelClasses} htmlFor="area">
          Área de interesse
        </label>
        <select id="area" name="area" defaultValue="" className={clsx(fieldClasses, "mt-2")}>
          <option value="" disabled>
            Selecione uma área
          </option>
          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={clsx(fieldClasses, "mt-2 resize-none")}
        />
      </div>

      <Button type="submit" variant="primary" className="self-start">
        Enviar mensagem
      </Button>
    </form>
  );
}
