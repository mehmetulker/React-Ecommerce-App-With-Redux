import React from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo_img} alt="" className="w-40" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 ">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
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
        <TfiSearch className="w-8 size-8 cursor-pointer" />
        <div className="group relative">
          <div>
            <CgProfile className="size-8 h-8 w-8 cursor-pointer" />
            <div className=" group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/cart" className="relative">
            <SlBasket className="size-8 cursor-pointer" />
            <p className=" absolute right-[-5px] top-[-5px] w-5 text-center leading-4 bg-black text-white aspect-square rounded-full tex-[15px]">
              10
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
