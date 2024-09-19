import { createContext, useState } from "react";
import { products } from "../api/products";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState();
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <div>
      <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;
