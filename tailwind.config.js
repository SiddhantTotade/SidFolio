/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      letterSpacing: {
        remfour: '0.4rem'
      },
    },
    fontFamily: {
      signature: ["Bitter, serif"],
      magic: ["Noto Serif Georgian, serif"],
    },
  },
  plugins: [],
}
