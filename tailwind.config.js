const theme = require("./constants/Theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      ...theme.colors,
    },
    fontFamily: {
      ...theme.fonts,
    },
    screens: {
      xs: "320px", // Para pantallas muy pequeñas (algunos smartphones antiguos)
      sm: "375px", // iPhone SE
      md: "414px", // iPhone 11
      lg: "768px", // iPad mini
      xl: "1024px", // iPad
    },
  },
  plugins: [],
};
