/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./html/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
},
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        veryDarkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLight: 'hsl(0, 0%, 98%)',
        richblack: 'hsl(216, 100%, 4%)',
        prussianBlue: 'hsl(209, 100%, 20%)',
        DarkPurple: 'hsl(323, 96%,10%)',
        maximumBlue: 'hsl(196,51%,60%)',
        champagnePink: 'hsl(22, 42%, 88%)',
        skobeloff: 'hsl(184, 66%, 28%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
