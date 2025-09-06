import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: {
          50:  "#f0f8ff",
          100: "#ddefff",
          200: "#bfe0ff",
          300: "#92caff",
          400: "#5da9ff",
          500: "#2f86ff",
          600: "#1667ea",
          700: "#124fc0",
          800: "#133f95",
          900: "#133876",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
