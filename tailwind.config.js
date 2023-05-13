/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'gold': '#A18565',
        'grayhov': '#B9B9B9',
        'nila' : '#EDECE9'
        
      }
    },
  },
  plugins: [],
}
