/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./html/*.{html,js}"],
  
  theme: {
    extend: {

      fontSize: {
        '4rem': '4rem',
        '1.5rem': '2rem',
        

      },

      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fill, minmax(22rem, 1fr))',
      },
    },
  },
  plugins: [],
}

