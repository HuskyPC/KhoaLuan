const { default: axiosClient } = require("./axiosClient");

const CategoryAPI = {
  getCategory() {
    const url = `SanPham/getCategory`;
    return axiosClient.get(url);
  },
};

export default CategoryAPI;
