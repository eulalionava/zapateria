import { seed } from '@/src/seed/seed'

export const getProductById = async(id:number)=>{
    try {
        const producto = await seed.products.find(item=>item.id == id);

        if(!producto) return null

        return {
            producto
        }
        
    } catch (error) {
        throw new Error('No se encontro el producto')
    }
}