import React, {useState} from 'react'

function Singform() {

    const [email, setEmail] = useState([]);
    const [contraseña, setContraseña] = useState([]);
    const [empresa, setempresa] = useState(["Empresa#1","Empresa#2","Empresa#3","Empresa#4",])

    function handleSubmit(){

    };

 

    return (
        <form className='formulario1' onSubmit={handleSubmit}>
            <h4 className='formtitle'>Inicia sesión</h4>
            <label>
                Correo electrónico:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                Contraseña:
                <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
            </label>
            <label>
                Empresa:
                <select name="empresas" id="" value={empresa} onSelect={(e) => setempresa(e.target.value)} required >
                    {
                        empresa.map((item)=>{
                            return <option value={`${item}`}> {item} </option>;
                        })
                    }
                
                </select>
            </label>
            <br />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Singform