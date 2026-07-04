'use client'

import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Modal } from "./Modal"
import { Cardpoint, GetProduct } from "../interfaces";
import { useForm } from "react-hook-form";
import { addPointsToCardPoint, getCardPointById, addPointsUpdateName } from "../actions";
import { SpinnerLoading } from "../components/SpinnerLoading";

interface Props{
    desactivar:()=>void,
    excecuteSale:(activeAlert:boolean)=>void,
    product:GetProduct
}

 export const ModalAddCardPont = ({desactivar, excecuteSale, product}:Props)=>{
    const { handleSubmit, register} = useForm()
    const [cardPoint, setCardPoint] = useState<Cardpoint>();
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [loadingSale, setLoadingSale] = useState(false);

    const onHandleShearch = async(data:any)=>{
        setLoadingSearch(true)
        setCardPoint(undefined)

        const resp = await getCardPointById(data.search)

        if(resp.status != 200){
            setLoadingSearch(false)
            return Swal.fire({icon:'error', title:'', text:'Tarjeta de puntos no encontrada'})
        } 
        
        setCardPoint(resp.cardpoint)
        setLoadingSearch(false)
    }

    const handleSaleProducto = async()=>{
        if(!cardPoint?.nombrecompleto && nombreCompleto === ''){
            return Swal.fire({icon:'info', title:'', text:'Actualiza el nombre completo del cliente para realizar la venta'})
        }
        setLoadingSale(true)
        if(cardPoint?.nombrecompleto){
          const resp =  await addPointsToCardPoint(cardPoint.numero, (Number(product.price) * 0.02)) 
          Swal.fire({icon:'success', title:`Total: ${resp.cardpoint.puntos}`, text:resp.message})
          desactivar();
          excecuteSale(false);
          setLoadingSale(false)
          return
        }

        const resp = await addPointsUpdateName(cardPoint?.numero || '', nombreCompleto, (Number(product.price) * 0.02))
        Swal.fire({icon:'success', title:`Total: ${resp.cardpoint.puntos}`, text:resp.message})
        desactivar();
        excecuteSale(false);
        setLoadingSale(false)
    }

    return(
        <Modal desactivar={ desactivar }>
            <div className='p-5 mt-5'>
            <form onSubmit={ handleSubmit(onHandleShearch)}>
                <input 
                    type="number"
                    placeholder='Buscar por numero de tarjeta'
                    autoFocus
                    className='border border-tgrey rounded-[5px] w-full mb-2 p-1'
                    {...register("search",{required:true})}
                />
                <button 
                    className='bg-blue-500 text-white rounded-[5px] w-[150px] mb-2 p-1'
                    type='submit'
                >
                        { loadingSearch ? (<SpinnerLoading color="white" size={20}/>) : 'Buscar'}
                </button>
            </form>
                {cardPoint != undefined && (
                    <div className='border border-gray-300 rounded-[5px] p-3'>
                        <h1>Datos de la Tarjeta</h1>
                        {!cardPoint.nombrecompleto && (
                            <input 
                                type="text"
                                placeholder='Nombre completo del cliente'
                                value={nombreCompleto}
                                onChange={(e)=>setNombreCompleto(e.target.value)}
                                autoFocus
                                className='rounded-[5px] w-full mb-2 p-1 border border-gray-300'
                            />
                        )}

                        {cardPoint.nombrecompleto && (
                            <p className='font-bold text-lg'>{(cardPoint.nombrecompleto).toUpperCase()}</p>
                        )}
                        
                        <p>Numero de tarjeta:</p>
                        <div className="border border-gray-300 rounded-[5px] p-1">
                            {cardPoint.numero}
                        </div>
                        <p>Puntos actuales: {cardPoint.puntos}</p>
                        <button className='bg-green-500 text-white rounded-[5px] w-[150px] mb-2 p-1' onClick={handleSaleProducto}>
                           {loadingSale ? (<SpinnerLoading color="white" size={20}/>) : 'realizar venta'}
                        </button>
                    </div>
                )}
            </div>
        </Modal>
    )
}

