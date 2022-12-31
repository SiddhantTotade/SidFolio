/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'animStar': { translateY: '0px, -2000px' },
        'tailmd': { 'width': 0, 'width': '50px', 'width': 0 },
        'shiningmd': { '0%': { width: 0 }, '30%': { width: '30px' }, '100%': { width: 0 } }
      },
      animation: {

      },
      letterSpacing: {
        remfour: '0.4rem'
      },
    },
    fontFamily: {
      signature: ["Bitter, serif"],
      magic: ["Noto Serif Georgian, serif"],
      poppins: ['poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
