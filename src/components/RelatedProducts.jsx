import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    filterApp();
  }, [products]);

  const filterApp = () => {
    let productsCopy = products.slice();
    if (products.length > 0) {
      productsCopy = productsCopy.filter((item) => item.category === category);
      productsCopy = productsCopy.filter(
        (item) => item.subCategory === subCategory
      );
      setRelated(productsCopy);
    }

    // console.log(related);
  };
  return (
    <div className="mt-5">
      <div className="text-center py-8 text-3xl">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, quae?
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8 px-4">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
