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
        'goldhov' : '#d9b285',
        'grayhov': '#B9B9B9',
        'nila' : '#EDECE9'
        
      },
      dropShadow: {
        'landingShado' : '0px 0px 4px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}
