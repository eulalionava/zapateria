import { seed } from '@/src/seed/seed'
import { api } from '../api';

export const getProducts = async()=>{
    try {
        
        const response = await api.get('/products');

        if(!response) return null

        return response.data.productos
        
    } catch (error) {
        throw new Error('No se encontraron las tallas')
    }
}