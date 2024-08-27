/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purple-gradient': 'linear-gradient(to bottom, #4F469C, #938AE5)',
      },
      fontFamily: {
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
