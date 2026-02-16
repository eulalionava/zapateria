

import clsx from "clsx";

import { seed } from '@/src/seed/seed'
import { VisualShoe } from "@/src/components/product/details/visualShoe";
import { getProductById } from "@/src/actions";
import { SizesPage } from "@/src/components/product/details/sizes";



export  default async function ProductPage({params}:{params:Promise<{id:string}>}) {
  const { id } = await params;

  const producto = await getProductById(id);

  return (
    <div>
        <section className="relative bg-gradient-to-r from-teal-300 to-red-300 py-5 px-5 rounded-b-3xl shadow-md">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-black text-xl">{producto.marca}</h1>
            </div>

            <VisualShoe product={producto}/>

            <SizesPage product={producto}/>
            
            <div className="flex justify-center">
              <a href="/">
                <button className="bg-amber-600 rounded-sm p-2 my-4">Regresar</button>
              </a>
            </div>
        </section>
    </div>
  )
}