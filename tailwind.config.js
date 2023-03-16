/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background-body)",
        "text-primary": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        "d-background": "var(--dark-background-body)",
        "d-text-primary": "var(--dark-text-main)",
        "d-text-secondary": "var(--dark-text-secondary)",
        primary: "var(--primary-color)",
        gray: colors.gray,
      },
      screens: {
        "max-w-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-w-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-w-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-w-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-w-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
    fontFamily: {
      serif: ['Merriweather", "serif'],
      sans: ["Fira Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
