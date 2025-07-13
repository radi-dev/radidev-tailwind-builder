/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        general: "Raleway, ui-sans-serif, system-ui, sans-serif",
      },
      colors: {
        primary: "#F0E0BC",
        secondary: "#28282B",
        accent: "#BFDBDE",
        dark: "#121212",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
