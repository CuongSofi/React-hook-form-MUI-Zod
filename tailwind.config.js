/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const CommonColors = require("./src/themes/colorTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      common: CommonColors,
    },
  },
  plugins: [],
};
