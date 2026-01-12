interface Props{
    color:string
}

export const Spinner = ({color}:Props)=>{
    return(
        <>
            <div className="flex justify-center">
                <div 
                    className={`spinner_animation rounded-[100%]`}
                    style={{ width:'30px',height:'30px',border:`2px solid ${color}`,borderLeftColor:"transparent"}}
                >
                </div>
            </div>
        </>
    )
}