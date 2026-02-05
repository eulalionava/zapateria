'use client';

import { IoChevronForwardSharp } from "react-icons/io5";
import { useUserStore } from "../store";
import { useRouter } from "next/navigation";

export default function Menu() {
    const router = useRouter()
    const { isLogin,desactiveLogin } = useUserStore();

    const showOnMobile = () => {
        const mobileMenu = document.getElementById("mobileMenu");
        mobileMenu?.classList.toggle("hidden");
    }

    const CloseSesion = () => {
        desactiveLogin();
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
                    <li className="text-gray-600 hover:text-black cursor-pointer">Unisex</li>
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
                    <a className="block">Unisex</a>
                    <IoChevronForwardSharp />
                </div>
                
                {!isLogin && (
                    <a href="/login" className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                        <small className="text-sm">Login</small>
                        <IoChevronForwardSharp />
                    </a>
                )}        

                {isLogin && (
                    <>
                        <div onClick={()=>router.push("/admin")} className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                            <small className="text-sm">Admin</small>
                            <IoChevronForwardSharp />
                        </div>
                        <div onClick={()=>router.push("/newproduct")} className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                            <small className="text-sm">Nuevo Producto</small>
                            <IoChevronForwardSharp />
                        </div>
                        <div className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                            <a className="block" onClick={CloseSesion}>Cerrar sesion</a>
                            <IoChevronForwardSharp />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
