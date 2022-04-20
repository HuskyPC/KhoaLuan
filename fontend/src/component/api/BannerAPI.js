const { default: axiosClient } = require("./axiosClient");

const BannerApi = {
  getBanerAll() {
    const url = `Home/getBrandAll`;
    return axiosClient.get(url);
  },
};

export default BannerApi;
