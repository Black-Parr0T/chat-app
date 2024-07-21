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
        'hero-background': "url('https://cdn.pixabay.com/photo/2023/01/09/20/18/sunset-7708222_1280.jpg')",
      },
    },
  },
  plugins: [],
};
