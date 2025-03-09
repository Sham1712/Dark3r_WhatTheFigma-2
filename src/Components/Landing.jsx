import React from 'react'
import Navbar from './Navbar'
import Hero from './hero'
import Categories from './Category'
import Footer from './Footer'
import cat4 from "../assets/category4.svg"
import Hq from "../assets/Hq.svg"
import taste from "../assets/taste.svg"
import av1 from "../assets/av1.svg"
import av2 from "../assets/av2.svg"
import av3 from "../assets/av3.svg"
import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'
import StaggeredContainer, { StaggerItem } from './StaggeredContainer'
import PageTransition from './PageTransition'

export default function Landing() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="container mx-auto px-4">
                    <AnimatedSection type="fadeDown" delay={0.2}>
                        <Hero />
                    </AnimatedSection>
                    <AnimatedSection type="fadeUp" delay={0.4}>
                        <Categories />
                    </AnimatedSection>
                </div>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <AnimatedSection type="fadeRight" delay={0.2}>
                            <div className="space-y-8">
                                <h1 className="text-4xl font-bold">Section heading</h1>

                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">Premium Quality</h3>
                                        <p className="text-[#828282]">We ensure the highest quality standards with farm-to-table freshness</p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">Sustainably Sourced</h3>
                                        <p className="text-[#828282]">
                                            Our products come from sustainable farming practices for a healthier planet.
                                        </p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold">Fast & Reliable Delivery</h3>
                                        <p className="text-[#828282]">Get your groceries delivered fresh and on time, every time.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Link to="/shop" className="bg-black text-white px-6 py-3 font-medium rounded">
                                        Shop Now
                                    </Link>
                                    <Link to="/Product-Page" className="bg-[#e6e6e6] text-black px-6 py-3 font-medium rounded">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection type="fadeLeft" delay={0.4}>
                            <div className="relative h-[400px] md:h-auto">
                                <img
                                    src={cat4}
                                    alt="Fresh fruits with camera and basket"
                                    fill
                                    className="object-cover rounded"
                                    priority
                                />
                            </div>
                        </AnimatedSection>
                    </section>

                    <section className="mb-24">
                        <AnimatedSection type="fadeUp">
                            <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <AnimatedSection type="fadeRight" delay={0.2}>
                                <div className="space-y-4">
                                    <div className="h-64 w-full">
                                        <img
                                            src={Hq}
                                            alt="Fresh ingredients with fruits and wine"
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mt-20">High-Quality, Fresh Ingredients</h3>
                                    <p className="text-[#828282]">
                                        We source only the freshest, organic ingredients to ensure the best quality.
                                    </p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection type="fadeLeft" delay={0.4}>
                                <div className="space-y-4">
                                    <div className="h-64 w-full">
                                        <img
                                            src={taste}
                                            alt="Croissants and grapes"
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mt-20">A Taste of Luxury & Comfort</h3>
                                    <p className="text-[#828282]">
                                        Enjoy artisanal, handcrafted baked goods and fresh produce, perfect for every occasion.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </section>

                    <section className="mb-24">
                        <AnimatedSection type="fadeUp">
                            <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
                        </AnimatedSection>
                        
                        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
                            <StaggerItem className="border border-[#e6e6e6] rounded p-6 space-y-4 hover:scale-105 transition">
                                <p className="font-medium">Absolutely love the fresh produce and quick delivery!</p>
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#f7f7f7]">
                                        <img src={av1} alt="Sam W" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Sam W</p>
                                        <p className="text-sm text-[#828282]">Description</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem className="border border-[#e6e6e6] rounded p-6 space-y-4 hover:scale-105 transition">
                                <p className="font-medium">Their organic fruits are the best I've ever tasted!</p>
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#f7f7f7]">
                                        <img src={av2} alt="Liam P" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Liam P.</p>
                                        <p className="text-sm text-[#828282]">Description</p>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem className="border border-[#e6e6e6] rounded p-6 space-y-4 hover:scale-105 transition">
                                <p className="font-medium">Highly recommend for anyone looking for quality groceries</p>
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#f7f7f7]">
                                        <img src={av3} alt="Sophia M" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Sophia M.</p>
                                        <p className="text-sm text-[#828282]">Description</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggeredContainer>
                    </section>

                    <AnimatedSection type="fadeUp">
                        <section className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <h2 className="text-3xl font-bold">Join Us for a Healthier Lifestyle!</h2>
                            <div className="flex gap-4">
                                <Link to="/shop" className="bg-black text-white px-8 py-3 font-medium rounded">
                                    Shop
                                </Link>
                                <Link to="/Product-Page" className="bg-[#e6e6e6] text-black px-8 py-3 font-medium rounded">
                                    Learn More
                                </Link>
                            </div>
                        </section>
                    </AnimatedSection>
                </main>
                <Footer/>
            </div>
        </PageTransition>
    )
}
