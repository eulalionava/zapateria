import { create } from "zustand"
import { GetProduct } from "../interfaces"
import { persist } from "zustand/middleware"

interface State {
    products:GetProduct[]
}

export const useProductStore =create<State>()(
    persist(
        (set,get)=>({
            products:[]
        }),{
            name:'shopping-product'
        }
    )
)