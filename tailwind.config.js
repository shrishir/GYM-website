/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        creepster: ['"Creepster"', 'cursive'],
        cursive: ['"Dancing Script"', 'cursive'],
        baskerville: ['"Baskerville SC"', 'serif']
        
      },
    },
  },
  plugins: [],
}
