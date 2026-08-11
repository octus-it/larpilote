/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#142430',
        marine: {
          DEFAULT: '#1F6B72',
          dark: '#154D53',
          light: '#3C8A91',
        },
        sand: '#EFE7D8',
        paper: '#FAF7F1',
        ochre: '#C98A2C',
        ember: '#B4502F',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
