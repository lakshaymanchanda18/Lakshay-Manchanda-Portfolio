import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          primary: "#080C14",
          secondary: "#0D1321",
          tertiary: "#111827",
        },
        accent: {
          cyan: "#00D4FF",
          blue: "#0066FF",
          purple: "#8B5CF6",
          glow: "rgba(0, 212, 255, 0.15)",
        },
        surface: {
          DEFAULT: "#111827",
          hover: "#1A2332",
          border: "rgba(255,255,255,0.06)",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,102,255,0.15) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "border-pulse": "border-pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "scan-line": "scan-line 3s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0, 212, 255, 0.2)",
        "glow-blue": "0 0 30px rgba(0, 102, 255, 0.2)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 212, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
