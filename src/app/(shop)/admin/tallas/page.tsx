'use client'
import React, { useEffect, useState } from 'react'
import { getGenders, getTotalSizeByGender } from '@/src/actions';
import { Gender, Producto } from '@/src/interfaces';
import { useForm } from 'react-hook-form';
import { IoArrowBackCircle } from "react-icons/io5";
import { SpinnerLoading } from '@/src/components/SpinnerLoading';

export default function TallasPage(){
  const [genders,setGenders] = useState<Gender[]>([]);
  const [totalSizes, setTotalSizes] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Producto>();

  useEffect(()=>{
    const getActions = async()=>{
        const getGendersResponse = await getGenders();
        setGenders(getGendersResponse);
    }
    getActions();  
  },[]);

  const onSubmit = async(genero:string) => {
    setTotalSizes({})
    setLoading(true);
    const resp = await getTotalSizeByGender(genero)

    if(Object.keys(resp).length === 0){
      setTotalSizes({})
      setLoading(false);
      return
    }

    for (const key in resp) {
      setTotalSizes((prevState) => ({
        ...prevState,
        [key]: resp[key],
      }));
    }
    setLoading(false);
  }

  return (
    <div className='bg-gradient-to-r from-teal-300 to-red-300 min-h-screen p-1'>
      <div className="flex items-center mb-4">
        <IoArrowBackCircle size={30} color='black'/>
        <h1 className='flex-1 text-2xl font-bold text-center text-white'>Administrar Tallas</h1>
      </div>
      <section>
        <form 
          className='w-full h-10 max-w-sm mx-auto bg-white rounded-md shadow-md'
        >
          <select className="w-full h-full font-bold text-sm text-black" onChange={(e)=>onSubmit(e.target.value)}>
              <option value="">Seleccion el genero</option>
              {genders.map((gender:Gender)=>(
                  <option value={gender.id} key={gender.id}>{gender.name}</option>
              ))}
          </select>
          { 
          loading ? (
            <div className='text-md font-bold text-white text-xl rounded-m p-2 m-2'>
              <SpinnerLoading size={50} color='white'/>
            </div>
          )
          :(
            <div>
              {Object.keys(totalSizes).length > 0 ? (
                <div className='flex flex-wrap gap-2 p-2'>
                  {Object.keys(totalSizes).map((size) => (
                    <div key={size} 
                      className='flex flex-col items-center justify-between text-md bold text-white text-xl rounded-md bg-black w-[90px] h-[100px] shadow-2xl p-3'>
                      <h1 className="text-[28px] font-bold">{size} </h1>
                      <h2 className="bg-green-400 rounded-full text-gray-500 font-bold shadow-2xl p-2">{totalSizes[size]}</h2>
                    </div>
                  ))}
                </div>
              ):(
                <p className='text-md font-bold text-white text-xl rounded-md bg-amber-700 p-2 m-2'>No se encontraron tallas para el genero seleccionado</p>
              )}
            </div>
          )
          }
        </form>
      </section>
    </div>
  )
}
