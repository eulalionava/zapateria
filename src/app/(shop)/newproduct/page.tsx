'use client';

import { useState } from "react";

export default function NewProductPage(){
    const [inDescuento,setInDescuento] = useState(false);
    const handleSelectSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const size = e.target.value;
        console.log("Tamaño seleccionado:", size);
    }

    const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const discount = e.target.value;
        setInDescuento(Boolean(discount))
    }

    return (
        <div className="bg-gradient-to-r from-teal-300 to-red-300 rounded-b-3xl shadow-md min-h-screen p-1">
            <div className="w-full max-w-md mx-auto flex flex-col bg-gray-400 rounded-2xl gap-4 p-6">
                <h1 className="text-3xl font-bold text-center text-black">Nuevo producto</h1>
                <div className="bg-white h-10 rounded-md w-full">
                    <input className="w-full h-full px-2 text-black" type="text" placeholder="nombre del producto"/>
                </div>
                <input className="w-full p-3 rounded-md text-black" type="file"/>
                <div className="bg-white h-10 rounded-md w-full">
                    <input className="w-full h-full px-2 text-black" type="text" placeholder="Cuantos en stock"/>
                </div>
                <div className="bg-white h-10 rounded-md w-full">
                    <input className="w-full h-full px-2 text-black" type="number" placeholder="Precio de fabrica"/>
                </div>
                <div className="bg-white h-10 rounded-md w-full">
                    <input className="w-full h-full px-2 text-black" type="number" placeholder="Precio de venta"/>
                </div>

                <div>
                    <label className="text-left text-black">Numeros disponibles</label>
                    <div className="flex gap-4">
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-xl text-black">38</label>
                            <input className="w-6 h-6" type="checkbox" value={38} onChange={(e)=>handleSelectSize(e)}/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-xl text-black">38</label>
                            <input className="w-6 h-6" type="checkbox"/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-xl text-black">38</label>
                            <input className="w-6 h-6" type="checkbox"/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-xl text-black">38</label>
                            <input className="w-6 h-6" type="checkbox"/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="text-xl text-black">38</label>
                            <input className="w-6 h-6" type="checkbox"/>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-10 rounded-md w-full">
                    <select className="w-full h-full text-black" defaultValue='nike'>
                        <option disabled selected>Marca</option>
                        <option value='nike'>Nike</option>
                    </select>
                </div>
                <div className="bg-white h-10 rounded-md w-full">
                    <select className="w-full h-full text-black" defaultValue='boy'>
                        <option disabled selected>Genero</option>
                        <option value='nike'>Nike</option>
                    </select>
                </div>
                <div className="bg-white h-10 rounded-md w-full">
                    <select className="w-full h-full text-black" defaultValue='casual'>
                        <option disabled selected>Categoria</option>
                        <option value='nike'>Nike</option>
                    </select>
                </div>
                <div className="bg-white h-10 rounded-md w-full">
                    <input className="w-full h-full px-2 text-black" type="number" placeholder="Color del producto"/>
                </div>
                <div className="flex gap-4">
                    <label className="text-xl text-black">En carrusel</label>
                    <input className="w-6 h-6" type="radio" name="active" value='true'  onChange={handleDiscount}/>
                </div>
                <div>
                    <label className="text-xl text-black">En promoción</label>
                    <div className="flex justify-between">
                        <div className="flex-1 flex justify-around">
                            <label className="text-md text-black">Activar</label>
                            <input className="w-6 h-6" type="radio" name="active" value='true'  onChange={handleDiscount}/>
                        </div>
                        <div className="flex-1 flex justify-around">
                            <label className="text-md text-black">Desactivar</label>
                            <input className="w-6 h-6" type="radio" name="active" value='false'  onChange={handleDiscount}/>
                        </div>
                    </div>
                </div>
                {inDescuento && (
                    <div className="bg-white h-10 rounded-md w-full">
                        <input className="w-full h-full px-2 text-black" type="number" placeholder="Cantidad de descuento"/>
                    </div>
                )}
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">Agregar Producto</button>
                
            </div>
        </div>
    )
}
