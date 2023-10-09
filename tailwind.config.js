/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFB800',
        dark: '#1F1F1F',
        light: '#FFFFFF',
        gray: '#D9D9D9'
      },
      transitionTimingFunction: {
        'snap-in': 'cubic-bezier(1, -0.01, 0.09, 1)',
        'snappier-in': 'cubic-bezier(0.98, -0.13, 0.07, 1.1)'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: []
}
