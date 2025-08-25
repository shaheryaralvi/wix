import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-graycolor text-black">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-1  sm:px-6 lg:px-8 w-[95%]">

        {/* Flex container for logo, menu, and buttons */}
        <div className="flex items-center  h-16">


          {/* Desktop Menu */}
          <div className="hidden md:block ">
            <div className=" flex flex-row gap-4  items-center text-1xl  ">
              <Link to="/" className="  rounded-md hover:underline">
                About
              </Link>
              <Link to="/#about" className=" hover:underline  rounded-md  ">
                The Building
              </Link>
              <Link to="/contact" className=" hover:underline  rounded-md ">
                Location
              </Link>
              <Link to="/contact" className=" hover:underline  rounded-md ">
                Amenities
              </Link>
            </div>
          </div>





          {/* Brand  name */}
          {!isOpen &&
            (
              <div className="px-2 flex justify-start flex-1 md:justify-center">
                <Link to="/" className="font-bold text-xl">
                  LP/52
                </Link>
              </div>
            )
          }





          {/* Button and social Links */}
          <div className=" hidden   md:block md:flex  flex flex-row items-center gap-1 space-x-3 ml-auto">


            <button className='text-white bg-btnnav hover:bg-bgbtn hover:text-btnnav text-center pr-6 pl-6 pt-2 pb-2 text-1xl  '>
              Inquire
            </button>


            {/* Social Media Icons */}

            <Link to="https://instagram.com" target='_blank' className="text-black hover:text-gray-600 text-2xl">
              <FaInstagram />
            </Link>
            <Link to="https://youtube.com" target='_blank' className="text-black hover:text-gray-600 text-2xl">
              <FaYoutube />
            </Link>
            <Link to="https://facebook.com" target='_blank' className="text-black hover:text-gray-600 text-2xl">
              <FaFacebook />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden right-0 absolute">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-btnnav   focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>


      {/* New Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-graycolor z-50 ">
          {/* Close button at top */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Centered Menu Items */}
          <div className="flex flex-col items-center pt-20 h-full text-2xl space-y-6">
            <Link
              to="/"
              className="text-black hover:underline px-3 py-4"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/about"
              className="text-black hover:underline px-3 py-4  "
              onClick={() => setIsOpen(false)}
            >
              The Building
            </Link>
            <Link
              to="/contact"
              className="text-black hover:underline px-3 py-4  "
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <Link
              to="/contact"
              className="text-black hover:underline px-3 py-4  "
              onClick={() => setIsOpen(false)}
            >
              Amenities
            </Link>

            {/* Add Sign Up button in mobile menu */}
            <button className='w-1/3  text-white  bg-amber-700 text-1xl text-center p-2 mt-8 '>
              Inquire
            </button>

            <div className="flex flex-row gap-6 mt-6 ">
              <Link to="https://instagram.com" target='_blank' className="text-black hover:text-gray-600 text-2xl">
                <FaInstagram />
              </Link>
              <Link to="https://youtube.com" target='_blank' className="text-black hover:text-gray-600 text-2xl">
                <FaYoutube />
              </Link>
              <Link to="https://facebook.com" target='_blank' className="text-black hover:text-gray-600 text-2xl">
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      )}

    </nav>


  );
};

export default Navbar;