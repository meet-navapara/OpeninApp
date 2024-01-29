/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Leftside': "url('./src/assets/Leftside.png')",
      },
    },
  },
  plugins: [],
}

