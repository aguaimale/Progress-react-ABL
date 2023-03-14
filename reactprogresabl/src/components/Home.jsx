import React from 'react'
import AltaDeUsuario from './AltaDeUsuario'
import TabladeUsuarios from './TabladeUsuarios'

function Home() {
  return (
    <div className='contenedorHome'>
        <TabladeUsuarios/>
        <AltaDeUsuario/>
    </div>
  )
}

export default Home