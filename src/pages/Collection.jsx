import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [subcategorys, setSubCategorys] = useState([]);
  const [sortType, setShortType] = useState("relavent");

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [categorys, subcategorys]);

  useEffect(() => {
    shortProduct();
  }, [sortType]);

  // useEffect(() => {
  //   console.log(category);
  // }, [category]);

  // useEffect(() => {
  //   console.log(subcategory);
  // }, [subcategory]);

  const toggleCategory = (e) => {
    if (categorys.includes(e.target.value)) {
      setCategorys((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategorys((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subcategorys.includes(e.target.value)) {
      setSubCategorys((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategorys((prev) => [...prev, e.target.value]);
    }
  };
  console.log(subcategorys);

  const applyFilter = () => {
    let productsCopy = products.slice();
    console.log(productsCopy);

    if (categorys.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        categorys.includes(item.category)
      );
    }
    if (subcategorys.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategorys.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const shortProduct = () => {
    let shortProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(shortProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(shortProductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Filter Options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        </p>
        {/* Category Filter */}
        <div
          className={`border border-x-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gab-2 text-sm font-light text-gray-700">
            <p className=" flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className=" flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className=" flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border border-x-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gab-2 text-sm font-light text-gray-700">
            <p className=" flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubcategory}
              />
              Topwear
            </p>
            <p className=" flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubcategory}
              />
              Bottomwear
            </p>
            <p className=" flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubcategory}
              />
              Winderwear
            </p>
          </div>
        </div>
      </div>
      {/*  Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setShortType(e.target.value)}
            className=" border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by:Relavet</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by High to Low</option>
          </select>
        </div>
        {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8 px-4">
          {filterProducts.map((item, index) => (
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
    </div>
  );
};

export default Collection;
