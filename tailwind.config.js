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
            primary: "#CDDBDC",
            green: "#55594A",
            text: "#262822",
            dark: "#7999B0",
            light: "#A6C8D4"
            ,
          },
          fontFamily: {
            bricolage: ["Bricolage Grotesque", "sans-serif"],
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
