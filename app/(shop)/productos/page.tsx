'use client'
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";


export default function ProductPage() {
  const [selectImage,setSelectImage] = useState('image2');

  return (
    <div>
        <section className="relative bg-gradient-to-r from-teal-300 to-red-300 py-5 px-5 rounded-b-3xl shadow-md">
            <div className="flex flex-col justify-center items-center">
              <small className="text-black">Women shoes</small>
              <h1 className="font-bold text-black text-xl">Air jordan</h1>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center">
                <Image src="/images/tenis_basquet-1.png" alt="Nike Air Force Shoe" width={350} height={350} />
                <div className="w-[150px] h-[100px] border-gray-300 rounded-[100%] border-2 scale-230 rotate-x-75 shadow-2xl"></div>
              </div>
              <div className="flex-1 gap-1 flex items-center justify-start">
                <div className={
                  clsx(
                    "bg-gray-400 rounded-md hover:bg-gray-300",
                    {'border-2 border-white': selectImage == 'image1'}
                  )
                }>
                  <Image src="/images/tenis_basquet-1.png" alt="Nike Air Force Shoe" width={70} height={70} />
                </div>
                <div className={
                  clsx(
                    "bg-gray-400 rounded-md hover:bg-gray-300",
                    {'border-2 border-white': selectImage == 'image2'}
                  )
                }>
                  <Image src="/images/tenis_basquet-1.png" alt="Nike Air Force Shoe" width={70} height={70} />
                </div>
                <div className={
                  clsx(
                    "bg-gray-400 rounded-md hover:bg-gray-300",
                    {'border-2 border-white': selectImage == 'image3'}
                  )
                }>
                  <Image src="/images/tenis_basquet-1.png" alt="Nike Air Force Shoe" width={70} height={70} />
                </div>
              </div>
            </div>
            <h1 className="my-3 text-[30px] font-bold text-gray-700">$850</h1>
            <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus distinctio minus enim quos nisi fugiat. Nulla qui ipsam dolorem quisquam provident, quas laboriosam officia! Eligendi amet quisquam dicta ab.</p>
            <h1 className="text-gray-600 text-xl py-1">Numeros disponibles</h1>
            <div className="flex gap-3">
              <div className="bg-white rounded-sm text-gray-700 py-1 px-3 opacity-80">
                <small className="font-bold text-[20px]">25</small>
              </div>
              <div className="bg-white rounded-sm text-gray-700 py-1 px-3 opacity-80">
                <small className="font-bold text-[20px]">25</small>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-amber-600 rounded-sm p-2 my-4">Regresar</button>
            </div>
        </section>
    </div>
  )
}
