/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather Sans', 'sans-serif'],
        baumans: ['Baumans', 'system-ui'],
        russoOne: ["Russo One", 'sans-serif']
      },
      h1: {
        color: 'Red',
        fontWeight: "900",
      }
    },
  },
  plugins: [],
}