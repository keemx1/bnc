import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn-style class merger */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** KES formatting, e.g. 1500 -> "KSh 1,500" */
export function kes(n: number): string {
  return `KSh ${n.toLocaleString("en-KE")}`;
}
