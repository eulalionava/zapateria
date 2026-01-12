import { seed } from '@/src/seed/seed'
import { api } from '../api';

export const getCategories = async()=>{
    try {
        
        const response = await api.get('/categories');

        if(!response) return null

        return response.data.categories
        
    } catch (error) {
        throw new Error('No se encontraron las categorias')
    }
}