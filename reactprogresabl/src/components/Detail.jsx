import React, {useDebugValue, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserDetails, cleanComponent } from '../redux/actions/actions'

function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch();
    const usu = useSelector((state)=>state.uDetail)
    const navigate = useNavigate();

    useEffect(() => {
        
      dispatch(getUserDetails(id));
    
       return () => {
         dispatch(cleanComponent())
       }
    }, [id])
    

  return (
    <div className='detail'>
        <p>{`Codigo de empresa: ${usu.codemp}`}</p>
        <p>{`Correo electronico: ${usu.usu}`}</p>
        <p>{`Contraseña: ${usu.psw}`}</p>
        <button onClick={()=> navigate("/Home")}>HOME</button>
    </div>
  )
}

export default Detail