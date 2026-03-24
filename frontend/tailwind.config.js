/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        heading: ['"Bebas Neue"', "sans-serif"],
      },
      colors: {
        brand: "#E8280B",
        "brand-2": "#ff4422",
        orange: "#F76B1C",
        gold: "#FFAB00",
        teal: "#00D4AA",
      },
    },
  },
  plugins: [],
};
