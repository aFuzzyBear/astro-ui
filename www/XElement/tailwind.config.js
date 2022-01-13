module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.{scss,sass,css}', './src/**/*.{astro,js,jsx,ts,tsx,vue,scss,sass,css}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
