import { api } from "../api"

export const updateSizeProduct = async(idProduct:string, size:string)=>{
    try {
        const { data } = await api.patch(`/products/${idProduct}`,{
            size
        })   

        if(data.status !== 200){
            return false
        }

        return true

    } catch (error) {

        throw new Error('No se encontro el producto')
    }
}