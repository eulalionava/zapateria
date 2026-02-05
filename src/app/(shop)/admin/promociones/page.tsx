import Link from 'next/link'
import React from 'react'

export default function PromocionesPage(){
  return (
    <div style={{padding:24}}>
      <h1>Lanzamiento de promoción (placeholder)</h1>
      <p>Crear y gestionar promociones para productos.</p>
      <p><Link href="/admin">Volver al panel</Link></p>
    </div>
  )
}
