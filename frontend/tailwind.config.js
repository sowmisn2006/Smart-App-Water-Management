/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#10b981',
          water: '#0f172a',
          waterLight: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}
