const { default: axiosClient } = require("./axiosClient");

const BrandApi = {
  getBrandSuggestion() {
    const url = `Home/getBrandSuggestion`;
    return axiosClient.get(url);
  },
  getBrandIDandParentID() {
    const url = `Home/getBrandIDandParentID`;
    return axiosClient.get(url);
  },
  getAllBrand() {
    const url = `SanPham/getAllBrand`;
    return axiosClient.get(url);
  },
};

export default BrandApi;
