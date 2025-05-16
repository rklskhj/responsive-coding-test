/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "4xs": "320px",
      "3xs": "375px",
      "2xs": "425px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          50: "#FDF5F7",
          100: "#FBEBEF",
          200: "#F6D7DF",
          300: "#F1C3CF",
          400: "#ECB3BE", // 기본 색상
          500: "#E69EAE",
          600: "#D9899D",
          700: "#C6748D",
          800: "#B3607D",
          900: "#9F4C6D",
          950: "#7A3551",
        },
        sub: "#F5F4ED",
        sub2: "#FDFDFB",
        icon1: "#2F2F2F",
        icon2: "#C23130",
        icon3: "#17868B",
      },
    },
  },
  plugins: [],
};
