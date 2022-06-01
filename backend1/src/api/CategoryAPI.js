const { default: axiosClient } = require("./axiosClient");
const CategoryAPI = {
  getCategory() {
    const url = `ProductAdmin/getCateCreatePro`;
    return axiosClient.get(url);
  },
};

export default CategoryAPI;
