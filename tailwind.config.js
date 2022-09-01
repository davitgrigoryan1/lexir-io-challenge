/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      light: "0px 4px 6px rgba(0, 0, 0, 0.06)",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      sourceSerifPro: ["Source Serif Pro", "serif"],
    },
    colors: {
      white: "#FFFFFF",
      primary: "#2D2D2D",
      secondary: "#8F8F8F",
      borderColor: "#F2F2F2",
      categoryColor: "#F9F9F9",
      cherry: "#80133A",
      locationGray: "#595959",
      neutral: {
        500: "#1C8C64",
      },
      primary2: {
        300: "#6B6B6B"
      }
    },
  },
  plugins: [],
};
