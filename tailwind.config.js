/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        md: { max: "1024px" },
        sm: { max: "550px" },
        tablet: { max: "768px" },
        celularAlbum: { max: "425" },
      },
      fontFamily: {
        "CormorantUnicase-Bold": ["CormorantUnicase-Bold", "sans-serif"],
        "CormorantUnicase-SemiBold": [
          "CormorantUnicase-SemiBold",
          "sans-serif",
        ],
        "Alex-Brush": ["Alex-Brush", "sans-serif"],
        "Abhaya-Libre": ["Abhaya-Libre", "sans-serif"],
      },
      colors: {
        primary: "#F5F5F5",
        secondary: "#E4D9D0",
        texts: "#4D4D4C",
      },
    },
  },
  plugins: [],
};
