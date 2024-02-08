/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#036ca8',
        secondary: '#0377b9',
        third: '#025585',
        dark: '#252525',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

