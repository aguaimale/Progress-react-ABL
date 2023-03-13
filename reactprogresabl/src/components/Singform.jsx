import React, { useState, useEffect } from 'react'
import login from '../utilities/mock';
import data from "../utilities/data.json"

function Singform() {

    const [fields, setFields] = useState({ email: "", pass: "", company: "" });
    const [empresa, setempresa] = useState(data.empresas)


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(fields)
        login(fields.company, fields.email, fields.pass)
            .then((res) => {
                if (res) alert("adentro")
                else alert(" Contraseña Incorrecta")
            })
            
            .catch(() => alert("error"))
    }

    const handleFields = (e) => {
        setFields({    //BUENA PRACTICA PARA SETEAR LOS VALORES DE UN FORMULARIO CON INPUT
            ...fields,
            [e.target.name]: e.target.value
        })
        console.log(fields)
    }

    const handleState = ({ target }) => {
        console.log(target)
        setFields({    //BUENA PRACTICA PARA SETEAR LOS VALORES DE UN FORMULARIO CON SELECT
            ...fields,
            company: target.value
        })
    };
    console.log(fields)



    return (
        <form className='formulario1' onSubmit={handleSubmit}>
            <h4 className='formtitle'>Inicia sesión</h4>
            <label>
                Correo electrónico:
                <input type="email" name="email" value={fields.email} onChange={handleFields} required />
            </label>
            <br />
            <label>
                Contraseña:
                <input type="password" name="pass" value={fields.pass} onChange={handleFields} required />
            </label>
            <label>
                Empresa:
                <select id="" required value={fields.company} onChange={handleState}>
                    {
                        empresa.map((item) => {

                            return <option key={Math.random()} name="company" value={`${item['cod-emp']}`}> {item['nom-emp']} </option>;
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