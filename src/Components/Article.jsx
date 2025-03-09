    import React from 'react'
    import hero from "../assets/hero.svg"
    import choose1 from "../assets/choose1.svg"
    import choose2 from "../assets/choose2.svg"
    import choose3 from "../assets/choose3.svg"
    import md1 from "../assets/md1.svg"
    import md2 from "../assets/md2.svg"
import Navbar from './Navbar'
import Footer from './Footer'
    export default function Article() {
        return (
            <div>
                <Navbar/>
                <div className="max-w-4xl mx-auto px-8 py-12 bg-white">
                    <article>
                        <header className="mb-6">
                        <h1 className="text-4xl font-bold leading-tight mb-2">The Secret to Eating Healthy & Fresh</h1>
                        <p className="text-gray-700 text-base">Learn how organic food benefits your health and the environment.</p>
                        </header>

                        <div className="mb-8">
                        <img
                            src={hero}
                            alt="Passion fruit cut in half with a glass of water on brown paper"
                            width={1200}
                            height={600}
                            className="w-full h-auto rounded-md"
                        />
                        </div>

                        <div className="mb-8 lg:max-w-2xl lg:ml-20">
                        <p className="text-sm mb-4">
                            Body text for your whole article or post. We&apos;ll put in some lorem ipsum to show how a filled-out page
                            might look:
                        </p>

                        <p className="text-sm mb-4">
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect
                            nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential
                            lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life
                            soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliqua, et Porter destination Toto
                            remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                        </p>

                        <p className="text-sm mb-4">
                            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim.
                            Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable
                            deserunt intricate airport handsome K-pop excepteur classic esse Asia Pacific labore.
                        </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <img
                            src={md1}
                            alt="Assorted fruits, cheese and wine on a table"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-md"
                            />
                        </div>
                        <div>
                            <img
                            src={md2}
                            alt="Citrus fruits and drinks on a table"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-md"
                            />
                        </div>
                        </div>

                        <div className="mb-8 lg:max-w-2xl lg:ml-20">
                        <p className="text-sm mb-4">
                            Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite
                            perfect nostrud nisi intricate. Punctual adipiscing Büzos, essential lovely tempor eiusmod irure. Exclusive
                            izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui
                            wardrobe aliqua, et Amadeus rock opera.
                        </p>

                        <p className="text-sm mb-4">
                            Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic
                            the best commodo nostrud delightful. Conversation aute wiley id. Qui sunt remarkable deserunt intricate
                            airport excepteur classic esse riot girl.
                        </p>
                        </div>
                    </article>
                    <div>
                        <h1 className="font-bold text-2xl lg:text-[38px] mb-6">Related articles or posts</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className='hover:scale-105 transition'>
                            <img
                                src={choose3}
                                alt=""
                                className="w-full max-w-[404px] h-auto"
                            />
                            <p className="font-semibold mt-2">5 Benefits of Organic Food</p>
                            <p className="text-[#828282]">Author</p>
                            </div>
                            <div className='hover:scale-105 transition'>
                            <img
                                src={choose2}
                                alt=""
                                className="w-full max-w-[404px] h-auto"
                            />
                            <p className="font-semibold mt-2">How to Store Fruits Properly</p>
                            <p className="text-[#828282]">Author</p>
                            </div>
                            <div className='hover:scale-105 transition'>
                            <img
                                src={choose1}
                                alt=""
                                className="w-full max-w-[404px] h-auto"
                            />
                            <p className="font-semibold mt-2">Best Superfoods for Your Diet</p>
                            <p className="text-[#828282]">Author</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
