'use client'

import { useEffect, useState } from 'react';

import { ProductItem } from "./productItem";
import { getProducts } from '@/src/actions';
import { GetProduct } from '@/src/interfaces';
import { useProductStore } from '@/src/store';




export const ProductList = () =>{
    const [products, setProducts] = useState<GetProduct[]>([]);

    const{ filterGender } = useProductStore(state=>state)

    useEffect(()=>{
        const getLoadedProducts = async()=>{
            const resp = await getProducts();

            if(filterGender == 'all'){
                setProducts(resp)
            }else{
                const filtedproducts = resp.filter((product:GetProduct) => product.gender.name === filterGender);
                setProducts(filtedproducts)
            }
            
        }
        getLoadedProducts();

    },[filterGender])

    return (
        <>
            <section className="max-w-6xl mx-auto p-4 grid grid-cols-2 md:grid-cols-3 gap-6">
                { products.map(product=>(
                    <ProductItem key={product.id} product={product}/>
                ))}                
            </section>
        </>
    )
}
