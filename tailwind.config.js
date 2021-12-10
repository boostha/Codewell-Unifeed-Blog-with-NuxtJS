module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', "sans-serif"]
      },

      container: {
        center: true,
        padding: '2rem',
      },

      colors: {
        'orange': '#f97316',
        'white': '#fefefe',
        'grey': '#939393'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
