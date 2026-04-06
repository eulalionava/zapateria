import { api } from "../api"

export const getTotalSizeByGender = async(gender:string, category = '')=>{
    try {
        const { data } = await api.post(`/products/total-by-size`,{ gender, category })   

        if(data.status !== 200){
            return []
        }

        return data.totalProductosPorTalla

    } catch (error) {

        throw new Error('No se encontro el producto')
    }
}