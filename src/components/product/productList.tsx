'use client'

import { useEffect, useState } from 'react';

import { ProductItem } from "./productItem";
import { getProducts } from '@/src/actions';
import { GetProduct } from '@/src/interfaces';
import { useProductStore } from '@/src/store';




export const ProductList = () =>{
    const [products, setProducts] = useState<GetProduct[]>([]);
    const [productsTemp, setProductsTemp] = useState<GetProduct[]>([]);

    const{ filterGender } = useProductStore(state=>state)

    useEffect(()=>{
        const getLoadedProducts = async()=>{
            const resp = await getProducts();

            setProducts(resp)
            setProductsTemp(resp)
        }
        getLoadedProducts();

    },[])

    useEffect(()=>{
        if(filterGender == 'all'){
            setProductsTemp(products)
        }else{
            const filtedproducts = products.filter((product:GetProduct) => product.gender.name === filterGender);
            setProductsTemp(filtedproducts)
        }
    },[filterGender]);

    return (
        <>
            <section className="max-w-6xl mx-auto p-4 grid grid-cols-2 md:grid-cols-3 gap-6">
                { productsTemp.map(product=>(
                    <ProductItem key={product.id} product={product}/>
                ))}                
            </section>
        </>
    )
}
