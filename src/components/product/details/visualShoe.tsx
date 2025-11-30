'use client'

import Image from "next/image";

import clsx from "clsx";
import { useState } from 'react'
import { SeedProduct } from "@/src/seed/seed";

import { motion } from "motion/react"


interface Props {
    product?:SeedProduct
}

export const VisualShoe = ({product}:Props) => {

    const [selectImage, setSelectImage] = useState(product?.images[0]);

    const OnSelectImage = (img:string)=>{
        setSelectImage(img)
    }

    return (
        <motion.div className="flex flex-col" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.4}}>
            <div className="flex flex-col items-center justify-center container-3d">
                <Image src={`/images/${selectImage}`} className="" alt="Nike Air Force Shoe" width={350} height={350} />
                <div className="w-[150px] h-[100px] border-gray-300 rounded-[100%] border-2 scale-230 rotate-x-75 shadow-2xl"></div>
            </div>
            <div className="flex-1 gap-1 flex items-center justify-start">
                {product?.images.map(img=>(
                    <div
                        key={img}
                        className={
                            clsx(
                                "bg-gray-400 rounded-md hover:bg-gray-300",
                                { 'border-2 border-white': selectImage == img }
                            )
                        }
                        onClick={()=>OnSelectImage(img)}
                    >
                        <Image src={`/images/${img}`}  alt="Nike Air Force Shoe" width={50} height={50} />
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
