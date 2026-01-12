'use client'

import { useEffect, useState } from 'react';

import { ProductItem } from "./productItem";
import { getProducts } from '@/src/actions';
import { GetProduct } from '@/src/interfaces';

export const ProductList = () =>{
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
            <section className="max-w-6xl mx-auto mt-10 p-4 grid grid-cols-2 md:grid-cols-3 gap-6">
                { products.map(product=>(
                    <ProductItem key={product.id} product={product}/>
                ))}                
            </section>
        </>
    )
}
