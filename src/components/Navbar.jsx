import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-5 right-5 bg-white/10 backdrop-blur-lg rounded-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-gray-300 bg-clip-text text-transparent">
            EduMorph
          </div>

          <div className="hidden md:flex space-x-6 mb">
            <Link to="/" className="text-gray-300 hover:text-pink-400">Home</Link>
            <Link to="/aboutus" className="text-gray-300 hover:text-pink-400">About Us</Link>
            <Link to="/contact" className="text-gray-300 hover:text-pink-400">Contact Us</Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
              Login
            </button>
            <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-500">
              Sign Up
            </button>
          </div>

          {/* Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-pink-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/*Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-white/10 backdrop-blur-lg border border-gray-600 rounded-xl">
            <a href="#about" className="text-gray-300 hover:text-pink-400">About Us</a>
            <a href="#contact" className="text-gray-300 hover:text-pink-400">Contact Us</a>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 border border-gray-500">
              Login
            </button>
            <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-500 border border-gray-500">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;