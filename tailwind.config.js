/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
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
      },
      keyframes: {
        waterdrop: {
          '0%': { transform: 'scale(0)', opacity: '0.3' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        }
      },
      animation: {
        waterdrop: 'waterdrop 2s ease-out infinite',
        waterdropDelay: 'waterdrop 3s ease-out infinite 1.5s',
      },
    },
  },
  plugins: [],
}

