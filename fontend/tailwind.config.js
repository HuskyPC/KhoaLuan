module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "arial", "sans-serif"],
      },
      fontSize: {
        body: ["16px"],
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.5)",
        "black-rgba-03": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
