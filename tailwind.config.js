const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      display: ['Libre Baskerville', 'serif']
    },
    extend: {
      spacing: {
        '45ch': '45ch',
        '55ch': '55ch',
        '65ch': '65ch',
        '75ch': '75ch',
      },
      fontFamily: {
        sans: [
          'Kulim Park',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      },
      colors: {
        colorPrimary: '#0f7f74',
        colorSecondary: '#f5f5f5'
      }
    }
  },
  variants: {},
  plugins: [],
}
