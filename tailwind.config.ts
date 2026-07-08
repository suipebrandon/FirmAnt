import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        brand: "#99000A",
        ember: "#C91521",
        graphite: "#242424",
        paper: "#FFFDF9",
        blush: "#F8E7E8",
        gold: "#B9862F"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(10, 10, 10, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
