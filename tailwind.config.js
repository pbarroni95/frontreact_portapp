/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
],
  theme: {
    extend: { colors: {
      'text': '#bab8ba',
      'background': '#000000',
      'primary': '#7323ff',
      'secondary': '#8d1559',
      'accent': '#1c1c1c',
      'divs': '#1f2124',

      },
      maxWidth: {
        '32rem': '32rem', // Personalizado para 32 rem
      },
    },
  },
  plugins: [],
}

