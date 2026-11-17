import { api } from "../api"

export const getSales = async()=>{
    try {
        const { data } = await api.get(`/ventas`)   

        if(data.status !== 200){
            return "No hay ventas"
        }
        
        return data.sales


    } catch (error) {

        throw new Error('Error al crear la venta del producto')
    }
}