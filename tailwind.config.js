/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        "text-primary": "#36393b",
        "text-secondary": "#6b6f72",
        "d-background": "#202122",
        "d-text-primary": "#ffffff",
        "d-text-secondary": "#cccccc",
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
