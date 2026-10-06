"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site";

/** Active-state nav links — tiny client island inside the server header. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="hidden lg:flex gap-1">
      {NAV_LINKS.map((l) => {
        const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "rounded-full bg-navy/90 backdrop-blur-md text-white border border-white/40 font-bold text-[14.5px] px-3.5 py-2.5 shadow-[0_8px_20px_-10px_rgba(11,35,64,0.5)]"
                : "glass-tile rounded-full font-bold text-[14.5px] px-3.5 py-2.5"
            }
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
