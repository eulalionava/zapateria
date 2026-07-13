import { api } from "../api"

export const getProductosBySize = async(gender:string,category:string,size:string)=>{
    try {
        const { data } = await api.post(`/products/filter/`,{
            gender,
            category,
            numero:size
        })   

        if(data.status !== 200){
            return data
        }

        return data.productos

    } catch (error) {

        throw new Error('Error al obtener los productos')
    }
}