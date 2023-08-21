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
            secondary: "#55452E",
            third: "#7999B0",
            fourth: "#664F2B"
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
