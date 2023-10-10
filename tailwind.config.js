const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    })
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB800',
        neutral: '#2D2D2D',
        dark: '#1F1F1F',
        light: '#FFFFFF',
        gray: '#D9D9D9'
      },
      borderRadius: {
        '2lg': '0.625rem', // 10px
        '2.5xl': '1.25rem' // 20px
      },
      transitionTimingFunction: {
        'snap-in': 'cubic-bezier(1, -0.01, 0.09, 1)',
        'snappier-in': 'cubic-bezier(0.98, -0.13, 0.07, 1.1)'
      },
      transitionProperty: {
        width: 'width',
        height: 'height'
      },
      boxShadow: {
        card: '5px 5px 20px 0px rgba(0, 0, 0, 0.15)'
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s cubic-bezier(0.98, -0.13, 0.07, 1.1) forwards',
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.98, -0.13, 0.07, 1.1) forwards',
        'fill-in': 'fill-in 2s cubic-bezier(0.98, -0.13, 0.07, 1.1) alternate infinite'
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fill-in': {
          '0%, 100%': {
            width: '0%'
          },
          '20%, 80%': {
            width: '100%'
          }
        }
      }
    }
  }
}
