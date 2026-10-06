"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const inputCls =
  "glass-input w-full min-h-[50px] px-4 text-[15px] placeholder:text-faint";
const labelCls =
  "block font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-label mb-2";

/**
 * Enquiry / fault-report form — CLIENT island submitting to Web3Forms.
 * Needs NEXT_PUBLIC_WEB3FORMS_KEY (see .env.example). Get a free key at
 * https://web3forms.com and add it to .env.local + Netlify env vars.
 */
export function LeadForm({
  topics,
  cta = "Send Enquiry",
  done = "Asante — received. We'll call you back shortly.",
  idPrefix = "lead",
}: {
  topics: string[];
  cta?: string;
  done?: string;
  idPrefix?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `BNC website: ${data.get("topic")} — ${data.get("name")}`,
          from_name: "BNC Brancom Website",
          name: data.get("name"),
          phone: data.get("phone"),
          topic: data.get("topic"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {/* honeypot */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelCls}>
            Full name
          </label>
          <input id={`${idPrefix}-name`} name="name" required placeholder="Your name" className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelCls}>
            Phone
          </label>
          <input id={`${idPrefix}-phone`} name="phone" required placeholder="0712 000 000" className={inputCls} autoComplete="tel" inputMode="tel" />
        </div>
      </div>
      <div className="mt-3.5">
        <label htmlFor={`${idPrefix}-topic`} className={labelCls}>
          I need
        </label>
        <select id={`${idPrefix}-topic`} name="topic" className={inputCls}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="mt-3.5">
        <label htmlFor={`${idPrefix}-msg`} className={labelCls}>
          Message
        </label>
        <textarea id={`${idPrefix}-msg`} name="message" rows={4} placeholder="Location + what you need…" className={inputCls} />
      </div>
      <div className="mt-4">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : cta}
        </Button>
      </div>
      {status === "sent" ? (
        <p role="status" tabIndex={-1} className="mt-3 font-mono text-[13px] text-brand">
          {done}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-3 font-mono text-[13px] text-red-600">
          Couldn&apos;t send right now — please WhatsApp us on 0112240649 instead.
        </p>
      ) : null}
    </form>
  );
}
