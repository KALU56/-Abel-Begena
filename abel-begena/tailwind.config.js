/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown-800': '#4E342E',
        'brown-700': '#6D4C41',
        amber: {
          100: '#FFECB3',
        },
        yellow: {
          // 50: '#FFFDE7',
          200: '#FFF59D',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      
    },
  },
}
