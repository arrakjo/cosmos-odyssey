/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F7F7F7",
        black: "#121013",
        grey: "#2A2A2A",
        lightgrey: "#DBDCE1",
        blue: "#3179F5",
        lightblue: "#81D0F9",
        rose: "#F9C4BE",
      },
    },
  },
  plugins: [],
};
