const { default: axiosClient } = require("./axiosClient");

const RegisterTabAPI = {
  postCreateUsser(obj) {
    const url = `RegisterTab/postCreateUsser`;
    return axiosClient.post(url, obj);
  },
  getAllUserName() {
    const url = "RegisterTab/getAllUser";
    return axiosClient.get(url);
  },
};
export default RegisterTabAPI;
