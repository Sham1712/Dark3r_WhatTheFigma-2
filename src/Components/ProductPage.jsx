    import React from 'react'
    import pr3 from "../assets/pr3.svg"
    import pr6 from "../assets/pr6.svg"
    import pr5 from "../assets/pr5.svg"
    import pr4 from "../assets/pr4.svg"
    import pr2 from "../assets/pr2.svg"
    import pr1 from "../assets/pr1.svg"
    import pr7 from "../assets/pr7.svg"
import Footer from './Footer'
import Navbar from './Navbar'

    export default function ProductPage() {
        return (
            <div>
                <Navbar/>
                <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8 mb-16">
                    <div className="w-full md:w-1/2">
                    <div className="rounded-lg overflow-hidden bg-[#f7f7f7]">
                        <img
                        src={pr3}
                        alt="Organic Gourmet Mushroom"
                        width={500}
                        height={500}
                        className="w-full object-cover"
                        />
                    </div>
                    </div>
                    <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold text-[#000000] mb-2">Organic Gourmet Mushroom</h1>
                    <p className="text-2xl font-medium text-[#000000] mb-4">$10.99</p>
                    <p className="text-[#828282] mb-6">
                        A premium selection of farm-fresh mushrooms, perfect for gourmet dishes and healthy meals.
                    </p>
                    <button className="w-full bg-black text-white py-3 rounded mb-6">Add to cart</button>
                    <div className="text-sm text-[#828282]">Sustainably grown | Freshly harvested | Packed with nutrients</div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6">Related products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="product-card hover:scale-105 transition">
                        <div className="bg-[#f7f7f7] rounded-lg overflow-hidden mb-3">
                        <img
                            src={pr6}
                            alt="Fresh Pears"
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        </div>
                        <h3 className="font-medium text-lg">Fresh Pears</h3>
                        <p className="text-[#828282] text-sm mb-1">Sweet and juicy organic pears</p>
                        <p className="font-medium">$10.99</p>
                    </div>
                    <div className="product-card hover:scale-105 transition">
                        <div className="bg-[#f7f7f7] rounded-lg overflow-hidden mb-3">
                        <img
                            src={pr5}
                            alt="Radish Greens"
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        </div>
                        <h3 className="font-medium text-lg">Radish Greens</h3>
                        <p className="text-[#828282] text-sm mb-1">Crisp and fresh garden radishes.</p>
                        <p className="font-medium">$10.99</p>
                    </div>
                    <div className="product-card hover:scale-105 transition">
                        <div className="bg-[#f7f7f7] rounded-lg overflow-hidden mb-3">
                        <img
                            src={pr4}
                            alt="Watermelon"
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        </div>
                        <h3 className="font-medium text-lg">Watermelon</h3>
                        <p className="text-[#828282] text-sm mb-1">Refreshing, naturally sweet watermelon.</p>
                        <p className="font-medium">$10.99</p>
                    </div>
                    <div className="product-card hover:scale-105 transition">
                        <div className="bg-[#f7f7f7] rounded-lg overflow-hidden mb-3">
                        <img
                            src={pr2}
                            alt="Organic Mushrooms"
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        </div>
                        <h3 className="font-medium text-lg">Organic Mushrooms</h3>
                        <p className="text-[#828282] text-sm mb-1">Rich in flavor, perfect for cooking</p>
                        <p className="font-medium">$10.99</p>
                    </div>
                    <div className="product-card hover:scale-105 transition">
                        <div className="bg-[#f7f7f7] rounded-lg overflow-hidden mb-3">
                        <img
                            src={pr1}
                            alt="Seasonal Vegetables"
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        </div>
                        <h3 className="font-medium text-lg">Seasonal Vegetables</h3>
                        <p className="text-[#828282] text-sm mb-1">Handpicked for the best quality</p>
                        <p className="font-medium">$10.99</p>
                    </div>
                    <div className="product-card hover:scale-105 transition">
                        <div className="bg-[#f7f7f7] rounded-lg overflow-hidden mb-3">
                        <img
                            src={pr7}
                            alt="Cherry Bunch"
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        </div>
                        <h3 className="font-medium text-lg">Cherry Bunch</h3>
                        <p className="text-[#828282] text-sm mb-1">Sun-ripened, sweet and tangy cherries.</p>
                        <p className="font-medium">$10.99</p>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
            </div>
        )
    }
