import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

/* Self-hosted Manrope + JetBrains Mono (same pairing as staff.cloudsector.co.ke).
   Local files = zero third-party font requests, best Core Web Vitals. */
const manrope = localFont({
  src: [
    { path: "../public/fonts/manrope-400.woff2", weight: "400" },
    { path: "../public/fonts/manrope-500.woff2", weight: "500" },
    { path: "../public/fonts/manrope-600.woff2", weight: "600" },
    { path: "../public/fonts/manrope-700.woff2", weight: "700" },
    { path: "../public/fonts/manrope-800.woff2", weight: "800" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = localFont({
  src: [
    { path: "../public/fonts/jetbrains-mono-400.woff2", weight: "400" },
    { path: "../public/fonts/jetbrains-mono-500.woff2", weight: "500" },
    { path: "../public/fonts/jetbrains-mono-700.woff2", weight: "700" },
  ],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bnc.co.ke"),
  title: {
    default: "BNC Brancom — Fast. Stable. Unlimited. | Internet Kenya",
    template: "%s | BNC Brancom",
  },
  description:
    "BNC Brancom — Your Digital Bridge. Home fiber, business internet, wholesale bandwidth from KSh 161/Mbps and CCTV across Kenya.",
  keywords: [
    "BNC Brancom",
    "BNC internet Kenya",
    "home internet Kenya",
    "fiber internet Kenya",
    "ISP Kenya",
    "business internet Kenya",
    "wholesale bandwidth Kenya",
    "CCTV installation Kenya",
  ],
  openGraph: {
    type: "website",
    siteName: "BNC Brancom",
    title: "BNC Brancom — Your Digital Bridge",
    description: "FAST. STABLE. UNLIMITED. Home, business, wholesale bandwidth & CCTV across Kenya.",
  },
  robots: { index: true, follow: true },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  name: "BNC Brancom",
  slogan: "Your Digital Bridge",
  email: "info@bnc.co.ke",
  telephone: "+254112240649",
  areaServed: "Kenya",
  url: "https://bnc.co.ke/",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[200] focus:bg-navy focus:text-white focus:px-[18px] focus:py-3"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
