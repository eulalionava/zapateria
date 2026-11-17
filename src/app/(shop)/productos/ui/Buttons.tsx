'use client'

import { useUserStore } from "@/src/store"
import { useRouter } from "next/navigation"

export const Buttons = () => {
    const { isLogin } = useUserStore(state=>state)
    const router = useRouter()

    return (
        <div className="flex gap-2">
            <button
                className="bg-amber-600 rounded-sm p-2 my-4"
                onClick={() => router.back()}
                type="button"
            >
                Regresar
            </button>
            {
                isLogin && (
                    <a href="/admin/venta">
                        <button className="bg-green-600 rounded-sm p-2 my-4">Vender</button>
                    </a>
                )
            }
        </div>
    )
}
