
import { api } from '../api';

export const getCardPointById = async(id: number) => {
    try {
        const response = await api.get(`/cardpoints/${id}`);

        if (!response) return null;

        return response.data;

    } catch (error) {
        throw new Error('Error de servidor');
    }
};
