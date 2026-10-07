/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050D1A",
          900: "#081527",
          800: "#0B1F3A",
          700: "#123055",
          600: "#17406F",
          500: "#1E5286",
        },
        steel: {
          700: "#12467F",
          600: "#175FA8",
          500: "#1E72C4",
          400: "#3E8FDB",
          200: "#BBD6F2",
          100: "#DCEAF9",
          50: "#F0F6FD",
        },
        accent: {
          900: "#06381D",
          800: "#0A4E2B",
          700: "#0E6637",
          600: "#117A43",
          500: "rgb(var(--brand-green) / <alpha-value>)",
          400: "#3BA46C",
          300: "#66BB8E",
          200: "#A2D9BB",
          100: "#D7F0E2",
          50: "#EDF9F2",
        },
        mist: "#F5F7FA",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11, 31, 58, 0.18)",
        card: "0 18px 45px -22px rgba(11, 31, 58, 0.35)",
        lift: "0 26px 60px -25px rgba(11, 31, 58, 0.45)",
      },
      maxWidth: {
        container: "76rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translate3d(0, 26px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.965)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeIn: "fadeIn 0.6s ease-out both",
        scaleIn: "scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
