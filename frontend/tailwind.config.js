/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f2efea',
          200: '#e8e4da',
          300: '#d5cfc0',
          400: '#c0b6a1',
          500: '#a89e83',
          600: '#8c8169',
          700: '#736a57',
          800: '#5e574a',
          900: '#4e4940',
          950: '#292722',
        },
        accent: {
          50: '#fbf7f0',
          100: '#f7ecd7',
          200: '#edd8ae',
          300: '#e4c17c',
          400: '#dba954',
          500: '#d3933a',
          600: '#c27a2d',
          700: '#a05f27',
          800: '#824c25',
          900: '#6c3f21',
          950: '#3b200f',
        },
        neutral: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c7c7c7',
          400: '#acacac',
          500: '#8f8f8f',
          600: '#717171',
          700: '#5e5e5e',
          800: '#4f4f4f',
          900: '#444444',
          950: '#262626',
        }
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['"Raleway"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-slow': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      height: {
        'screen-90': '90vh',
      },
      cursor: {
        'brush': 'url(/cursors/brush-cursor.png), pointer',
      },
    },
  },
  plugins: [],
};