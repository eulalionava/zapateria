'use client'

import { useUserStore } from "@/src/store"

export const Buttons = () => {
    const { isLogin } = useUserStore(state=>state)

    return (
        <div className="flex gap-2">
            <a href="/">
                <button className="bg-amber-600 rounded-sm p-2 my-4">Regresar</button>
            </a>
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
