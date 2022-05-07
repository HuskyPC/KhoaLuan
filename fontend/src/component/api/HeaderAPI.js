const { default: axiosClient } = require("./axiosClient");

const HeaderApi = {
  getCountCart(UserID) {
    const url = `Cart/getCountCart?userID=${UserID}`;
    return axiosClient.get(url);
  },
};
export default HeaderApi;
