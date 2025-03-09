    import React from "react";
    import Navbar from "./Navbar";
    import nigga from "../assets/nigga.svg"; // Replace with actual image path
    import Footer from "./Footer";

    const About = () => {
    return (
        <div className="min-h-screen bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-20 mt-16 grid md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
            <h2 className="text-5xl font-bold">About</h2>
            <p className="text-gray-500 mt-4 text-lg">
                Subheading for description or instructions
            </p>
            <p className="text-black mt-4 font-medium max-w-md">
                Body text for your whole article or post. We’ll put in some lorem
                ipsum to show how a filled-out page might look:
            </p>
            <p className="mt-6 text-black font-medium max-w-lg leading-relaxed">
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi intricate
                Content. Qui international first-class nulla ut. Punctual
                adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
                izakaya charming Scandinavian impeccable aute quality of life soft
                power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
                et Porter destination Toto remarkable officia Helsinki excepteur
                Basset hound. Zürich sleepy perfect consectetur.
            </p>
            </div>
            <div className="flex justify-center">
            <img
                src={nigga}
                className="w-full h-auto max-w-md rounded-lg shadow-lg"
                alt="Profile"
            />
            </div>
        </div>
        <div className="container mx-auto px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold">Contact me</h2>
            <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium">First name</label>
                    <input
                    type="text"
                    placeholder="Jane"
                    className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Last name</label>
                    <input
                    type="text"
                    placeholder="Smitherton"
                    className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                    />
                </div>
                </div>
                <div>
                <label className="block text-gray-700 font-medium">Email address</label>
                <input
                    type="email"
                    placeholder="email@janesfakedomain.net"
                    className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                />
                </div>
                <div>
                <label className="block text-gray-700 font-medium">Your message</label>
                <textarea
                    placeholder="Enter your question or message"
                    rows="4"
                    className="mt-2 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black"
                ></textarea>
                </div>
                <div>
                <button
                    type="submit"
                    className="w-full bg-black text-white font-medium py-3 rounded-lg hover:bg-gray-900 transition duration-300"
                >
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
        <Footer/>
        </div>
    );
    };

    export default About;
