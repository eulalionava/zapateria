'use client';

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation'
import { seed } from '@/seed/seed'

export default function SectionWraper() {
    return (
        <>
            <section className="relative bg-gradient-to-r from-teal-300 to-red-300 p-5 rounded-b-3xl shadow-md">
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
                            seed.products.map(product => product.inCarrusel == true && (
                                <SwiperSlide key={product.id}>
                                    <div className="flex justify-center">
                                        <div className="w-80 h-80 bg-white/30 backdrop-blur-lg rounded-3xl flex items-center justify-center">
                                            <span className="text-white text-xl">
                                                <Image src={`/images/${product.images[0]}`} className="w-full h-full" alt="Nike Neon Shoe" width={300} height={300} />
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        {/* <SwiperSlide key={2}>
                            <div className="flex justify-center">
                                <div className="w-80 h-80 bg-white/30 backdrop-blur-lg rounded-3xl flex items-center justify-center">
                                    <span className="text-white text-xl">
                                        <Image src="/images/tenis_basquet_2.png" className="w-full h-full" alt="Nike Neon Shoe" width={300} height={300} />
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key={3}>
                            <div className="flex justify-center">
                                <div className="w-80 h-80 bg-white/30 backdrop-blur-lg rounded-3xl flex items-center justify-center">
                                    <span className="text-white text-xl">
                                        <Image src="/images/tenis_basquet_2.png" className="w-full h-full" alt="Nike Neon Shoe" width={300} height={300} />
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
