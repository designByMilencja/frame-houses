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
            primary: "#D1C2BA",
            green: "#75595A",
            text: "#171111",
            light: "#613A2A",
            dark: "#75595A"
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
