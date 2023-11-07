const { gray, red, green, cyan, ruby } = require("@radix-ui/colors");

function transform(radix) {
  return Object.values(radix).reduce((colors, value, index) => {
    colors[index + 1] = value;

    return colors;
  }, {});
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      gray: transform(gray),
      red: transform(red),
      green: transform(green),
      blue: transform(cyan),
      primary: transform(ruby),
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};
