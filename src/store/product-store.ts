import { create } from "zustand"
import { GetProduct } from "../interfaces"
import { persist } from "zustand/middleware"


interface State {
    products:GetProduct[]
    filterGender:string,
    changeFilter:(filter:string)=>void
}

export const useProductStore =create<State>()(
    persist(
        (set,get)=>({
            products:[],
            filterGender:'all',
            changeFilter:(filter:string)=>set({filterGender:filter})
        }),{
            name:'shopping-product'
        }
    )
)