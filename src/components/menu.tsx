'use client';

import { IoChevronForwardSharp } from "react-icons/io5";

export default function Menu() {
    
    const showOnMobile = () => {
        const mobileMenu = document.getElementById("mobileMenu");
        mobileMenu?.classList.toggle("hidden");
    }

    return (
        <>
            <nav className="w-full bg-[#0e7675] shadow p-4 flex justify-between items-center">
                <div className="text-xl font-bold">Tenis Nava</div>

                {/* <!-- Desktop Menu --> */}
                <ul className="hidden md:flex gap-6">
                    <li className="text-gray-600 hover:text-black cursor-pointer">Niña</li>
                    <li className="text-gray-600 hover:text-black cursor-pointer">Niño</li>
                    <li className="text-gray-600 hover:text-black cursor-pointer">Mujer</li>
                    <li className="text-gray-600 hover:text-black cursor-pointer">Hombre</li>
                </ul>


                <div className="hidden md:flex gap-4">
                    <span className="cursor-pointer">≡</span>
                </div>
                {/* <!-- Mobile Menu Button --> */}
                <button id="mobileBtn" onClick={showOnMobile} className="md:hidden text-3xl">☰</button>
            </nav>

            {/* <!-- Mobile Menu --> */}
            <div id="mobileMenu" className="md:hidden hidden bg-white shadow p-4 space-y-4">
                <div className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                    <a className="block">Niño</a>
                    <IoChevronForwardSharp />
                </div>
                <div className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                    <a className="block">Niña</a>
                    <IoChevronForwardSharp />
                </div>
                <div className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                    <a className="block">Mujer</a>
                    <IoChevronForwardSharp />
                </div>
                <div className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                    <a className="block">Hombre</a>
                    <IoChevronForwardSharp />
                </div>
                <div className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                    <a className="block">Login</a>
                    <IoChevronForwardSharp />
                </div>
            </div>
        </>
    )
}
