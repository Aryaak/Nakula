module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#26AAFD'
      }
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus'],
      display: ['hover', 'focus', 'group-hover'],
      transitionDuration: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
