/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        1: "Raleway, ui-sans-serif, system-ui, sans-serif",
        2: "Montserrat, ui-sans-serif, system-ui, sans-serif",
        3: "Poppins, ui-sans-serif, system-ui, sans-serif",
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
