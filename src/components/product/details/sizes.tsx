'use client'

import { SeedProduct } from "@/src/seed/seed"
import { motion } from "motion/react"

interface Props {
    product?:SeedProduct
}

export const SizesPage = ({product}:Props) => {
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.4}}>
            <div>
                <h1 className="my-3 text-[30px] font-bold text-gray-700">${product?.price}</h1>
                <p className="text-gray-600 text-md mb-2">{product?.description}</p>
                <h1 className="text-gray-600 text-md font-bold py-1">Numeros disponibles</h1>
            </div>

            <div className="flex gap-3">
                {product?.sizes.map(size=>(
                    <div key={size} className="bg-white rounded-sm text-gray-700 py-1 px-3 opacity-80 my-2">
                        <small className="font-bold text-[20px]">{size}</small>
                    </div>  
                ))}
            </div>
        </motion.div>
    )
}
