import { api } from "../api"

export const createSeleProduct = async(idProduct:string,talla:string)=>{
    try {
        const { data } = await api.post(`/ventas`,{
            producto:idProduct,
            talla
        })   

        if(data.status !== 200){
            return data.message
        }

        return data.message

    } catch (error) {

        throw new Error('No se encontro el producto')
    }
}