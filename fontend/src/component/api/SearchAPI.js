const { default: axiosClient } = require("./axiosClient");

const SearchAPI = {
  getSearchProduct(queryDebounce) {
    const url = `Search/getSearchProduct?keySreach=${queryDebounce}`;
    return axiosClient.get(url);
  },
};

export default SearchAPI;
