const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3949AB",
        secondary: "#121212",
        buttonColor: "#2196F3",
        textPrimary: "#121212",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
});
