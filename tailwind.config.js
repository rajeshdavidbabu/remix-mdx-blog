/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        "text-main": "#36393b",
        "text-secondary": "#6b6f72",
        primary: "#548e9b",
      },
    },
    fontFamily: {
      serif: ['Merriweather", "serif'],
      sans: ["Fira Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
