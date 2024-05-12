/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['AbhayaLibre', 'AbhayaLibre'],
      },
      colors: {
        primary: '#F5F5F5',
        secondary: '#E4D9D0',
        texts: '#4D4D4C',
      }
    },
  },
  plugins: [],
}