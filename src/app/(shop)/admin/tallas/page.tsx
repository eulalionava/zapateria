import Link from 'next/link'
import React from 'react'

export default function TallasPage(){
  return (
    <div style={{padding:24}}>
      <h1>Administrar Tallas (placeholder)</h1>
      <p>Gestión de tallas y disponibilidad por producto.</p>
      <p><Link href="/admin">Volver al panel</Link></p>
    </div>
  )
}
