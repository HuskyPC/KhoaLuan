const { default: axiosClient } = require("./axiosClient");

const RegisterTabAPI = {
  postCreateUsser(obj) {
    const url = `RegisterTab/postCreateUsser`;
    return axiosClient.post(url, obj);
  },
};
export default RegisterTabAPI;
