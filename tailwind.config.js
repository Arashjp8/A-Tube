/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, jsx, ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        secondary: "#FC1503",
        mainWhite: "#F8F8F8",
        mainGray: "#757575",
        buttonGray: "#30343D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
