module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
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
  plugins: [require("tw-elements/dist/plugin")],
};
