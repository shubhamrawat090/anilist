/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textLight: "#e74c3c",
      "textLight-2": "#484848",
      textDark: "#eae9e9",
      "textDark-2": "#a7a6ad",
      "bannerBg-light": "#ffffff",
      "bannerBg-light-2": "#f6f6f6",
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px",
      },
      boxShadow: {
        navbar:
          "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
      },
    },
  },
  plugins: [],
};
