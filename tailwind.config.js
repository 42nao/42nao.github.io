/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      colors: {
        accent: "var(--accent-color)",
      },
    },
  },
  plugins: [],
};
