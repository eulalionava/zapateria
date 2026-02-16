import Link from 'next/link'
import React from 'react'

export default function InventariosPage(){
  return (
    <div style={{padding:24}}>
      <h1>Inventarios - Inversión y Ganancias (placeholder)</h1>
      <p>Pantalla para ver inversión, stock y ganancias.</p>
      <p><Link href="/admin">Volver al panel</Link></p>
    </div>
  )
}
