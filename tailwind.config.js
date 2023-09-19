/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container : {
        center : true
      },
      colors : {
        "primary" : "#F81F01",
      }
    },
  },
  plugins: [],
}

