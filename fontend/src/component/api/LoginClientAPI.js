const { default: axiosClient } = require("./axiosClient");

const LoginClientAPI = {
  postLoginUser(obj) {
    const url = `LoginClient/postLoginUser`;
    return axiosClient.post(url, obj);
  },
};
export default LoginClientAPI;
