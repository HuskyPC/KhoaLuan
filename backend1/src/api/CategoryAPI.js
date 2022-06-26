const { default: axiosClient } = require("./axiosClient");
const CategoryAPI = {
  getCategory() {
    const url = `ProductAdmin/getCateCreatePro`;
    return axiosClient.get(url);
  },
  postCreateCategory(obj) {
    const url = `CategoryAdmin/postCreateCategory`;
    return axiosClient.post(url, obj);
  },
};

export default CategoryAPI;
