import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE, WA } from "@/lib/site";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";

/** Sticky white nav — server component; only nav state + hamburger are client islands. */
export function SiteHeader() {
  return (
    <>
      <div className="bg-navy text-[#C9E6F7] text-[13px]">
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between gap-4 py-2">
          <p className="flex items-center gap-4">
            <span>Kenya</span>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-cyan" />
            <a href={`mailto:${SITE.email}`} className="text-[#E7F5FD] hover:text-white hover:underline">
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="hidden sm:inline text-[#E7F5FD] hover:text-white hover:underline">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="flex items-center gap-4">
            <Link href="/support" className="text-[#E7F5FD] hover:text-white hover:underline">
              Support
            </Link>
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-white/70 shadow-[0_8px_30px_-18px_rgba(30,120,170,0.25)]">
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between gap-5 h-[78px]">
          <Link href="/" className="flex items-center gap-3" aria-label="BNC Brancom home">
            <Image
              src="/bnclogo.png"
              alt="BNC Brancom"
              width={610}
              height={409}
              priority
              className="h-12 sm:h-14 w-auto rounded-md"
            />
            <span className="hidden md:block font-mono font-medium text-[10.5px] tracking-[0.24em] text-brand leading-relaxed">
              YOUR DIGITAL
              <br />
              BRIDGE
            </span>
          </Link>
          <NavLinks />
          <div className="flex items-center gap-3">
            <Button href={WA.general} size="sm">
              Get Connected
            </Button>
            <MobileMenu links={[...NAV_LINKS, { label: "Coverage", href: "/coverage" }]} />
          </div>
        </div>
      </header>
    </>
  );
}
