/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        dark: 'linear-gradient(to right, #000318, #030416, #050513, #070611, #08070e, #08070e, #09070d, #09070d, #0a060f, #0c0410, #0e0311, #100112)',
      },
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
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
