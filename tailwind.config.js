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
            primary: "#E6EBF0",
            text: "#070906",
            green: "#002830",
            contact: "#D25A0C",
          },
          fontFamily: {
            mont: ["Montserrat", "sans-serif"],
          },
        },
        screens: {
          xs: "480px",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1700px",
        },
      },
  plugins: [],
}
