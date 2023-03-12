/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      inter: ["Monserrat", "sans-serif"],
    },
    extend: {
      colors: {
        accent: {
          dark: "#45050c",
          DEFAULT: "#b50102",
          light: "#d5ac4e",
          blue: "#2f088d",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
