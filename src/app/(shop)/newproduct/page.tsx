'use client';

import clsx from "clsx";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";

import { getSizes,getGenders,getCategories, createNewProduct } from "@/src/actions";
import { Category, Gender, Producto, Size } from "@/src/interfaces";
import { Spinner } from "@/src/components/Spinner";
import { useUserStore } from "@/src/store";


export default function NewProductPage(){
    const { isLogin } = useUserStore();
    
    const [isLoading,setIsLoading] = useState(false);
    const {register,handleSubmit,formState:{errors}} = useForm<Producto>();
    const [inDescuento,setInDescuento] = useState(false);

    const [sizes,setSizes] = useState<Size[]>([]);
    const [genders,setGenders] = useState<Gender[]>([]);
    const [categories,setCategories] = useState<Category[]>([]);

    // Imagenes seleccionadas (vistas previas)
    const [previews, setPreviews] = useState<string[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        // revocar URLs previas para evitar leaks
        setPreviews(prev => {
            prev.forEach(url => URL.revokeObjectURL(url));
            return Array.from(files).map(file => URL.createObjectURL(file));
        });
    }

    useEffect(()=>{
        if(isLogin){
            console.log('no logeado')
            redirect('../login')
        } 
    },[]);

    // limpiar URLs al desmontar
    useEffect(() => {
        return () => {
            previews.forEach(url => URL.revokeObjectURL(url));
        }
    }, [previews]);

    useEffect(()=>{
        
        const getActions = async()=>{
            const getSizesResponse = await getSizes();
            const getGendersResponse = await getGenders();
            const getCategoriesResponse = await getCategories();
            setSizes(getSizesResponse);
            setGenders(getGendersResponse);
            setCategories(getCategoriesResponse);
        }
        getActions();  
    },[]);
    

    const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const discount = e.target.value;
        discount === 'true' ? setInDescuento(true) : setInDescuento(false)
    }

    const onSubmit = async(data:Producto)=>{
        setIsLoading(true);

        const resp = await createNewProduct(data)
        await Swal.fire(resp.message, '', 'success');

        setIsLoading(false)
        window.location.reload();
    }

    

    return (
        <div className="bg-gradient-to-r from-teal-300 to-red-300 rounded-b-3xl shadow-md min-h-screen p-1">
            {isLogin && (
                <form 
                    className="w-full max-w-md mx-auto flex flex-col bg-gray-400 rounded-2xl gap-4 p-6" 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-3xl font-bold text-center text-black">Nuevo producto</h1>
                        <div className="bg-white h-10 rounded-md w-full">
                            <input 
                                className="w-full h-full px-2 text-black" 
                                type="text" 
                                autoFocus
                                placeholder="nombre del producto"
                                {...register("name",{required:true})}
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="fileInput" className="cursor-pointer w-full flex items-center gap-3 p-3 border-2 border-dashed rounded-md bg-white text-black hover:border-teal-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-3a4 4 0 00-4-4h-3l-2-2H9l-2 2H4a1 1 0 00-1 1v1" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5" />
                                </svg>
                                <div className="text-left">
                                    <div className="font-medium">Seleccionar imágenes</div>
                                    <div className="text-sm text-gray-500">{previews.length > 0 ? `${previews.length} imagen(es) seleccionada(s)` : 'PNG, JPG, JPEG - hasta varias'}</div>
                                </div>
                            </label>
                            <input id="fileInput" className="hidden" type="file" accept="image/*" multiple {...register("images",{required:true, onChange: (e) => handleFileChange(e) })} />
                        </div>

                        <section className={clsx("imagenes grid gap-2", previews.length > 0 ? "grid-cols-4" : "grid-cols-1")}>
                            {previews.length === 0 ? (
                                <p className="text-black text-center">No hay imágenes seleccionadas</p>
                            ) : (
                                previews.map((src, idx) => (
                                    <img key={src} src={src} alt={`preview-${idx}`} className="w-full h-24 object-cover rounded" />
                                ))
                            )}
                        </section>

                        <div className="bg-white h-10 rounded-md w-full">
                            <input 
                                className="w-full h-full px-2 text-black" 
                                type="text"
                                placeholder="Marca del producto"
                                {...register("marca",{required:true})} 
                            />
                        </div>
                        <div className="bg-white h-10 rounded-md w-full">
                            <input 
                                className="w-full h-full px-2 text-black" 
                                type="text"
                                placeholder="Cuantos en stock"
                                {...register("stock",{required:true})} 
                            />
                        </div>
                        <div className="bg-white h-10 rounded-md w-full">
                            <input 
                                className="w-full h-full px-2 text-black" 
                                type="number" 
                                placeholder="Precio de fabrica"
                                {...register("priceFabric",{required:true})} 
                            />
                        </div>
                        <div className="bg-white h-10 rounded-md w-full">
                            <input 
                                className="w-full h-full px-2 text-black" 
                                type="number" 
                                placeholder="Precio de venta"
                                {...register("price",{required:true})} 
                            />
                        </div>

                        <div>
                            <label className="text-left text-black text-xl">Numeros disponibles</label>
                            <div className="flex flex-wrap gap-4">
                                {sizes.map((size:Size)=>(
                                    <div className="flex flex-col justify-center items-center" key={size.id}>
                                        <label className="text-md text-black">{size.name}</label>
                                        <input 
                                            className="w-6 h-6" 
                                            type="checkbox"  
                                            value={size.id} 
                                            {...register("sizes",{required:true})}  
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white h-10 rounded-md w-full">
                            <select className="w-full h-full text-black" {...register("gender",{required:true})}>
                                <option value="">Seleccion el genero</option>
                                {genders.map((gender:Gender)=>(
                                    <option value={gender.id} key={gender.id}>{gender.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="bg-white h-10 rounded-md w-full">
                            <select className="w-full h-full text-black" {...register("category",{required:true})}>
                                <option value="">Selecciona una categoria</option>
                                {categories.map((category:Category)=>(
                                    <option value={category.id} key={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="bg-white h-10 rounded-md w-full">
                            <input 
                                className="w-full h-full px-2 text-black" 
                                type="text"
                                placeholder="Color del producto"
                                {...register("color",{required:true})}
                            />
                        </div>
                        <div className="flex gap-4">
                            <label className="text-xl text-black">En carrusel</label>
                            <input className="w-6 h-6" type="radio" value='true' {...register("carrusel",{required:false})}/>
                        </div>
                        <div>
                            <label className="text-xl text-black">En promoción</label>
                            <div className="flex justify-between">
                                <div className="flex-1 flex justify-around">
                                    <label className="text-md text-black">Activar</label>
                                    <input 
                                        className="w-6 h-6" 
                                        type="radio" 
                                        value='true'
                                        {...register("activepromotion",{required:false})}  
                                        onChange={(handleDiscount)}
                                    />
                                </div>
                                <div className="flex-1 flex justify-around">
                                    <label className="text-md text-black">Desactivar</label>
                                    <input 
                                        className="w-6 h-6" 
                                        type="radio"  
                                        value='false'
                                        {...register("activepromotion",{required:false})}  
                                        onChange={handleDiscount}
                                    />
                                </div>
                            </div>
                        </div>
                        {inDescuento && (
                            <div className="bg-white h-10 rounded-md w-full">
                                <input 
                                    className="w-full h-full px-2 text-black" 
                                    type="number" 
                                    {...register("descuento",{required:false})}
                                    placeholder="Cantidad de descuento"
                                />
                            </div>
                        )}

                        {!isLoading ? (
                            <input 
                                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer" 
                                value="Agregar Producto"
                                type="submit"
                            />
                            ) :(
                                <div 
                                    className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md cursor-not-allowed">
                                        <Spinner color="white"/>
                                </div> 
                            )
                        }
                </form>
            )}
        </div>
    )
}
