/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode
  darkMode: "class",

  // Tell Tailwind where to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* Brand / UI colors */
        primary: "#ECEBFF",   // Light lavender background (Meelo-style)
        accent: "#7B6EF6",    // Primary action / highlight
        dark: "#0F172A",      // Dark mode background
        muted: "#64748B",     // Muted text (gray-ish)

        /* Semantic colors (future-proof) */
        surface: "#FFFFFF",
        border: "#E5E7EB",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.06)",
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },

      maxWidth: {
        "8xl": "90rem",
      },
    },
  },

  plugins: [],
};
