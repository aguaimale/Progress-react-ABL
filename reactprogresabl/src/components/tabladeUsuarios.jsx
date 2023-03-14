import React from 'react'
import data from "../utilities/data.json"

function TabladeUsuarios() {
    return (
        <div className='usertable'>
            <h3>Listado de usuarios registrados</h3>
            <div className='userInfo'>
                {
                    data.usuarios.map((item) => {
                        return (<ul key={Math.random()} >
                            <li>
                                Empresa:{item.codemp};
                                Email:{item.usu};
                            </li>

                        </ul>);
                    })
                }
            </div>
        </div>
    )
}

export default TabladeUsuarios