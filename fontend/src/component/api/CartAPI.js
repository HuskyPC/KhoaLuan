const { default: axiosClient } = require("./axiosClient");

const CartApi = {
  postInsertCart(objCart) {
    const url = `Cart/postInsertCart`;
    return axiosClient.post(url, objCart);
  },
  getCartItemByProductID(productId) {
    const url = `Cart/getCartByProductID?productID=${productId}`;
    return axiosClient.get(url);
  },
};
export default CartApi;
