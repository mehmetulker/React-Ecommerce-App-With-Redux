import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="flex flex-col  items-center justify-center mx-4">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-6 text-sm">
        <div>
          <img src={assets.logo_img} alt="" className="w-40" />
          {/* <p className="text-xl font-medium mb-5">Me & Sa Store</p> */}
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            iure vero ab fuga impedit culpa nemo id quo. Quisquam natus harum
            commodi unde totam dolorum sed blanditiis quod suscipit qui!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li> About us </li>
            <li>Delivery </li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+90-000-000-0000 </li>
            <li> specialulker@gmail.com </li>
            <li>Instagram </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ https://github.com/mehmetulker - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
