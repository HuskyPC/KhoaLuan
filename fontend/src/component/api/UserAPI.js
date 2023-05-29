const { default: axiosClient } = require("./axiosClient");

const UserAPI = {
  postUpdateAcc() {
    const url = `Home/getBrandAll`;
    return axiosClient.get(url);
  },
};

export default UserAPI;
