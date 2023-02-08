/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        xs2: '500px',
        sm2: '700px',
        sm800: '800px',
        sm900: '900px',
        ...defaultTheme.screens,
      },
      spacing: {
        100: '100px',
      },
      colors: {
        blue_1: '#0280fd',
        orange_1: '#fd7f02',
        black_1: '#1b1b1be6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
