import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandApi from "../../api/BrandAPI";
import BrandSuggestionFakeData from "../../data/BrandSuggestionFakeData";

const BrandSuggestion = () => {
  const [...dataFake] = BrandSuggestionFakeData;
  const [branndData, setBranndData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(5);

  useEffect(() => {
    (async () => {
      try {
        const response = await BrandApi.getBrandSuggestion();
        setBranndData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    })();
  }, [filters]);

  // nếu bạn muốn tìm kiếm thì hãy gọi hàm này để thay đổi fillter
  const filterChange = (newFilters) => {
    setLoading(true);
    setFilters(newFilters);
  };
  return (
    <>
      <div className="BrandSuggestion pt-10 gap-4">
        <span className="uppercase block p-4 text-xl tracking-widest text-center">
          thương hiệu
        </span>
        <div className="p-4 flex items-center justify-center mx-2 gap-8">
          {branndData.length > 0
            ? branndData.map((itemBra, imdexBra) => (
                <div
                  className="brand-item w-24 drop-shadow-2xl overflow-hidden"
                  key={itemBra.brandID}
                >
                  <Link
                    className="border-0 hover:mb-2 overflow-hidden  "
                    to={`/product/${itemBra.brandID}`}
                  >
                    <img
                      className="w-full"
                      src={`${itemBra.urlImage}${itemBra.avatar}`}
                      alt="vgh"
                    />
                  </Link>
                </div>
              ))
            : dataFake.map((item, index) => (
                <div
                  className="brand-item w-24 drop-shadow-2xl overflow-hidden"
                  key={item.id}
                >
                  <Link
                    className="border-0 hover:mb-2 overflow-hidden  "
                    to={item.url}
                  >
                    <img
                      className="w-full"
                      src={`${item.urlImage}${item.image}`}
                      alt="vgh"
                    />
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default BrandSuggestion;
