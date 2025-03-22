/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}

