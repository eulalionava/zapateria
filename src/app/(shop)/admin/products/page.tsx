import Link from 'next/link'
import React from 'react'

export default function ProductsPage(){
  return (
    <div className="bg-gradient-to-r from-teal-300 to-red-300 shadow-md min-h-screen p-4">
      {/* Card */}
      <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 text-red-500">
          <img src="/images/tenis1.PNG" alt="Icon" className="w-8 h-8"/>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">Lorem ipsum</h3>
          <p className="text-sm text-gray-400">
            Consectetur adipiscing elit
          </p>

          {/* Price */}
          <p className="font-bold text-gray-800 mt-1">$165.99</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-end gap-2">
          <button className="text-xs border border-green-400 text-green-400 px-3 py-1 rounded-full w-full hover:bg-green-400 hover:text-white transition">
            Promoción
          </button>
          <button className="text-xs border border-red-400 text-red-400 px-3 py-1 rounded-full w-full hover:bg-red-400 hover:text-white transition">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
