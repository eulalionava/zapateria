import { create } from "zustand"
import { GetLoginUser, GetProduct } from "../interfaces"
import { persist } from "zustand/middleware"

interface State {
    user:GetLoginUser,
    isLogin:boolean,
    activeLogin:()=>void,
    desactiveLogin:()=>void
    userLoged:(user:GetLoginUser)=>void,
}

export const useUserStore =create<State>()(
    persist(
        (set,get)=>({
            user:{} as GetLoginUser,
            isLogin:false,
            
            activeLogin:() => set({isLogin:true}),
            desactiveLogin:()=> set({isLogin:false}),
            userLoged:(user:GetLoginUser) => set({user:user}),
        }),{
            name:'user-store'
        }
    )
)