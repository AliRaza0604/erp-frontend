module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#7289da',
        secondary:'#99aab5',
        text1:'#ffffff',
        text2:'#2c2f33',
        text3:'#23272a'

      },
      width:{
        '15%':'15%',
        '71':'17rem',
        '100':'33rem',
        '110':'38rem',
        '120':'50rem',
        '130':'60rem',
        '140':'70rem',
        '144':'74rem'
      },
      height:{
        'xll':'400px',
        '88':'24rem',
        '100':'30rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
