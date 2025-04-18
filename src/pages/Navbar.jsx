import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">
                    <NavLink to="/" className="hover:text-gray-200">
                        Twitter Clone
                    </NavLink>
                </div>
                <div className="space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-gray-200 font-semibold'
                                : 'hover:text-gray-200'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/explore"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-gray-200 font-semibold'
                                : 'hover:text-gray-200'
                        }
                    >
                        Explore
                    </NavLink>
                    <NavLink
                        to="/notifications"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-gray-200 font-semibold'
                                : 'hover:text-gray-200'
                        }
                    >
                        Notifications
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-gray-200 font-semibold'
                                : 'hover:text-gray-200'
                        }
                    >
                        Profile
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;