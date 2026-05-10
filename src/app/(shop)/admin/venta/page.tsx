'use client'
import { IoChevronBackCircleSharp } from "react-icons/io5";

import { createSeleProduct, deleteProduct, getColectionSizes, getProductoByCode, updateSizeProduct } from '@/src/actions';
import { GetProduct, Size } from '@/src/interfaces';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { number, percent } from "motion";
import { SpinnerLoading } from "@/src/components/SpinnerLoading";

export default function VentaPage(){

  const router =useRouter()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<GetProduct>();

  const [loading,setLoading] = useState(false);
  const [productFind,setProductFind] = useState(false)
  const [product,setProduct] = useState<GetProduct>()
  const [ collectionSizes,setCollectionSizes ] = useState<Size[]>([]);
  const [ selectSize,setSelectSize ] = useState('');
  const [ activeDiscount,setActiveDiscount ] = useState<boolean>(false);
  const [ percentaje,setPercentaje ] = useState<number>(0);

  const handleSearchProduct = async(data: any) => {
      const response = await getProductoByCode(data.code)
      if(response.status)  return  Swal.fire(response.message, '', 'error')

      const getSizes = await getColectionSizes(response.sizes)
      setCollectionSizes(getSizes)
   
      setProduct(response)
      setProductFind(true)
      reset()
  }

  const handlSale = async()=>{

    if(!selectSize) return Swal.fire('Debes seleccionar la talla del calzado a vender', '', 'warning')
    
    if(activeDiscount && percentaje == 0) return Swal.fire('Debes ingresar el porcentaje de descuento', '', 'warning')
    
    if(percentaje < 0 || percentaje > 100) return Swal.fire('El porcentaje de descuento debe ser entre 0 y 100', '', 'warning')

    setLoading(true)
    
    if(collectionSizes.length > 1){
      await updateSizeProduct(product?.id || '', selectSize)
      setActiveDiscount(false)
      setPercentaje(0)
    }else{
      await deleteProduct(product?.id || '')
    }
    
    const sizeName = collectionSizes.filter(size=>size.id === selectSize)[0].name
    
    const getData = {
      size: sizeName,
      discount: activeDiscount,
      percentaje: Number(percentaje)
    }

    const response = await createSeleProduct(product?.id || '', getData)


    Swal.fire(response, '', 'success')
    setLoading(false)
    setProductFind(false)
    setSelectSize('')
  }
  
  return (
    <div className="bg-gradient-to-r from-teal-300 to-red-300 shadow-md min-h-screen px-4">
      <button 
        className='flex items-center bg-gray-300 rounded-2xl text-black p-1 mt-2'
        onClick={()=>router.push('/admin')}
      >
        <IoChevronBackCircleSharp size={30}/>Regresar
      </button>

      <form onSubmit={ handleSubmit(handleSearchProduct) }>
        <div className='flex flex-col items-center justify-center gap-2 pt-5'>
          <input 
            type='text' 
            autoFocus
            placeholder='Codigo del producto'
            className='w-full max-w-md mx-auto bg-gray-200 text-black rounded-2xl px-6 py-3'
            {...register("code",{required:true})}
          />
          <input className='w-[200px] bg-gray-300 rounded-2xl text-black p-2' value="Buscar" type='submit'/>
        </div>
      </form>

      {productFind && (
        <div>
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Grid principal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Información */}
              <div className="space-y-6">

                <h1 className="text-3xl font-bold text-gray-900">
                  {product?.name} <br /> {product?.marca}
                </h1>

                {/* Precio */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">${product?.price}.00</span>
                </div>

              </div>

              {/* Imagen */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <img
                    src={`${product?.images[0]}`}
                    alt="Product"
                    className="w-full max-w-sm object-contain"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 mt-4">
                  {product?.images.map((image, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-gray-100 rounded-xl border-2 border-transparent hover:border-blue-500 cursor-pointer"
                    >
                      <img src={`${image}`} alt="Thumbnail" className="w-full h-full object-cover rounded-xl" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Opciones */}
              <div className="space-y-6">
                {/* Talla */}
                <div className="m-0">
                  <h3 className="font-semibold text-lg text-black mb-3">Tallas disponibles</h3>
                  <div className="flex gap-3 flex-wrap">
                    {collectionSizes.map((size, i) => (
                      <button
                        key={size.name}
                        onClick={()=>setSelectSize(size.id)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-medium
                        ${selectSize === size.id ? "bg-blue-600 text-white border-2" : "bg-white text-black"}`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-black mb-3">Con descuento</h3>
                  <div className="flex justify-between">
                      <div className="flex-1 flex gap-4">
                          <label className="text-md text-black">Si</label>
                          <input 
                              className="w-6 h-6" 
                              type="radio" 
                              name="descuento"
                              onChange={()=>setActiveDiscount(true)}
                          />
                      </div>
                      <div className="flex-1 flex gap-4">
                          <label className="text-md text-black">No</label>
                          <input 
                              className="w-6 h-6" 
                              type="radio"  
                              name="descuento"
                              onChange={()=>{setActiveDiscount(false),setPercentaje(0)}}
                          />
                      </div>
                  </div>
                </div>

                { activeDiscount && (
                  <div>
                    <input 
                      type="number" 
                      placeholder="Descuento en porcentaje"
                      className="w-full bg-gray-200 text-black rounded-xl px-4 py-2"
                      onChange={(e)=>setPercentaje(Number(e.target.value))}
                    />
                  </div>)
                }

                {/* Botones */}
                <div className="flex gap-4">
                  <button 
                    className="flex-1 border border-red-600 text-red-600 rounded-xl py-3 font-semibold hover:bg-blue-50"
                    onClick={()=>router.push('/admin')}
                  >
                    Cancelar
                  </button>
                  <button 
                    className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700"
                    onClick={handlSale}
                  >
                    {loading ?(
                      <SpinnerLoading size={30} color="#fff"/>
                    ):'Venta'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
