import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6B1F2A",
          dark: "#4A1218",
          50: "#FBF3F4",
          100: "#F4DFE2",
          200: "#E4B7BE",
          300: "#C97F8B",
          400: "#A94E5D",
          500: "#6B1F2A",
          600: "#5A1923",
          700: "#4A1218",
          800: "#330C11",
          900: "#1F0609",
        },
        brass: {
          DEFAULT: "#B8956A",
          light: "#D4B993",
          dark: "#8C6E4A",
        },
        cream: {
          DEFAULT: "#FAF6F1",
          dark: "#F0E9DE",
        },
        ink: {
          DEFAULT: "#1A1613",
          muted: "#5C534D",
        },
        success: "#2F6F3E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        warm: "0 10px 30px -12px rgba(107,31,42,0.18), 0 4px 10px -4px rgba(107,31,42,0.08)",
        "warm-lg": "0 24px 60px -20px rgba(107,31,42,0.28), 0 8px 20px -8px rgba(107,31,42,0.12)",
        "warm-sm": "0 2px 8px -2px rgba(107,31,42,0.10)",
        brass: "0 0 0 1px rgba(184,149,106,0.4), 0 12px 40px -12px rgba(184,149,106,0.35)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, rgba(26,22,19,0.85) 0%, rgba(74,18,24,0.75) 50%, rgba(26,22,19,0.7) 100%)",
        "gradient-brass":
          "linear-gradient(135deg, #B8956A 0%, #D4B993 50%, #B8956A 100%)",
        "gradient-burgundy":
          "linear-gradient(135deg, #6B1F2A 0%, #4A1218 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
