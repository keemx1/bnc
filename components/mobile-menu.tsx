"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WA } from "@/lib/site";

/** Hamburger menu — the header's only client island. */
export function MobileMenu({ links }: { links: readonly { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid place-items-center w-12 h-12 rounded-xl border-[1.5px] border-linestrong bg-white text-navy"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open ? (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-full bg-white/90 backdrop-blur-xl border-b border-white/70 px-6 pt-3 pb-5 shadow-[0_20px_45px_rgba(30,120,170,0.10)]"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-extrabold text-navy text-[17px] py-3.5 border-b border-line last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block font-extrabold text-brand text-[17px] py-3.5"
          >
            Get Connected →
          </a>
        </nav>
      ) : null}
    </div>
  );
}
