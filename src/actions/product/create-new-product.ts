

import axios from 'axios';
import { api } from '../api';
import { Producto } from '@/src/interfaces';

export const createNewProduct = async(product:Producto)=>{
    try {

        const getSizes = product.sizes.join(',');

        const formData = new FormData();
        
        formData.append('name',product.name)
        formData.append('inStock',product.stock.toString())
        formData.append('priceFabric',product.priceFabric.toString())
        formData.append('price',product.price.toString())
        formData.append('sizes',getSizes)
        formData.append('marca',product.marca)
        formData.append('gender',product.gender)
        formData.append('category',product.category)
        formData.append('color',product.color)
        formData.append('inPromocion',String(product.activepromotion))
        formData.append('descuento',product.descuento ? product.descuento.toString() : '0')
        formData.append('inCarrusel',String(product.carrusel))

        for(let i = 0; i < product.images.length; i++){
         formData.append('images', product.images[i]);   
        }

        const { data } = await api.post(`/products`,formData);

        if(data.status !== 200){
            return { mensaje: 'No fue posible la creación del nuevo producto' }
        } 

        return {
            message: data.message
        }
        
    } catch (error) {
        console.log(error)
        throw new Error('Error al crear el producto,favor de intentar de nuevo')
    }
}