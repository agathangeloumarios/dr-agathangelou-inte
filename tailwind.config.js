/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0d9488", foreground: "#fafafa" },
        secondary: { DEFAULT: "#f59e0c", foreground: "#fafafa" },
        accent: { DEFAULT: "#a855f7", foreground: "#fafafa" },
        muted: { DEFAULT: "#a3a3a3", foreground: "#fafafa" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
