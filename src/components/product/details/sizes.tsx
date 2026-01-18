'use client'

import { getColectionSizes } from "@/src/actions"
import { GetProduct, Size } from "@/src/interfaces"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

interface Props {
    product:GetProduct
}

export const SizesPage = ({product}:Props) => {
    const sizes = product.sizes.split(',')
    const [ collectionSizes,setCollectionSizes ] = useState<Size[]>([]);

    useEffect(()=>{
        const fetchSizes = async() => {
            const response = await getColectionSizes(product.sizes)
            setCollectionSizes(response)
        }
        fetchSizes()
    },[])
    

    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.4}}>
            <div>
                <h1 className="my-3 text-[30px] font-bold text-gray-700">${product?.price}</h1>
                {/* <p className="text-gray-600 text-md mb-2">{product?.description}</p> */}
                <h1 className="text-gray-600 text-md font-bold py-1">Numeros disponibles</h1>
            </div>

            <div className="flex gap-3">
                {collectionSizes.map(size=>(
                    <div key={size.id} className="bg-white rounded-sm text-gray-700 py-1 px-3 opacity-80 my-2">
                        <small className="font-bold text-[20px]">{size.name}</small>
                    </div>  
                ))}
            </div>
        </motion.div>
    )
}
