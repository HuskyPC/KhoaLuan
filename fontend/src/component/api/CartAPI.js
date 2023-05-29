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
  getItemCardByUserID(userId) {
    const url = `Cart/getItemCardByUserID?userid=${userId}`;
    return axiosClient.get(url);
  },
  putchUpdateQuantityCart(obj) {
    const url = `Cart/updateQuantityCart`;
    return axiosClient.patch(url, obj);
  },
  getQuantityByUserIDProductID(userID, productID) {
    const url = `Cart/getQuantityItemCartByUserProduct?userID=${userID}&productId=${productID}`;
    return axiosClient.get(url);
  },
  deleteCartItem(cartid) {
    const url = `Cart/deleteCartItem`;
    return axiosClient.patch(url, cartid);
  },
  getInformationInCart(userID) {
    const url = `/User/getInformationInCart?userid=${userID}`;
    return axiosClient.get(url);
  },
};
export default CartApi;
