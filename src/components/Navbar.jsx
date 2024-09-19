import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import { IoIosMenu } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch } = useContext(ShopContext);
  console.log(visible);
  return (
    <div className="flex items-center justify-between pt-3  font-medium">
      <img src={assets.logo_img} alt="" className="w-40" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 ">
          <p>COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 ">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 ">
        <TfiSearch
          onClick={() => setShowSearch(!showSearch)}
          className="w-8 size-8 cursor-pointer"
        />
        <div className="group relative">
          <div>
            <CgProfile className="size-8 h-8 w-8 cursor-pointer" />
            <div className=" group-hover:block hidden absolute dropdown-menu right-18 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <SlBasket className="size-8 cursor-pointer w-8 min-w-8" />
          <p className=" absolute right-[-5px] top-[-5px] w-5 text-center leading-4 bg-black text-white aspect-square rounded-full tex-[15px]">
            10
          </p>
        </Link>
        <IoIosMenu
          onClick={() => setVisible(true)}
          className=" size-8 cursor-pointer w-8  sm:hidden"
        />
      </div>
      {/* Sidebar menu for samll screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? `w-full` : `w-0`
        }`}
      >
        <div className=" flex flex-col text-gray-600 gap-4 p-4">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-2"
          >
            <MdArrowBackIosNew className=" h-4" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
