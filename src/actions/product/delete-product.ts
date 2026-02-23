import { api } from "../api"

export const deleteProduct = async(idProduct:string)=>{
    try {
        const { data } = await api.post(`/products/${idProduct}`)   

        if(data.status !== 200){
            return false
        }

        return true

    } catch (error) {

        throw new Error('No se encontro el producto')
    }
}