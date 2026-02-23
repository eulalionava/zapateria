import { api } from "../api"

export const getProductoByCode = async(code:string)=>{
    try {
        const { data } = await api.get(`/products/code/${code}`)   

        if(data.status === 404){
            return data
        }

        return data.producto

    } catch (error) {

        throw new Error('No se encontro el producto')
    }
}