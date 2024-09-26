import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { cartItems, currency, updatedCart, removedCart, navigate } =
    useContext(ShopContext);

  return (
    <div className="border-t pt-14">
      <div className=" text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
        <div>
          {cartItems.map((item, index) => {
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row items-center gap-4"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <img
                    className="w-16 sm:w-20"
                    src={item.image[0]}
                    alt={item.name}
                  />
                </div>

                {/* Name and Details Section */}
                <div className="flex-grow">
                  <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="text-sm sm:text-base">
                      {currency}
                      {item.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.sizes}
                    </p>
                  </div>
                </div>

                {/* Quantity Input and Buttons Section */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    className="px-2 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300"
                    onClick={() => updatedCart(item.id, item.sizes, -1)}
                  >
                    -
                  </button>
                  <p className="border  px-2 py-1 text-center">
                    {item.quantity}
                  </p>
                  <button
                    className="px-2 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300"
                    onClick={() => updatedCart(item.id, item.sizes, 1)}
                  >
                    +
                  </button>
                  {/* Delete Button */}
                  <RiDeleteBin5Line
                    className="size-8  hover:bg-gray-300 cursor-pointer"
                    onClick={() => removedCart(item.id, item.sizes)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
