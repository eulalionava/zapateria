import { seed } from '@/src/seed/seed'
import { api } from '../api';

export const getProductById = async(id:string)=>{
    try {
        const response = await api.get(`/products/${id}`);

        if(!response) return null

        return response.data.producto
        
    } catch (error) {
        throw new Error('No se encontro el producto')
    }
}
