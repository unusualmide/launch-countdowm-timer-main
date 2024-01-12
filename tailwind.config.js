/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('/bg-stars.svg')",
        'pattern-hills': "url('/pattern-hills.svg')",
      },
      colors: {
        'blue-59%': "hsl(237, 18%, 59%)",
        'soft-red': "hsl(345, 95%, 68%)",
        'desaturated-blue': 'hsl(236, 21%, 26%)',
        'blue-14%': 'hsl(235, 16%, 14%)',
        'blue-12%': 'hsl(234, 17%, 12%)',
        'blue-16%': 'hsl(230, 15%, 16%)',
        'grey-4%': 'hsla(0, 0%, 4%, 0.6)',
        'grey-8%': 'hsl(0, 0%, 4%)',
        'grey-57%': 'hsl(0, 0%, 57%)',
      }
    },
  },
  plugins: [],
}

