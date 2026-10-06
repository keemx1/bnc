import { WA } from "@/lib/site";
import { Button } from "@/components/ui/button";

/** Branded 404 — keeps lost visitors inside the bridge. */
export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-[1200px] px-6 py-24 text-center">
      <p className="font-mono text-xs tracking-[0.24em] text-brand">404 — OFF THE BRIDGE</p>
      <h1 className="mt-4 text-navy font-extrabold uppercase tracking-tight text-[clamp(40px,6vw,72px)] leading-none">
        Wrong turn.
      </h1>
      <p className="mt-4 text-muted max-w-[46ch] mx-auto">
        This page doesn&apos;t exist — but fast, stable, unlimited internet does.
      </p>
      <div className="mt-8 flex gap-3.5 justify-center flex-wrap">
        <Button href="/">Back Home</Button>
        <Button href={WA.contact} variant="ghost">
          Contact BNC
        </Button>
      </div>
    </main>
  );
}
