/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-body)",
        "text-main": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        primary: "var(--primary-color)",
      },
    },
    fontFamily: {
      serif: ['Merriweather", "serif'],
      sans: ["Fira Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
