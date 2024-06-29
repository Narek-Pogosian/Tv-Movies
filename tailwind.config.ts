import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
      screens: {
        "2xl": "1380px",
      },
    },
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      white: colors.white,
      black: colors.black,

      neutral: colors.zinc,
      primary: colors.rose,
      secondary: colors.amber,
    },
    extend: {
      screens: {
        xs: "475px",
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
        shimmer: "shimmer 1.5s infinite",
        fadeIn: "fadeIn 0.3s",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
} satisfies Config;

export default config;
