import { FC } from "react"
import { AiFillCloseCircle } from "react-icons/ai"

interface Props {
    children: React.ReactNode,
    desactivar:()=>void
}

 export const Modal:FC<Props> = ({ children, desactivar })=>{
   return(
       <div className="absolute modal-1000" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-2 bg-opacity-75 transition-opacity backdrop-blur-md" onClick={ desactivar }></div>

            <div className="fixed inset-0 rounded-[20px] overflow-hidden hover:overflow-y-auto m-auto max-w-2xl" style={{zIndex:1000}}>
                <div className="flex items-center justify-center text-center h-full rounded-[20px]">
                    <div className="bg-white md:w-[600px] rounded-[15px] shadow-7 overflow-hidden max-h-[600px] hover:overflow-y-auto">
                        <span className='flex justify-end pt-2 hover:cursor-pointer absolute right-2 md:right-10' onClick={ desactivar }>
                            <AiFillCloseCircle size={25} color="black"/>
                        </span>
                        { children }
                    </div>
                </div>
            </div>
        </div>
   )
}

