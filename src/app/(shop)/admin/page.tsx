import React from 'react'
import Link from 'next/link'
import { FaArrowAltCircleRight } from "react-icons/fa";

const cards = [
  { href: '/admin/venta', title: 'Venta de producto', desc: 'Realizar compra de un producto',bg:'bg-orange-200' },
  { href: '/admin/ventas', title: 'Todas las ventas', desc: 'Ver el historial de compras',bg:'bg-blue-200' },
  { href: '/admin/inventarios', title: 'Inventarios', desc: 'Inversión y ganancias',bg:'bg-green-200' },
  { href: '/admin/promociones', title: 'Lanzamiento promoción', desc: 'Crear y lanzar promociones',bg:'bg-purple-200' },
  { href: '/admin/tallas', title: 'Tallas', desc: 'Administrar tallas disponibles',bg:'bg-yellow-200' },
]

export default function AdminPage(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {cards.map((item) => (
            <div
                key={item.title}
                className={`relative flex items-center justify-between ${item.bg} rounded-lg shadow-md px-2 py-5 gap-2`}
            >
                {/* Content */}
                <div className="flex-1">
                    <h3 className={`font-semibold text-black`}>
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        {item.desc}
                    </p>
                </div>

                {/* Right circle */}
                <a href={item.href} 
                    className={`w-14 h-14 rounded-full bg-white flex items-center justify-center ring-4 hover:cursor-pointer`}
                >
                    <span className={`font-bold ${item.title}`}>
                        <FaArrowAltCircleRight color='black' size={30} />
                    </span>
                </a>
            </div>
        ))}
      </div>
    </div>
  )
}
