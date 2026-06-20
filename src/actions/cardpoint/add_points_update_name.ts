
import { api } from '../api';

export const addPointsUpdateName = async(numberCard: string,nombrecompleto:string,puntos:number) => {
    try {
        const response = await api.put(`/cardpoints/updatename`,{
            numero: numberCard,
            nombrecompleto: nombrecompleto,
            puntos: puntos
        });

        if (response.status !== 200 ) return {
            ok: false,
            message: response.data.message || 'Error al agregar puntos a la tarjeta'
        };

        return {
            ok: true,
            message: response.data.message || 'Puntos agregados correctamente',
            cardpoint: response.data.cardpoint
        };

    } catch (error) {
        throw new Error('Error de servidor');
    }
};
