
import { seed } from '@/seed/seed'
import { ProductItem } from "./productItem";

export const ProductList = () =>{
    return (
        <>
            <section className="max-w-6xl mx-auto mt-10 p-4 grid grid-cols-2 md:grid-cols-3 gap-6">
                { seed.products.map(product=>(
                    <ProductItem key={product.id} product={product}/>
                ))}                
            </section>
        </>
    )
}
