/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1200: "1200px",
      },
      screens: {
        sm_500: "500px",
        smm: "450px",
      },
      colors: {
        main: "#054F3E",
        phone: "#00BE33",
        telegram: "#0093E6",
        instagram: "#BA128B",
      },

      backgroundImage: {
        "black-gradient":
          "linear-gradient(0deg, rgba(0,0,0,0.7) 5%, rgba(0,212,255,0) 100%)",
        "gold-border-gradient":
          "linear-gradient(135deg, rgba(239,191,4,1) 0%, rgba(255,245,158,1) 100%)",
        "gold-bg-gradient":
          "linear-gradient(320deg, rgba(239,191,4,1) 0%, rgba(255,245,158,1) 100%)",
      },
      // boxShadow: {
      //   "gold-palete": "box-shadow: 17px 17px 8px 0px 000",
      // },
    },
  },
  plugins: [],
};
