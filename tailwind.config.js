/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tvert: '#b0ca0b',
        tviolet: '#801c54',
        bvert: '#b0ca0b',
        bviolet: '#801c54',
      },
    },
  },
  plugins: [],
}
