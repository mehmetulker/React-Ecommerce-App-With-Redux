import { createContext, useEffect, useState } from "react";
import { products } from "../api/products";
import { toast } from "react-toastify";
export const ShopContext = createContext();
import { useNavigate } from "react-router-dom";
import moment from "moment";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState();
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    // Check if the item with the same id and size already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === itemId && item.sizes === size
    );

    // If the item exists, increase its quantity
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      // setCartCount(cartCount + 1);
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist, add it to the cart
      products.map((item) => {
        if (item.id === itemId) {
          const newItem = {
            ...item,
            sizes: size,
            quantity: 1,
            date: moment(date).format("DD/MM/YYYY"),
          };
          setCartItems([...cartItems, newItem]);
          // setCartCount(cartCount + 1);
        }
      });
    }
  };

  const updatedCart = (itemId, size, count) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === itemId && item.sizes === size) {
          let newQuantity = item.quantity + count;

          if (newQuantity <= 0) {
            // Return null to indicate item should be removed
            return null;
          }

          // Update the item with the new quantity
          return { ...item, quantity: newQuantity };
        }
        return item; // Return unchanged item if it doesn't match
      })
      .filter((item) => item !== null); // Remove any null items

    setCartItems(updatedCartItems);
  };

  const removedCart = (itemId, size) => {
    console.log(itemId, size);
    const updatedCartItems = cartItems.filter((item) => {
      return !(item.id === itemId && item.sizes === size);
    });
    setCartItems(updatedCartItems);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    console.log(totalAmount);
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItems);
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0) + 0);
  }, [cartItems, cartItems.length]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    cartCount,
    updatedCart,
    removedCart,
    getCartAmount,
    navigate,
  };

  return (
    <div>
      <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;
