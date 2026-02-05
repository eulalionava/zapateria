import Link from 'next/link'
import React from 'react'

export default function VentasPage(){
  return (
    <div className="bg-gradient-to-r from-teal-300 to-red-300 shadow-md min-h-screen p-4">
      {/* Card */}
      <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M4 6l1 14h14l1-14M9 6V4h6v2"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">Lorem ipsum</h3>
          <p className="text-sm text-gray-400">
            Consectetur adipiscing elit
          </p>

          {/* Rating */}
          <div className="flex items-center text-yellow-400 text-sm mt-1">
            ★★★★☆
          </div>

          {/* Price */}
          <p className="font-bold text-gray-800 mt-1">$165.99</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-end gap-2">
          <button className="text-red-400 hover:text-red-500">
            ❤
          </button>
          <button className="text-xs border border-red-400 text-red-400 px-3 py-1 rounded-full hover:bg-red-400 hover:text-white transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}
