/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: '#111111',
          soft: '#1B1B1B',
        },
        paper: '#F4F0E8',
        beige: {
          DEFAULT: '#EAE2CF',
          dark: '#DED0AE',
        },
        gold: {
          DEFAULT: '#B89A5A',
          light: '#CBB27E',
          dark: '#96793F',
        },
        sauge: {
          DEFAULT: '#7E946C',
          light: '#9BAE8B',
        },
        stone: '#666666',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        page: '76rem',
      },
    },
  },
  plugins: [],
}
