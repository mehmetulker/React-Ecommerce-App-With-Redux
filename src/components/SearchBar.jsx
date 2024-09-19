import React, { useContext, useEffect } from "react";
import { TfiSearch } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location]);

  return showSearch ? (
    <div className="text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm "
          type="text"
          placeholder="Search"
        />
        <TfiSearch className="w-8 size-4 cursor-pointer" />
      </div>
      <RxCross2
        onClick={() => setShowSearch(false)}
        className=" inline  size-8 h-6 w-6 cursor-pointer"
      />
    </div>
  ) : null;
}

export default SearchBar;
