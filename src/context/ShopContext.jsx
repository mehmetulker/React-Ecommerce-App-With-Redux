import { createContext } from "react";
import { products } from "../api/products";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const value = { products, currency, delivery_fee };

  return (
    <div>
      <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;
