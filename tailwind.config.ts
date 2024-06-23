import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1380px",
      },
    },
    colors: {
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      current: colors.current,
      neutral: colors.neutral,
      rose: colors.rose,
      amber: colors.amber,
    },
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        scrollbar: "hsl(var(--scrollbar))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        element: {
          DEFAULT: "hsl(var(--element))",
          foreground: "hsl(var(--element-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        shimmer: {
          "100%": { left: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.5s infinite",
        fadeIn: "fadeIn 0.3s",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
} satisfies Config;

export default config;
