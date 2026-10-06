import { MessageCircle } from "lucide-react";
import { WA } from "@/lib/site";

/** Floating WhatsApp button — fixed bottom-right, server component (plain link). */
export function WhatsAppFloat() {
  return (
    <a
      href={WA.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need help? Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-[90] flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-[0_16px_36px_-12px_rgba(37,211,102,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-12px_rgba(37,211,102,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366]/50 animate-ping [animation-duration:2.2s]" />
      <span aria-hidden="true" className="relative grid place-items-center w-[60px] h-[60px]">
        <MessageCircle size={28} strokeWidth={2.2} />
      </span>
      <span className="relative max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[220px] group-hover:pr-5">
        Need help? Chat with us
      </span>
    </a>
  );
}
