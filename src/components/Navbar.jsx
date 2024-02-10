"use client";

import Link from "next/link";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const { handleCartClick } = useShoppingCart();

  const handlesmallscreen = () => {
    setmenu(!menu);
  };

  return (
    <header className=" fixed  h-16 z-[5] w-full bg-white ">
      {/* for pc view */}
      <nav className="h-16 hidden  w-full z-[5] md:flex justify-between items-center text-black     ">
        {/* Logo */}
        <div className=" ml-4 flex justify-center items-center">
          <span className="ml-4 text-2xl font-sans text-red-500 ">
            BIKE<span className="text-black ">ZZ</span>
          </span>
        </div>
        <ul className="flex m-2">
          <li className=" mx-3 hover:text-red-500 font-serif text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className=" mx-3 hover:text-red-500 font-serif text-xl">
            <Link href="/About">About</Link>
          </li>
          
          <li className=" mx-3 hover:text-red-500 font-serif text-xl">
            <Link href="/Ourbikez"> Our Bikes</Link>
          </li>
          <li
            className=" mx-3 hover:text-red-500 font-serif text-xl hover:cursor-pointer"
            onClick={handleCartClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </li>
        </ul>
      </nav>
      {/* for mobile view */}
      <nav className=" md:hidden h-16 flex items-center justify-between bg-white text-red-500   ">
        {/* Logo */}
        <div className=" flex md:hidden ml-5 ">
          <span className=" text-xl text-red-500 font-sans font-semibold leading-relaxed">
            BIKE<span className=" font-sans text-black">ZZ</span>
          </span>
        </div>
        {/* mobile menu */}
       <div className="flex md:hidden">
       <span className=" mr-3 flex justify-center items-center" onClick={handleCartClick}> 
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            </span>
        <div className="flex md:hidden" onClick={handlesmallscreen}>
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        </div>
        
        <div
          className={
            menu
              ? "md:hidden absolute top-16 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-white ease-in duration-300 text-center z-10"
              : "md:hidden absolute top-16 right-0 bottom-0 left-[-100%] justify-center items-center w-full h-screen ease-out duration-300 z-10 bg-white"
          }
        >
          <div className=" mb-80 w-full">

    


            <ul className=" text-red-500">
              <li
                className="my-1 font-serif text-xl "
                onClick={handlesmallscreen}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className="my-1 font-serif text-xl  "
                onClick={handlesmallscreen}
              >
                <Link href="/About">About</Link>
              </li>
              <li
                className="my-1 font-serif text-xl  "
                onClick={handlesmallscreen}
              >
                <Link href="/Ourbikez">Our Bikes</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
