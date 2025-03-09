
    import { Link, useNavigate } from "react-router-dom"
    import { Mail, Key } from "lucide-react"
    import login from "../assets/login.svg"

    export default function LoginPage() {
        const navigate = useNavigate();
    return (
        <div className="flex min-h-screen">
        <div className="flex w-full md:w-1/2 flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="mx-auto w-full max-w-md">
            <h1 className="mb-10 text-3xl font-bold text-[#171725]">Log In</h1>

            <form className="space-y-6">
                <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#969ab8]" />
                </div>
                <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-md border border-[#e0e2e9] py-3 pl-10 pr-3 text-[#171725] placeholder:text-[#adb0cd] focus:border-[#0062ff] focus:outline-none focus:ring-1 focus:ring-[#0062ff]"
                />
                </div>

                <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Key className="h-5 w-5 text-[#969ab8]" />
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-[#e0e2e9] py-3 pl-10 pr-3 text-[#171725] placeholder:text-[#adb0cd] focus:border-[#0062ff] focus:outline-none focus:ring-1 focus:ring-[#0062ff]"
                />
                </div>

                <button
                type="submit"
                className="w-full rounded-md bg-[#0062ff] py-3 text-white font-medium hover:bg-blue-600 transition-colors"
                
                >
                Log In
                </button>
            </form>

            <div className="mt-4 text-right">
                <Link to="/forget" className="text-[#0062ff] text-sm hover:underline">
                Forgot password?
                </Link>
            </div>

            <div className="mt-6 flex items-center justify-center">
                <span className="text-[#969ab8]">or</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 rounded-md border border-[#e0e2e9] py-2 px-4 hover:bg-gray-50 transition-colors">
                <GoogleIcon />
                <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 rounded-md border border-[#e0e2e9] py-2 px-4 hover:bg-gray-50 transition-colors">
                <FacebookIcon />
                <span className="text-sm font-medium">Facebook</span>
                </button>
            </div>

            <p className="mt-10 text-center text-[#969ab8]">
                Don't have an account?{" "}
                <Link to="/forget" className="text-[#0062ff] font-medium hover:underline">
                Sign Up
                </Link>
            </p>
            </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0">
            <img
                src={login}
                alt="Fresh produce with digital marketing illustration"
                fill
                className="object-cover"
                priority
                sizes="50vw"
            />
            </div>
        </div>
        </div>
    )
    }

    function GoogleIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z"
            fill="#4285F4"
        />
        <path
            d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
            fill="#34A853"
        />
        <path
            d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z"
            fill="#FBBC05"
        />
        <path
            d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
            fill="#EA4335"
        />
        </svg>
    )
    }

    function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.0062 0H0.99375C0.445312 0 0 0.445312 0 0.99375V17.0062C0 17.5547 0.445312 18 0.99375 18H9.61875V11.0438H7.275V8.3625H9.61875V6.35625C9.61875 4.01625 11.0363 2.74125 13.1044 2.74125C14.1 2.74125 14.9531 2.8125 15.1875 2.84625V5.25H13.7513C12.6244 5.25 12.4031 5.79 12.4031 6.5775V8.3625H15.0938L14.7656 11.0438H12.4031V18H17.0062C17.5547 18 18 17.5547 18 17.0062V0.99375C18 0.445312 17.5547 0 17.0062 0Z"
            fill="#1877F2"
        />
        </svg>
    )
    }

