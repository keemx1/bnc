import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/** Light glass footer — server component. */
export function SiteFooter() {
  return (
    <footer className="bg-white/60 backdrop-blur-xl border-t border-white/70 mt-[88px]">
      <div className="mx-auto max-w-[1200px] px-6 grid gap-9 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="BNC Brancom home" className="inline-block">
            <Image src="/bnclogo.jpeg" alt="BNC Brancom" width={1165} height={782} className="h-14 w-auto" />
          </Link>
          <p className="font-mono text-[11px] tracking-[0.24em] text-brand mt-3 mb-4">
            YOUR DIGITAL BRIDGE
          </p>
          <p className="text-muted text-[14.5px] max-w-[34ch]">
            Fast. Stable. Unlimited. Internet for homes, businesses and networks across Kenya.
          </p>
          <p className="font-mono text-navy text-[13px] mt-3.5">
            <a href={`mailto:${SITE.email}`} className="hover:text-brand">
              {SITE.email}
            </a>
            <br />
            <a href={SITE.phoneHref} className="hover:text-brand">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
        <nav aria-label="Services">
          <h2 className="font-mono text-[11px] tracking-[0.22em] text-brand mb-4">SERVICES</h2>
          {[
            ["Home Internet", "/home-internet"],
            ["Business Internet", "/business-internet"],
            ["Wholesale Bandwidth", "/wholesale-bandwidth"],
            ["CCTV & Security", "/cctv-security"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="block text-muted text-[14.5px] py-[5px] hover:text-navy">
              {label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Company">
          <h2 className="font-mono text-[11px] tracking-[0.22em] text-brand mb-4">COMPANY</h2>
          {[
            ["About", "/about"],
            ["Coverage", "/coverage"],
            ["Contact", "/contact"],
            ["Support", "/support"],
            ["Blog", "/blog"],
            ["FAQ", "/faq"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="block text-muted text-[14.5px] py-[5px] hover:text-navy">
              {label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Customer">
          <h2 className="font-mono text-[11px] tracking-[0.22em] text-brand mb-4">CUSTOMER</h2>
          {[
            ["Report a Problem", "/support"],
            ["Network Status", "/support"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="block text-muted text-[14.5px] py-[5px] hover:text-navy">
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-[rgba(70,160,200,0.25)]">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-wrap justify-between gap-3 font-mono text-[13px] text-faint">
          <span>© {new Date().getFullYear()} BNC Brancom • Nairobi, Kenya</span>
          <span>FAST • STABLE • UNLIMITED</span>
        </div>
      </div>
    </footer>
  );
}
