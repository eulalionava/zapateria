'use client';

import { useEffect, useState } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation'
import { motion } from "motion/react"

import { seed } from '@/src/seed/seed'
import { GetProduct } from "../interfaces";
import { getProducts } from "../actions";

export default function SectionWraper() {
    const [products, setProducts] = useState<GetProduct[]>([]);
    
    useEffect(()=>{
        const getLoadedProducts = async()=>{
            const resp = await getProducts();
            setProducts(resp)
        }
        getLoadedProducts();
    },[])

    return (
        <>
            <motion.section
                initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.4}} 
                className="relative bg-gradient-to-r from-teal-300 to-red-300 p-5 rounded-b-3xl shadow-md"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* <!-- Shoe Image Placeholder --> */}
                    <Swiper
                        style={{
                            width: '100%',
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper flex"
                    >
                        {
                            products.map(product => product.inCarrusel == true && (
                                <SwiperSlide key={product.id}>
                                    <div className="flex justify-center">
                                        <div className="w-80 h-80 bg-white/30 backdrop-blur-lg rounded-3xl flex items-center justify-center">
                                            <span className="text-white text-xl">
                                                <img src={`${product.images[0]}`} className="w-full h-full" alt="Nike Neon Shoe" width={300} height={300} />
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </motion.section>
        </>
    )
}
