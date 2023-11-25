import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import icon from "../assets/payfi-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#6a5acd] py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-md font-semibold text-white">
          <Link to={'/'}>
            <img src={icon} className="h-12" alt="" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex space-x-4">
            <li className="relative group">
              <a className="text-sm text-white group-hover:underline">Home</a>
              <div className="text-sm hidden absolute left-0 mt-1 space-y-6 group-hover:block z-50 bg-white border border-gray-300 rounded-lg p-4">
                <Link to="/" className=" block text-gray-800">
                  Home 1
                </Link>
                <Link to="/" className=" block text-gray-800">
                  Home 2
                </Link>
                <Link to="/" className=" block text-gray-800">
                  Home 3
                </Link>
              </div>
            </li>
            <li className="relative group">
              <a className="text-sm text-white group-hover:underline">About</a>
              <div className="text-sm hidden absolute left-0 mt-1 space-y-6 group-hover:block z-50 bg-white border border-gray-300 rounded-lg p-4">
                <Link to="/" className="block text-gray-800">
                  About 1
                </Link>
                <Link to="/" className="block text-gray-800">
                  About 2
                </Link>
                <Link to="/" className="block text-gray-800">
                  About 3
                </Link>
              </div>
            </li>
            <li className="relative group">
              <a className="text-sm text-white group-hover:underline">
                Services
              </a>
              <div className="text-sm hidden absolute left-0 mt-1 space-y-6 group-hover:block z-50 bg-white border border-gray-300 rounded-lg p-4">
                <Link to="/" className="block text-gray-800">
                  services 1
                </Link>
                <Link to="/" className="block text-gray-800">
                  services 2
                </Link>
                <Link to="/" className="block text-gray-800">
                  services 3
                </Link>
              </div>
            </li>
            <li className="relative group">
              <a className="text-sm text-white group-hover:underline">
                Contact
              </a>
              <div className="text-sm hidden absolute left-0 mt-1 space-y-9 group-hover:block z-50 bg-white border border-gray-300 rounded-lg p-4">
                <Link to="/" className="block text-gray-800">
                  contack 1
                </Link>
                <Link to="/" className="block text-gray-800">
                  contack 2
                </Link>
                <Link to="/" className="block text-gray-800">
                  contack 3
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="block sm:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Services</li>
            <li className="text-white">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
