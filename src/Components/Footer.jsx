    import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"
    import { Link } from "react-router-dom"

    export default function Footer() {
    return (
        <footer className="w-full bg-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-6">
                <h2 className="text-2xl font-medium text-black">FreshHarvest</h2>
                <div className="flex space-x-4">
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                    <FaFacebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                    </a>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                    <FaLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                    </a>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                    <FaYoutube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                    </a>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                    <FaInstagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                    </a>
                </div>
                </div>

                <div>
                <h3 className="font-medium text-lg mb-4">Support</h3>
                <ul className="space-y-3">
                    <li>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                        FAQ
                    </a>
                    </li>
                    <li>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                        Contact Us
                    </a>
                    </li>
                    <li>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                        Returns
                    </a>
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="font-medium text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                    <li>
                    <Link to="/About-us" className="text-gray-600 hover:text-black transition-colors">
                        About Us
                    </Link>
                    </li>
                    <li>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                        Careers
                    </a>
                    </li>
                    <li>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                        Blog
                    </a>
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="font-medium text-lg mb-4">Legal</h3>
                <ul className="space-y-3">
                    <li>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                        Privacy Policy
                    </a>
                    </li>
                    <li>
                    <a to="" className="text-gray-600 hover:text-black transition-colors">
                        Terms of Service
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
    }
