interface Props{
    color:string
    size?:number
}

export const SpinnerLoading = ({color,size}:Props)=>{
    return(
        <>
            <div className="flex justify-center">
                <div 
                    className={`spinner_animation rounded-[100%]`}
                    style={{ width: `${size || 30}px`, height: `${size || 30}px`, border: `2px solid ${color}`, borderLeftColor: "transparent" }}
                >
                </div>
            </div>
        </>
    )
}