

export default function ItemPromotion() {
  return (
    <div className="relative w-full h-[350px] bg-orange-500 overflow-hidden rounded-lg shadow-lg">
          
          <img 
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" 
            alt="promo"
            className="absolute top-0 right-0 w-full h-1/2 object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-orange-500 transform -skew-y-6 origin-bottom-left"></div>

          <div className="absolute bottom-0 left-0 p-6 text-white">

            <h1 className="text-6xl font-extrabold leading-none">
              10%
            </h1>

            <p className="text-xl font-semibold">
              de descuento
            </p>

            <p className="text-sm mt-4 leading-snug text-black font-bold">
              Este 10 de mayo, celebra el Día de las Madres con un regalo que hará que mamá se sienta especial.
            </p>

            <p className="text-xs mt-4 opacity-90">
              Válido solo 10 de mayo.
            </p>
            <p className="text-xs opacity-90">
              Solo aplica si vienes a la tienda y compras un par de zapatos para mamá.
            </p>
          </div>
        </div>
  )
}
