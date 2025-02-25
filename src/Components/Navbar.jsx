import React, { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const sidebarRef = useRef(null);
  const profileRef = useRef(null);

  // Close sidebar/profile when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-15 h-5" alt="Logo" />
        </Link>

        {/* Middle: Navbar Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-8 text-black text-sm font-medium">
          {["Home", "Collection", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
							style={{ textDecoration: "none" }}
              className="hover:text-gray-700 transition-all  text-black no-underline"
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Right: Icons & Mobile Menu Button */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          {assets.search_icon && (
            <img src={assets.search_icon} className="w-5 h-5 cursor-pointer" alt="Search" />
          )}

          {/* Profile Dropdown */}
          <div 
            className="relative" 
            ref={profileRef}
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            {assets.profile_icon && (
              <img
                src={assets.profile_icon}
                className="w-5 h-5 cursor-pointer"
                alt="Profile"
                onClick={() => setProfileOpen(!profileOpen)}
              />
            )}
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
          <NavLink to="/cart" className="relative text-black no-underline">
            {assets.cart_icon && (
              <img src={assets.cart_icon} className="w-5 h-5 cursor-pointer" alt="Cart" />
            )}
            <p className="absolute right-[-5px] bottom-[-5px] w-3 h-3 flex items-center justify-center bg-black text-white text-xs font-bold rounded-full">
              5
            </p>
          </NavLink>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-black no-underline" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
			<div
				ref={sidebarRef}
				className={`fixed top-0 left-0 h-[300px] w-32 bg-white shadow-lg transform ${
					menuOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
			>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-lg font-bold text-black">Menu</span>
          <button className="text-xl text-black" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col px-4 py-4 text-black text-lg font-medium">
          {["Home", "Collection", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="py-2 hover:text-gray-700 transition-all no-underline text-black"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
