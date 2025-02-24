import React, { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 w-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex flex-row items-center gap-3">
          <img src={assets.logo} className="flex w-15 h-5" />
        </div>

        {/* Middle: Navbar Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-8 text-black text-sm font-medium">
          {["Home", "Collection", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative flex items-center hover:text-gray-700 transition-all whitespace-nowrap no-underline text-black"
              style={{ textDecoration: "none" }} // Prevent underline
            >
              {item}
              <span className="w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
            </NavLink>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <img src={assets.search_icon} className="w-4 h-4 cursor-pointer" alt="Search" />

          {/* Profile Dropdown */}
          <div 
            className="relative" 
            ref={profileRef}
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <img
              src={assets.profile_icon}
              className="w-4 h-4 cursor-pointer"
              alt="Profile"
              onClick={() => setProfileOpen(!profileOpen)}
            />
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md">
                <div className="flex flex-col gap-2 w-36 py-5 bg-slate-100 text-black rounded">
                  <p className="hover:text-gray-700 cursor-pointer">My Profile</p>
                  <p className="hover:text-gray-700 cursor-pointer">Orders</p>
                  <p className="hover:text-gray-700 cursor-pointer">Logout</p>
                </div>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative no-underline text-black" style={{ textDecoration: "none" }}>
            <img src={assets.cart_icon} className="w-4 h-4 cursor-pointer" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-3 h-3 flex items-center justify-center bg-black text-white text-xs font-bold rounded-full">
              5
            </p>
          </NavLink>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-black" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-lg font-bold text-black">Menu</span>
          <button className="text-2xl text-black" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col px-6 py-4 text-black text-lg font-medium">
          {["Home", "Collection", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="flex items-center gap-3 py-3 hover:text-gray-700 transition-all no-underline text-black"
              style={{ textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              <img src={assets.dropdown_icon} className="w-5 h-5" alt="Dropdown Icon" />
              {item}
            </NavLink>
          ))}
        </ul>

        {/* Back Button */}
        <button 
          className="w-full py-3 text-center text-white bg-gray-800 hover:bg-gray-900 transition-all"
          onClick={() => setMenuOpen(false)}
        >
          Back
        </button>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {menuOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
