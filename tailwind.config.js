module.exports = {
  prefix: 'twcss-',
  important: true,
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    fontSize: {
      sm: '1.4rem',
      md: '2.4rem',
      lg: '3.2rem',
      xl: '4.4rem',
      '2xl': '5.4rem',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
        'theme-f1': ['"Sohne"', 'sans-serif'],
        'theme-f2': ['"Theinhardt"', 'sans-serif'],
      },
      fontSize: {
        button: '3.3rem',
      },
    },
  },
  plugins: [],
};
