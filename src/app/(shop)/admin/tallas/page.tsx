'use client'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import { getCategories, getGenders, getTotalSizeByGender } from '@/src/actions';
import { Category, Gender, Producto } from '@/src/interfaces';
import { useForm } from 'react-hook-form';
import { IoArrowBackCircle } from "react-icons/io5";
import { SpinnerLoading } from '@/src/components/SpinnerLoading';

export default function TallasPage(){
  const [genders,setGenders] = useState<Gender[]>([]);
  const [categories,setCategories] = useState<Category[]>([]);
  const [totalSizes, setTotalSizes] = useState<Record<string, number>>({});
  const [category,setCategory] = useState('');
  const [gender,setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Producto>();

  useEffect(()=>{
    const getActions = async()=>{
        const getGendersResponse = await getGenders();
        const getCategoriesResponse = await getCategories();
        setGenders(getGendersResponse);
        setCategories(getCategoriesResponse);
    }
    getActions();  
  },[]);

  const onSubmit = async() => {
    if(gender === '') return Swal.fire('Busqueda invalida','Seleciona el genero como minimo filtro de tu busqueda','error');

    setTotalSizes({})
    setLoading(true);
    const resp = await getTotalSizeByGender(gender,category)

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
          className='w-full h-10 max-w-sm mx-auto'
        >
          <select className="w-full h-full font-bold text-sm text-black bg-white rounded-md shadow-md mb-2" onChange={(e)=>setGender(e.target.value)}>
              <option value="">Seleccion el genero</option>
              {genders.map((gender:Gender)=>(
                  <option value={gender.id} key={gender.id}>{gender.name}</option>
              ))}
          </select>

          <select className="w-full h-full font-bold text-sm text-black bg-white rounded-md shadow-md mb-2" onChange={(e)=>setCategory(e.target.value)}>
              <option value="">Seleccion la categoria</option>
              {categories.map((category:Category)=>(
                  <option value={category.id} key={category.id}>{category.name}</option>
              ))}
          </select>
          <input 
            type="submit" 
            value="Buscar" 
            className='w-full h-full font-bold text-sm text-white bg-black cursor-pointer rounded-md'
            onClick={handleSubmit(onSubmit)}
          />
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
