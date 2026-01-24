
import { api } from '../api';

export const getColectionSizes = async(dataSizes:string)=>{
    try {
        const sizes =dataSizes.split(',')

        let listSizes = []
        for (let size of sizes){
            const response = await api.get(`/sizes/${size.trim()}`);

            if(response.data.status == 200){
                listSizes.push(response.data.size)
            }
        }
        
        return listSizes
        
    } catch (error) {
        throw new Error('No se encontraron las tallas')
    }
}