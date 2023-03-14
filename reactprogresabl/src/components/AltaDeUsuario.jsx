import React, {useState}from 'react'

function AltaDeUsuario() {

   const [data, setData] = useState({ correo:"", pass:"", emp:"", dom:"", nom:"" });

    const handleData = (e) => {
        setData({    //BUENA PRACTICA PARA SETEAR LOS VALORES DE UN FORMULARIO CON INPUT
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    const handleSubmit = () =>{
        JSON.stringify(data)
    }

    
  return (
    <div className='altausuario'>
        <form className='formularioaltausuario' onSubmit={"handleSubmit"}>
            <h4 className='formtitle'>Crear nuevo Usuario</h4>
            <label>
                Nombre y Apellido:
                <input type="text" name="nom" value={data.nom} onChange={handleData} required />
            </label>                            
            <br />
            <label>
                Codigo de empresa:
                <input type="text" name="emp" value={data.emp} onChange={handleData} required />
            </label>
            <br />
            <label>
                Contraseña:
                <input type="pass" name="pass" value={data.pass} onChange={handleData} required />
            </label>            
            <br />
            <label>
                Direccion:
                <input type="text" name="dom" value={data.dom} onChange={handleData} required />
            </label>
            <br />
            <label>
                Correo Electronico:
                <input type="email" name="correo" value={data.correo} onChange={handleData} required />
            </label>
            <button type="submit">Crear Usuario</button>
        </form>



    </div>
  )
}

export default AltaDeUsuario