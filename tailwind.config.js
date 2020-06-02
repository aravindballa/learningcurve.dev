// See https://tailwindcss.com/docs/configuration for details
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#333',
        foreground: '#fff',
        'background-light': '#444',
        'foreground-light': colors.gray[500],
        gray: {
          '900': '#f5f5f5',
          '800': '#eeeeee',
          '700': '#e0e0e0',
          '600': '#bdbdbd',
          '500': '#9e9e9e',
          '400': '#757575',
          '300': '#616161',
          '200': '#424242',
          '100': '#212121',
        },
        purple: {
          ...colors.purple,
          800: colors.purple[300],
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
