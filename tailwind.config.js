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
        'eyes-1': "url('/images/eyesone.png')",
        'eyes-2': "url('/images/eyes_tow.png')",
        'eyes-3': "url('/images/eyes_three.png')",
        'eyes-4': "url('/images/eyes_four.png')",
        'eyes-5': "url('/images/eyes_five.png')",
        'eyes-6': "url('/images/eyes_six.png')",
      },
    },
  },
  plugins: [],
}
