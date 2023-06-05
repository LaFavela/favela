/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        poppins: ["Poppins"],
      },
      colors: {
        'gold': '#B17C3F',
        'grayhov': '#B9B9B9',
        'nila' : '#EDECE9'
        
      },
      dropShadow: {
        'landingShado' : '0 0 10px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}
