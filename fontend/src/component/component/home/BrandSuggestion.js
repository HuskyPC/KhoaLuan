import React from "react";
import { Link } from "react-router-dom";
import BrandSuggestionFakeData from "../../data/BrandSuggestionFakeData";

const BrandSuggestion = () => {
  const [...dataFake] = BrandSuggestionFakeData;
  // console.log(
  //   "🚀 ~ file: BrandSuggestion.js ~ line 7 ~ BrandSuggestion ~ dataFake",
  //   dataFake
  // );

  return (
    <>
      <div className="BrandSuggestion pt-10 gap-4">
        <span className="uppercase block p-4 text-xl tracking-widest text-center">
          thương hiệu
        </span>
        <div className="p-4 flex items-center justify-center mx-2 gap-8">
          {dataFake.length > 0 &&
            dataFake.map((item, index) => (
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
