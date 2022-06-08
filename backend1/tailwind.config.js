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
        success: "#28A745",
        "black-rgba": "rgba(0, 0, 0, 0.5)",
        "black-rgba-03": "rgba(0, 0, 0, 0.3)",
        "gray-rgba-1": "rgba(238, 238, 238, 1)",
      },
    },
  },
  plugins: [],
};
