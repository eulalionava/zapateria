import { api } from "../api"

export const createSeleProduct = async(idProduct:string,datos:any)=>{
    try {
        const { data } = await api.post(`/ventas`,{
            producto:idProduct,
            talla: datos.size,
            activeDescuento: datos.discount,
            porcentajeDescuento: datos.percentaje
        })   

        if(data.status !== 200){
            return data.message
        }

        return data.message

    } catch (error) {

        throw new Error('Error al crear la venta del producto')
    }
}