import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import data from "../utilities/data.json"
import { getLoged, getEmpresas, getUsuarios, getUsuariosFiltro } from '../redux/actions/actions';
function TabladeUsuarios() {
    const usuarios = useSelector((state)=>state.usuarios)
    const empresas = useSelector((state)=>state.empresas)
    
    const [value, setValue] = useState("pepe");
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getEmpresas())
        //dispatch(getUsuarios())
    },[usuarios])   
    
    const handleValue = (e) => {
        setValue(e.target.value)     
        dispatch(getUsuariosFiltro(value))
    }
   
    return (
        <div className='usertable'>
             
            <h3>Listado de usuarios registrados</h3>
            <label>
               
                <select onClick={handleValue}>
                    <option value="0">Select</option>
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