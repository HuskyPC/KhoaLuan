const { default: axiosClient } = require("./axiosClient");

const CartApi = {
  postInsertCart(objCart) {
    const url = `Cart/postInsertCart`;
    return axiosClient.get(url, objCart);
  },
};
export default CartApi;
