const { default: axiosClient } = require("./axiosClient");

const Mapping = {
  //   product to category
  getAllMapProtoCate() {
    const url = `SanPham/getAllMapProtoCate`;
    return axiosClient.get(url);
  },
};

export default Mapping;
