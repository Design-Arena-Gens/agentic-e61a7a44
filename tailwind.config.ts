import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4ade80",
          neon: "#70ffaf"
        },
        surface: {
          DEFAULT: "#0b1120",
          alt: "#111c2e"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(112, 255, 175, 0.35)"
      }
    }
  },
  plugins: [],
};

export default config;
