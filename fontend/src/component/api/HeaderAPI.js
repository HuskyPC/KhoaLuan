const { default: axiosClient } = require("./axiosClient");

const HeaderApi = {
  getCountCart(userID) {
    const url = `Cart/getCountCart?userID=${userID}`;
    return axiosClient.get(url);
  },
};
export default HeaderApi;
