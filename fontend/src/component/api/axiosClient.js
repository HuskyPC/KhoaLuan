import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:44379/",
  headers: {
    "content-type": "application/json",
  },
});
export default axiosClient;
