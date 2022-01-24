module.exports = {
  mode: 'jit',
  purge: ['./public/**/*', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screen:{
      'sm': {'min': '0px', 'max': '425px'},
      'md': {'min': '426px', 'max': '768px'},
      'lg': {'min': '768px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    colors:{
      ghostwhite:'#f8f8ff',
      primary:'var(--color-green)'
    },
    fontFamily:{},
    extend: {
      typography:{
        DEFAULT:{
          css:{
            maxWidth:'none',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
