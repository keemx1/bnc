import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: "#0DA8E5" },
        brand: "#0D82C0",
        /* Premium light-glass type scale (§4): headings #0B2340, body #52708A, labels #0699D7 */
        navy: { DEFAULT: "#0B2340", 2: "#082B52" },
        paper: "#F5FAFD",
        line: "#D7EDF7",
        linestrong: "#AEDCF2",
        ink: "#0A2138",
        muted: "#52708A",
        faint: "#6E8CA6",
        ice: "#7FD4F7",
        label: "#0699D7",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
