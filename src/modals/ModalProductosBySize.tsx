'use client'

import { GetProduct } from "@/src/interfaces";
import { Modal } from "./Modal"
import { useEffect, useState } from "react";
import { SpinnerLoading } from "@/src/components/SpinnerLoading";
import { getProductosBySize } from "../actions";
import Swal from 'sweetalert2'

interface Props{
    desactivar:()=>void,
    gender:string,
    category:string,
    size:string,
}

export const ModalProductosBySize = ({desactivar,gender,category,size}:Props) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [products, setProducts] = useState<GetProduct[]>([]);

    const getProducts = async()=>{
        setLoadingProducts(true);
        setProducts([]);

        try {
        const resp = await getProductosBySize(gender, category, size);

         setProducts(resp ?? []);

        } catch {
            Swal.fire('Error', 'No se pudieron cargar los productos', 'error');
        } finally {
            setLoadingProducts(false);
        }
    }

    useEffect(()=>{
        getProducts();
    },[gender, category, size]);

    return(
        <Modal desactivar={desactivar}>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
                <h2 className="text-xl font-bold text-black mb-4 text-center">
                    Productos talla {selectedSize}
                </h2>

                {loadingProducts ? (
                    <div className="flex justify-center py-10">
                    <SpinnerLoading size={40} color="black" />
                    </div>
                ) : products.length === 0 ? (
                    <p className="text-center text-gray-500">No hay productos en esta talla</p>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                        <div
                        key={product.id}
                        className="bg-gray-100 rounded-xl p-3 shadow hover:shadow-md transition"
                        >
                        <div className="h-32 flex items-center justify-center bg-white rounded-lg mb-2 overflow-hidden">
                            <img
                            src={`${product.images[0]}`}
                            alt={product.name}
                            className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="font-bold text-sm text-black truncate">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.marca}</p>
                        <p className="text-green-600 font-bold">${product.price}</p>
                        </div>
                    ))}
                    </div>
                )}
                </div>
        </Modal>
    )
}