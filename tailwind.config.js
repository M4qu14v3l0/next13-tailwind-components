/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eyes': 'url("https://www.gamephd.com/wp-content/uploads/plixpapers1607/blue-eyes-face-4k-wallpaper-770x472.jpg")',
      },
    },
  },
  plugins: [],
}
