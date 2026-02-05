
import Link from 'next/link'
import React from 'react'

export default function VentaPage(){
  
  return (
    <div className="bg-gradient-to-r from-teal-300 to-red-300 shadow-md min-h-screen px-4">
      <div className='flex flex-col items-center justify-center gap-2 pt-5'>
        <input type='text' className='w-full max-w-md mx-auto bg-gray-200 rounded-2xl px-6 py-3'/>
        <button className='w-[200px] bg-gray-300 rounded-2xl text-black p-2'>Buscar</button>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Grid principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Información */}
            <div className="space-y-6">

              <h1 className="text-3xl font-bold text-gray-900">
                White Rally <br /> Running sport shoes
              </h1>

              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry lorem Ipsum has been the industry.
              </p>

              {/* Precio */}
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">$80.00</span>
              </div>

            </div>

            {/* Imagen */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-2xl p-4">
                <img
                  src="/shoes.png"
                  alt="Product"
                  className="w-full max-w-sm object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 bg-gray-100 rounded-xl border-2 border-transparent hover:border-blue-500 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Opciones */}
            <div className="space-y-6">
              {/* Talla */}
              <div>
                <h3 className="font-semibold mb-3">Bag Size</h3>
                <div className="flex gap-3 flex-wrap">
                  {["16", "20", "28", "28", "28"].map((size, i) => (
                    <button
                      key={i}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center font-medium
                      ${i === 1 ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botones */}
              <div className="flex gap-4">
                <button className="flex-1 border border-red-600 text-red-600 rounded-xl py-3 font-semibold hover:bg-blue-50">
                  Cancelar
                </button>
                <button className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700">
                  Venta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
