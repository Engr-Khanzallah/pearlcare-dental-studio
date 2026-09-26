import type { Config } from "tailwindcss";

// Design tokens for PearlCare Dental Studio.
// Change these to re-skin the whole site for a real clinic brand.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm ivory — main background (not blue-tinted)
        cream: "#F8F5EE",
        surface: "#FFFFFF",
        // Soft warm beige/stone — secondary surface, used for alt sections
        stone: {
          DEFAULT: "#EFE7D6",
          100: "#F5EFE2",
        },
        // Deep charcoal — headings & primary text (premium, not pure black)
        ink: {
          DEFAULT: "#211D19",
          700: "#2E2822",
          500: "#6B6459",
        },
        // Muted sophisticated green — the one accent color, used sparingly
        jade: {
          DEFAULT: "#4B6357",
          600: "#374A41",
          100: "#E6EBE5",
        },
        // Muted brass/gold — secondary accent, used very sparingly for warmth
        sand: {
          DEFAULT: "#B8934F",
          100: "#F2E9D6",
        },
        line: "#E4DCC9",
      },
      fontFamily: {
        display: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        sans: ["'Manrope'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(14, 43, 43, 0.18)",
        card: "0 10px 30px -12px rgba(14, 43, 43, 0.12)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(31,122,102,0.35)" },
          "50%": { boxShadow: "0 0 0 14px rgba(31,122,102,0)" },
        },
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.94) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        typingDot: {
          "0%, 60%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "30%": { transform: "translateY(-4px)", opacity: "1" },
        },
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.4s ease-out infinite",
        "fade-slide-up": "fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "pop-in": "popIn 0.25s cubic-bezier(0.16,1,0.3,1) both",
        "typing-dot": "typingDot 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
