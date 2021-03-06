module.exports = {

  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    entend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}