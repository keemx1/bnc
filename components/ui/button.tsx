import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui-style Button (used selectively — no full framework import).
 * Renders an <a> when href is passed so CTAs stay crawlable links.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-[15.5px] font-extrabold transition-all min-h-[52px] px-7 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        /* Premium blue gradient (§6) */
        primary:
          "bg-gradient-to-br from-[#10A9E2] to-[#078AC7] text-white border-none shadow-[0_10px_25px_rgba(0,150,210,0.20)] hover:-translate-y-px hover:shadow-[0_14px_30px_rgba(0,150,210,0.25)]",
        /* Frosted white secondary (§10) */
        ghost:
          "bg-white/65 border-[1.5px] border-white/85 text-[#102B45] shadow-[0_8px_25px_rgba(40,130,170,0.08)] backdrop-blur-md hover:bg-white/90 hover:border-[rgba(0,160,220,0.30)] hover:-translate-y-px",
        navy: "bg-navy text-white hover:bg-navy-2 hover:-translate-y-0.5",
      },
      size: {
        md: "",
        sm: "min-h-[46px] px-[22px] py-2.5 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    if (href) {
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
          <span aria-hidden="true" className="font-mono font-normal">
            →
          </span>
        </a>
      );
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
