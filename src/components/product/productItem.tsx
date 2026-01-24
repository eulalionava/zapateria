'use client'
import Image from "next/image";

import { SeedProduct } from "@/src/seed/seed";

import { IoChevronForwardSharp } from "react-icons/io5";
import { motion } from "motion/react"
import { GetProduct } from "@/src/interfaces";

interface Props {
    product:GetProduct
}

export const ProductItem = ({product}:Props)=>{
    // console.log(product.images)
    return (
        <motion.div 
            initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.4}}  
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
        >
            <div className="h-30 flex items-center justify-center bg-gray-200 rounded-lg mb-4">
                <a href={`productos/${product.id}`}>
                    <span className="text-gray-500">
                        <img src={`${product.images[0]}`} className="w-full h-full" alt="Nike Air Force Shoe" width={150} height={150} />
                    </span>
                </a>
            </div>
            <h2 className="font-bold text-md text-black">{(product.name).substring(0, 10)}...</h2>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex items-center justify-center gap-2 bg-gray-500 p-1 rounded-md text-[12px]">
                <a href={`productos/${product.id}`}>
                    <span>Detalles</span>
                </a>
                <IoChevronForwardSharp />
            </div>
        </motion.div>
    )
}