import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import data from "../utilities/data.json"
import { getLoged, getEmpresas, getUsuarios, getUsuariosFiltro } from '../redux/actions/actions';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
function TabladeUsuarios() {
    const usuarios = useSelector((state) => state.usuarios)
    const empresas = useSelector((state) => state.empresas)

    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmpresas())
        //dispatch(getUsuarios())
    }, [])

    useEffect(() => {
        if(  value !== 99){
        dispatch(getUsuariosFiltro(value))
        
        }
    }, [value])


    const handleValue = (e) => {
        if (e.target.value != 99) {

            console.log(e.target.value)
            setValue(e.target.value)
        }
    }

    return (
        <div className='usertable'>

            <h3>Listado de usuarios registrados</h3>
            <label className='label'>

                <select onClick={handleValue}>
                    {
                        empresas.map((item) => {

                            return <option key={Math.random()} name="company" value={`${item['cod-emp']}`}  > {item['nom-emp']} </option>;
                        })
                    }

                </select>
            </label>
            <div className='userInfo'>
                {
                    usuarios.map((item) => {
                        return (<ul key={Math.random()} >
                            <Link to={`/detail/${item.usu}`}>
                                <li>
                                    Empresa:{item.codemp};
                                    Email:{item.usu};

                                </li>
                            </Link>

                        </ul>);
                    })
                }
            </div>
        </div>
    )
}

export default TabladeUsuarios