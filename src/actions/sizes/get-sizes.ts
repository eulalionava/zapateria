import { seed } from '@/src/seed/seed'
import { api } from '../api';

export const getSizes = async()=>{
    try {
        
        const response = await api.get('/sizes');

        if(!response) return null

        return response.data.sizes
        
    } catch (error) {
        throw new Error('No se encontraron las tallas')
    }
}