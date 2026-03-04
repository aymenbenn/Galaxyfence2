
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f1b2d',
          light: '#1a2c47',
          dark: '#080e18',
        },
        forest: {
          DEFAULT: '#2d6a4f',
          hover: '#24553f',
          light: '#40916c',
        },
        warm: {
          DEFAULT: '#fafaf8',
          dark: '#f0f0eb',
        },
        charcoal: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
        },
        gold: {
          DEFAULT: '#d4a843',
          light: '#e3c275',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
