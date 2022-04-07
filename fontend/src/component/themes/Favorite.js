import React from "react";
import ProductItem from "../component/product/ProductItem";
import { useContextWEB } from "../context/ContextComponent";
import ProductFakeData from "../data/ProductFakeData";

const Favorite = () => {
  const [...dataProductFake] = ProductFakeData;
  const { favoriteContext } = useContextWEB();
  return (
    <div className=" mt-20">
      <div className="grid grid-cols-4 gap-3 px-20">
        {dataProductFake.map((itemPro, indexPro) =>
          favoriteContext.map((item, index) =>
            item.id === itemPro.id ? (
              <ProductItem
                key={item.id}
                id={itemPro.id}
                name={itemPro.name}
                price={itemPro.price}
                priceSale={itemPro.priceSale}
                url={itemPro.url}
                img={itemPro.img}
                urlImg={itemPro.urlImage}
                favo={1}
              ></ProductItem>
            ) : (
              ""
            )
          )
        )}
      </div>
    </div>
  );
};

export default Favorite;
