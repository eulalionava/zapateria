

export default function LoginPage(){
  return (
    <div className="bg-gradient-to-r from-teal-300 to-red-300 rounded-b-3xl shadow-md min-h-screen flex items-center justify-center px-4">
        <form className="w-full max-w-md mx-auto flex flex-col items-center bg-gray-200 rounded-2xl gap-4 p-6">
            <h1 className="text-3xl font-bold text-center text-black">Login</h1>
            <input className="w-full px-4 py-3 rounded-md text-black" type="text" placeholder="Correo electronico"/>
            <input className="w-full px-4 py-3 rounded-md text-black" type="password" placeholder="Contraseña"/>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">Iniciar Sesión</button>
        </form>
    </div>
  )
}
