import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full top-0 z-50">
      {/* Top Navbar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">
          <NavLink to="/" className="hover:text-gray-200">
            Twitter Clone
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-gray-200 font-semibold' : 'hover:text-gray-200'}>Home</NavLink>
          <NavLink to="/explore" className={({ isActive }) => isActive ? 'text-gray-200 font-semibold' : 'hover:text-gray-200'}>Explore</NavLink>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? 'text-gray-200 font-semibold' : 'hover:text-gray-200'}>Notifications</NavLink>
        </div>

        {/* Profile Button */}
        <NavLink to="/profile" className="hidden md:flex items-center space-x-2 hover:text-gray-200">
          <img src={user?.avatar_url || "/default-avatar.png"} alt="Avatar" className="w-8 h-8 rounded-full"/>
          <span>{user?.username || "Profile"}</span>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-blue-700 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition duration-300 md:hidden`}>
        <button className="absolute top-3 right-3 text-white" onClick={() => setIsOpen(false)}>✖</button>
        <div className="p-4 flex flex-col space-y-4 text-white">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/explore" className="hover:text-gray-300">Explore</NavLink>
          <NavLink to="/notifications" className="hover:text-gray-300">Notifications</NavLink>
          <hr className="border-gray-400 my-2"/>
          <NavLink to="/profile" className="flex items-center space-x-2 hover:text-gray-300">
            <img src={user?.avatar_url || "/default-avatar.png"} alt="Avatar" className="w-10 h-10 rounded-full"/>
            <span>{user?.username || "Profile"}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;