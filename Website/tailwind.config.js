/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand': '#FFE9BF',
        'lightblue': '#78DBFF',
        'darkblue': '#63C5E9',
      },
    },
  },
  plugins: [],
}
