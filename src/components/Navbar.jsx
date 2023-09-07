import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center  bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={22} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search food"
        />
      </div>

      {/* Cart button--------------------------------------- */}

      <button className="hidden py-2 md:flex rounded-full items-center bg-black text-white">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* Mobile menu --------------------------*/}
      {/* Overlay---------- */}
      {nav ? (
        <div className="bg-black/80 fixed h-screen w-full z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Sidedrawer---------- */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          {/* unordered list  */}
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl flex py-4">
              <TbTruckDelivery size={30} className="mr-4" />
              Orders
            </li>
            <li className="text-xl flex py-4">
              <MdOutlineFavorite size={30} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl flex py-4">
              <FaWallet size={30} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl flex py-4">
              <BiSolidHelpCircle size={30} className="mr-4" />
              Help
            </li>
            <li className="text-xl flex py-4">
              <AiFillTag size={30} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl flex py-4">
              <BsFillSaveFill size={30} className="mr-4" />
              Best One
            </li>
            <li className="text-xl flex py-4">
              <FaUserFriends size={30} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
