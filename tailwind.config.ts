import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        brand: "#99000A",
        ember: "#C91521",
        graphite: "#242424",
        paper: "#FFFDF9",
        blush: "#F8E7E8",
        gold: "#B9862F",
        // UI-UX-Pro-Max additions for construction/industrial feel
        blueprint: "#1E3A5F",
        "blueprint-light": "#2A5298",
        safety: "#EA580C",
        "safety-dark": "#C2410C",
        concrete: "#64748B",
        "concrete-light": "#94A3B8",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(10, 10, 10, 0.12)",
        card: "0 4px 24px rgba(10, 10, 10, 0.08)",
        "card-hover": "0 12px 40px rgba(10, 10, 10, 0.14)",
        glow: "0 0 24px rgba(201, 21, 33, 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      fontSize: {
        "hero": ["clamp(3rem, 10vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "900" }],
        "hero-lg": ["clamp(3.5rem, 10vw, 8rem)", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "900" }],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "drift": "drift 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        drift: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    }
  },
  plugins: []
};

export default config;