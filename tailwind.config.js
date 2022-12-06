/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      blue: "#3260cf",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      firstGray: "#f1f1f1",
      hoverGray: "#ededed",
      smoothGray: "#f2f2f2",
      "gray-dark": "#373b3e",
      "dark-blue": "#24419e",
      gray: "#595959",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      borderRadius: {
        1: "0.3rem",
        2: "0.4rem",
        3: "0.6rem",
        4: "0.8rem",
        5: "1rem",
        6: "1.2rem",
        7: "1.4rem",
        8: "1.6rem",
        9: "1.8rem",
        10: "2rem",
        11: "2.2rem",
        12: "2.4rem",
      },
    },
  },
  plugins: [],
};
