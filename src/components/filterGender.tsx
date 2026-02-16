'use client'

import { useState } from "react"

import clsx from "clsx";
import { useProductStore } from "../store";

export const FilterGender = () => {
    const { changeFilter} = useProductStore(state=>state)
    const [filterForGender,setFilterForGender] = useState('all')

    const OnSelect = (gender:string)=>{
        setFilterForGender(gender)
        changeFilter(gender)
    }

    return (
        <section className="flex gap-2 flex-wrap p-3">
            <div 
                onClick={() => OnSelect('all')}
                className={
                    clsx(
                        "text-center rounded-md w-[100px] p-1",
                        { 
                            'bg-amber-600 text-white': filterForGender === 'all',
                            'bg-white text-gray-300': filterForGender !== 'all'
                        }
                    )
            }>Todos</div>
            <div 
                onClick={() => OnSelect('men')}
                className={
                    clsx(
                        "text-center rounded-md w-[100px] p-1",
                        { 
                            'bg-amber-600 text-white': filterForGender === 'men',
                            'bg-white text-gray-300': filterForGender !== 'men'
                        }
                    )
            }>Hombre</div>
            <div 
                onClick={() => OnSelect('woman')}
                className={
                    clsx(
                        "text-center rounded-md w-[100px] p-1",
                        { 
                            'bg-amber-600 text-white': filterForGender === 'woman',
                            'bg-white text-gray-300': filterForGender !== 'woman'
                        }
                    )
            }>Mujer</div>
            <div 
                onClick={() => OnSelect('girl')}
                className={
                    clsx(
                        "text-center rounded-md w-[100px] p-1",
                        { 
                            'bg-amber-600 text-white': filterForGender === 'girl',
                            'bg-white text-gray-300': filterForGender !== 'girl'
                        }
                    )
            }>Niña</div>
                <div 
                    onClick={() => OnSelect('boy')}
                    className={
                        clsx(
                            "text-center rounded-md w-[100px] p-1",
                            { 
                                'bg-amber-600 text-white': filterForGender === 'boy',
                                'bg-white text-gray-300': filterForGender !== 'boy'
                            }
                        )
                }>Niño</div>
        </section>
    )
}
