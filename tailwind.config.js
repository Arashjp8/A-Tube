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
        mainGray: "#7F7F7F",
        buttonGray: "#30343D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "100px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ssm: "860px",
      md: "1060px",
      lg: "1300px",
      xl: "1700px",
    },
  },
  plugins: [],
};
