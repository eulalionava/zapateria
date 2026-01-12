import { seed } from '@/src/seed/seed'
import { api } from '../api';

export const getGenders = async()=>{
    try {
        
        const response = await api.get('/genders');

        if(!response) return null

        return response.data.genders
        
    } catch (error) {
        throw new Error('No se encontraron los géneros')
    }
}