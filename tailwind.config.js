/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        mont: ['Montserrat', 'sans-serif']
      },
      container: {
        center: true
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': 'linear-gradient(135deg, #F81F01 0%, #EE076E 100%)',
        'lred': '#F81F01',
        'dblack': '#101010',
        'lblack': '#191919',
        'lgray': '#E9ECEF'
      },
    },
  },
  plugins: [],
}

