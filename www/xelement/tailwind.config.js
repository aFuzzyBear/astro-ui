module.exports = {
  purge: [
    './public/**/*', 
    './src/**/*.{astro,js,jsx,ts,tsx,vue}'
  ],
  theme: {
    screen:{
      'sm': {'min': '0px', 'max': '425px'},
      'md': {'min': '426px', 'max': '768px'},
      'lg': {'min': '768px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    fontFamily:{},
    extend: {
      typography:{
        DEFAULT:{
          css:{
            // '--tw-prose-body': ,
            // '--tw-prose-headings': ,
            // '--tw-prose-lead': ,
            // '--tw-prose-links': ,
            // '--tw-prose-bold': ,
            // '--tw-prose-counters': ,
            // '--tw-prose-bullets': ,
            // '--tw-prose-hr': ,
            // '--tw-prose-quotes': ,
            // '--tw-prose-quote-borders': ,
            // '--tw-prose-captions': ,
            // '--tw-prose-code': ,
            // '--tw-prose-pre-code': ,
            // '--tw-prose-pre-bg': ,
            // '--tw-prose-th-borders': ,
            // '--tw-prose-td-borders': ,
            // '--tw-prose-invert-body': ,
            // '--tw-prose-invert-headings': ,
            // '--tw-prose-invert-lead': ,
            // '--tw-prose-invert-links': ,
            // '--tw-prose-invert-bold': ,
            // '--tw-prose-invert-counters': ,
            // '--tw-prose-invert-bullets': ,
            // '--tw-prose-invert-hr': ,
            // '--tw-prose-invert-quotes': ,
            // '--tw-prose-invert-quote-borders': ,
            // '--tw-prose-invert-captions': ,
            // '--tw-prose-invert-code': ,
            // '--tw-prose-invert-pre-code': ,
            // '--tw-prose-invert-td-borders': ,
            maxWidth:'none',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
