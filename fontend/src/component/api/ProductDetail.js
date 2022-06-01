const { default: axiosClient } = require("./axiosClient");

const ProductDetailAPI = {
  getProductDetail(productID) {
    const url = `ProductDetail/getProductDetail?productID=${productID}`;
    return axiosClient.get(url);
  },
};

export default ProductDetailAPI;
