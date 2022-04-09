import axios from "axios";
import { useEffect, useState } from "react";
const BannerAPI = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState("");

  useEffect(() => {
    async function fechData() {
      setLoading(true);
      const reposeData = await axios.get(
        `https://localhost:44379/Banner/getBannerAll`
      );
      if (reposeData.data) {
        setProduct(reposeData.data);
        setLoading(false);
      }
    }
    fechData();
  }, []);

  return product;
};

export default BannerAPI;
