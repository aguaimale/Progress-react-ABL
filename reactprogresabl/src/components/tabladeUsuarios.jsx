import React from 'react'

function TabladeUsuarios() {
    return (
        <div className='usertable'>
            <h3>Listado de usuarios registrados</h3>
           <div className='userInfo'>
            <p>Nombre: Agustin Aimale</p>
            <p>Email: agustinaimale@e-reparo.com</p>
            <p>Domicilio: Dentesano 819</p>
            </div> 
            <button className='Botonagregar' id='agregar'>
                Agregar Nuevo Usuario
            </button>
            
            


        </div>
    )
}

export default TabladeUsuarios