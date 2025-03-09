    import { Link } from "react-router-dom";
    import React from "react";
    import shop1 from "../assets/shop1.svg";
    import shop2 from "../assets/shop2.svg";
    import shop3 from "../assets/shop3.svg";
    import shop4 from "../assets/shop4.svg";
    import shop5 from "../assets/shop5.svg";
    import shop6 from "../assets/shop6.svg";
import Footer from "./Footer";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
    export default function Shop() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

            const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
            };
    return (
        <div>
            <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        
        {/* Main Content */}
        <div className="flex-grow bg-white">
            {/* Header */}
            <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-transparent absolute top-0 left-0 right-0 z-10 w-full">
                    <div className="text-2xl md:text-3xl text-white font-medium">FreshHarvest</div>
                    
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-white focus:outline-none" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    
                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-white hover:text-gray-200">
                        Home
                        </Link>
                        <Link to="/about-us" className="text-white hover:text-gray-200">
                        About Us
                        </Link>
                        <Link to="/product-page" className="text-white hover:text-gray-200">
                        Learn More
                        </Link>
                        <Link to="/login">
                        <button className="px-4 py-1 border border-white text-white rounded hover:bg-white hover:bg-opacity-20 transition-colors">
                            Login
                        </button>
                        </Link>
                    </nav>
                    
                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className="absolute top-16 left-0 right-0 bg-gray-800 md:hidden">
                        <div className="flex flex-col p-4 space-y-4">
                            <Link 
                            to="/" 
                            className="text-white hover:text-gray-200"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            Home
                            </Link>
                            <Link 
                            to="/about-us" 
                            className="text-white hover:text-gray-200"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            About Us
                            </Link>
                            <Link 
                            to="/product-page" 
                            className="text-white hover:text-gray-200"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            Learn More
                            </Link>
                            <Link 
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <button className="px-4 py-1 border border-white text-white rounded hover:bg-white hover:bg-opacity-20 transition-colors w-full text-left">
                                Login
                            </button>
                            </Link>
                        </div>
                        </div>
                    )}
                    </header>

            {/* Hero Section */}
            <section className="relative h-[720px] flex items-center justify-center">
            <div className="absolute inset-0">
                <img 
                src={shop1} 
                alt="Sliced pears" 
                className="w-full h-full object-cover filter grayscale-[10%] brightness-90" 
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Fresh & Organic</h1>
                <p className="max-w-md mb-8 mx-auto">Explore our selection of premium fresh produce and organic food</p>
                <button className="px-8 py-3 rounded bg-black text-white hover:bg-gray-800 transition-colors">
                Shop
                </button>
            </div>
            </section>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-8">
            {/* Seasonal Picks Section */}
            <section className="py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Seasonal Picks</h2>
                    <p className="text-[#828282] mb-6">A subheading for this section, as long or as short as you like</p>
                    <Link to="/Product-Page">
                        <button className="px-6 py-2 bg-[#E6E6E6] text-[#000000] hover:bg-gray-300 transition-colors">
                            Learn More
                    </button>
                    </Link>
                </div>
                <div>
                    <img
                    src={shop2}
                    alt="Pears"
                    className="w-full h-auto"
                    />
                </div>
                </div>
            </section>

            {/* Best Sellers Section */}
            <section className="py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                    <img
                    src={shop3}
                    alt="Watermelon slices"
                    className="w-full h-auto"
                    />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Best Sellers</h2>
                    <p className="text-[#828282] mb-6">A subheading for this section, as long or as short as you like</p>
                    <Link to="/Product-Page">
                        <button className="px-6 py-2 bg-[#E6E6E6] text-[#000000] hover:bg-gray-300 transition-colors">
                            Learn More
                    </button>
                    </Link>
                </div>
                </div>
            </section>

            {/* Fresh & Organic Selection */}
            <section className="py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-12">Fresh & Organic Selection</h2>
                <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <img
                    src={shop4}
                    alt="Pears"
                    className="w-full h-auto mb-4"
                    />
                    <h3 className="font-medium mb-1">Featured product</h3>
                    <p className="text-[#828282] text-sm mb-2">Handpicked premium pears, rich in flavor and nutrients</p>
                    <p className="font-medium">$10.99</p>
                </div>
                <div className="space-y-8">
                    <div>
                    <img
                        src={shop5}
                        alt="Fruits"
                        className="w-full h-auto mb-4"
                    />
                    <h3 className="font-medium mb-1">Fruits</h3>
                    <p className="text-[#828282] text-sm mb-2">A diverse blend of fresh fruits for a balanced taste</p>
                    <p className="font-medium">$9.99</p>
                    </div>
                    <div>
                    <img
                        src={shop6}
                        alt="Mushrooms"
                        className="w-full h-auto mb-4"
                    />
                    <h3 className="font-medium mb-1">Mushrooms</h3>
                    <p className="text-[#828282] text-sm mb-2">Organic mushrooms, perfect for gourmet dishes</p>
                    <p className="font-medium">$8.99</p>
                    </div>
                </div>
                </div>
            </section>

            {/* Why Shop With Us */}
            <section className="py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-12">Why Shop With Us?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col items-start">
                    <div className="w-8 h-8 mb-4 flex items-center justify-center rounded-full border border-[#e6e6e6]">
                    <span className="text-[#828282]">⊕</span>
                    </div>
                    <h3 className="font-medium mb-2">Sustainability First</h3>
                    <p className="text-[#828282] text-sm">Our products are ethically sourced and environmentally friendly.</p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="w-8 h-8 mb-4 flex items-center justify-center rounded-full border border-[#e6e6e6]">
                    <span className="text-[#828282]">⊕</span>
                    </div>
                    <h3 className="font-medium mb-2">Quality Assurance</h3>
                    <p className="text-[#828282] text-sm">
                    Every product goes through a rigorous quality check before reaching you.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="w-8 h-8 mb-4 flex items-center justify-center rounded-full border border-[#e6e6e6]">
                    <span className="text-[#828282]">⊕</span>
                    </div>
                    <h3 className="font-medium mb-2">Customer Satisfaction</h3>
                    <p className="text-[#828282] text-sm">
                    We prioritize customer experience with reliable service and fresh produce.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="w-8 h-8 mb-4 flex items-center justify-center rounded-full border border-[#e6e6e6]">
                    <span className="text-[#828282]">⊕</span>
                    </div>
                    <h3 className="font-medium mb-2">Fresh, Every Day</h3>
                    <p className="text-[#828282] text-sm">We ensure daily restocking for the best and freshest selection.</p>
                </div>
                </div>
            </section>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    );
    }