import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleAuthClick = () => {
        if (isLoggedIn) {
            logout();
            navigate("/");
        } else {
            navigate("/login");
        }
        setIsOpen(false);
    };

    return (
        <header className="container mx-auto px-6 lg:px-[80px] py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
                FreshHarvest
            </Link>
            <nav className="hidden md:flex items-center gap-8">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/About-us" className="hover:underline">
                    About Us
                </Link>
                <Link to="/shop" className="hover:underline">
                    Shop
                </Link>
                {isLoggedIn && (
                    <span className="text-gray-600">
                        Welcome, {user?.email}
                    </span>
                )}
                <button 
                    onClick={handleAuthClick}
                    className={`${isLoggedIn ? 'bg-red-600' : 'bg-black'} text-white px-4 py-2 rounded hover:scale-95 transition-all`}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </nav>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden block text-black focus:outline-none"
            >
                {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
                    <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/About-us" className="hover:underline" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>
                    <Link to="/shop" className="hover:underline" onClick={() => setIsOpen(false)}>
                        Shop
                    </Link>
                    {isLoggedIn && (
                        <span className="text-gray-600">
                            Welcome, {user?.email}
                        </span>
                    )}
                    <button
                        onClick={handleAuthClick}
                        className={`${isLoggedIn ? 'bg-red-600' : 'bg-black'} text-white px-6 py-2 rounded hover:scale-95 transition-all`}
                    >
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </div>
            )}
        </header>
    );
}
