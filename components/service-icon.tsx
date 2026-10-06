import { Briefcase, Cctv, Network, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = { wifi: Wifi, briefcase: Briefcase, network: Network, cctv: Cctv } as const;

/** Blue circular service glyph — one consistent treatment across all cards. */
export function ServiceIcon({
  icon,
  className,
}: {
  icon: keyof typeof ICONS;
  className?: string;
}) {
  const I = ICONS[icon];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid place-items-center w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#E3F4FC] to-[#C9EAFB] border-[1.5px] border-linestrong text-brand",
        className
      )}
    >
      <I size={24} strokeWidth={2} />
    </span>
  );
}
