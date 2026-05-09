import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        cream: "#FFF8F1",
        bubble: {
          pink: "#FFD6E8",
          peach: "#FFE3CC",
          mint: "#CFF6E1",
          sky: "#CFE8FF",
          lilac: "#E5D9FF",
          butter: "#FFF1B8",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
        "glass-lg": "0 20px 60px 0 rgba(31, 38, 135, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(8px)" },
        },
        pop: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        pop: "pop 0.4s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
