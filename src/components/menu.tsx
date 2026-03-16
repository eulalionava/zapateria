'use client';

import { IoChevronForwardSharp } from "react-icons/io5";
import { useUserStore } from "../store";


export default function Menu() {
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

                <div className="hidden md:flex gap-4">
                    <span className="cursor-pointer">≡</span>
                </div>
                {/* <!-- Mobile Menu Button --> */}
                <button id="mobileBtn" onClick={showOnMobile} className="md:hidden text-3xl">☰</button>
            </nav>

            {/* <!-- Mobile Menu --> */}
            <div id="mobileMenu" className="md:hidden hidden bg-white shadow p-4 space-y-4">
                <a href="/" className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                    <small className="text-sm">Inicio</small>
                    <IoChevronForwardSharp />
                </a>
                {!isLogin && (
                    <a href="/login" className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                        <small className="text-sm">Iniciar sesión</small>
                        <IoChevronForwardSharp />
                    </a>
                )}        

                {isLogin && (
                    <>
                        <a href="/admin" className="flex items-center justify-between bg-gray-100 px-2 py-2 rounded-md text-gray-700">
                            <small className="text-sm">Administrar</small>
                            <IoChevronForwardSharp />
                        </a>
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
