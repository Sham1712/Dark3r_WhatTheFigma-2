    import React from 'react'
    import hero from "../assets/hero.svg"
    import { Link } from 'react-router-dom'

    export default function Hero() {
    return (
        <>
        {/* Text Section */}
        <section className="py-12 px-6 lg:px-[80px]">
            <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
                Fresh & Organic Food Delivered to Your Doorstep
            </h1>
            <p className="text-base lg:text-lg text-[#454545] mb-8">
                Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.
            </p>
            <Link to="/Article" className="inline-block bg-black text-white px-8 py-3 rounded">
                Article
            </Link>
            </div>
        </section>

        {/* Image Section */}
        <section className="px-6 lg:px-[80px]">
            <div className="w-full aspect-[2/1] lg:w-[1280px] lg:h-[640px] lg:aspect-auto rounded-xl overflow-hidden mx-auto">
            <img src={hero} alt="Hero" className="w-full h-full object-cover" />
            </div>
        </section>
        </>
    )
    }
