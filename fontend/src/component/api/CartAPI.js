const { default: axiosClient } = require("./axiosClient");

const CartApi = {
  postInsertCart(objCart) {
    const url = `Cart/postInsertCart`;
    return axiosClient.post(url, objCart);
  },
  postCartByProductID(productId) {
    const url = `Cart/postCartByProductID`;
    return axiosClient.post(url, productId);
  },
  getProductbyID(id) {
    const url = `Cart/getCartByProductID?id=${id}`;
    return axiosClient.get(url);
  },
};
export default CartApi;
