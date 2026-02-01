'use client'

import { login } from "@/src/actions";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

import Swal from 'sweetalert2'


export default function LoginPage(){
  const {register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = async(data:any)=>{
    const resp = await login(data.email, data.password);

    if(resp.status !== 200){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al iniciar sesión',
      });
      return
    }

    redirect('/')

  }

  return (
    <div className="bg-gradient-to-r from-teal-300 to-red-300 rounded-b-3xl shadow-md min-h-screen flex items-center justify-center px-4">
        <form 
          className="w-full max-w-md mx-auto flex flex-col items-center bg-gray-200 rounded-2xl gap-4 p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="text-3xl font-bold text-center text-black">Login</h1>
            <input 
              className="w-full px-4 py-3 rounded-md text-black" 
              type="text" 
              placeholder="Correo electronico"
              {...register('email',{required:true})}
            />
            <input 
              className="w-full px-4 py-3 rounded-md text-black" 
              type="password" 
              placeholder="Contraseña"
              {...register('password',{required:true})}
            />
            <input 
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300" 
              value="Iniciar Sesión"
              type="submit"/>
        </form>
    </div>
  )
}
