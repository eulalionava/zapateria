import { api } from "../api"

export const getTotalSizeByGender = async(gender:string)=>{
    try {
        const { data } = await api.get(`/products/total-by-size/${gender}`)   

        if(data.status !== 200){
            return []
        }

        return data.totalProductosPorTalla

    } catch (error) {

        throw new Error('No se encontro el producto')
    }
}