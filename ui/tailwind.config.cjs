/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        store: {
          "purple-light": "#9a6aff",
          "purple-dark": "#280d5f",
          blue: "#1fc7d4",
          pink: "#ed4b9e",
          yellow: "#ffb237"
        },
        ...colors,
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: "#app",
};
