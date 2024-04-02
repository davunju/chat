/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        rubik: '"Rubik", sans-serif',
      },
      screens: {
        mobile: { max: "800px" },
      },
      colors: {
        paleViolet: "hsl(276, 100%, 81%)",
        moderateViolet: "hsl(276, 55%, 52%)",
        desaturatedDarkViolet: "hsl(271, 15%, 43%)",
        grayishBlue: "hsl(206, 6%, 79%)",
        veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
        darkGrayishViolet: "hsl(270, 7%, 64%)",
        lightGrayishViolet: "hsl(270, 20%, 96%)",
        veryLightMagenta: "hsl(289, 100%, 72%)",
        lightMagenta: "hsl(293, 100%, 63%)",
        lightViolet: "hsl(264, 100%, 61%)",
      },
    },
  },
  plugins: [],
};
