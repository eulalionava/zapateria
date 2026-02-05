import Link from 'next/link'
import React from 'react'

export default function VentasPage(){
  return (
    <div style={{padding:24}}>
      <h1>Todas las compras (placeholder)</h1>
      <p>Listado y detalle de todas las compras.</p>
      <p><Link href="/admin">Volver al panel</Link></p>
    </div>
  )
}
