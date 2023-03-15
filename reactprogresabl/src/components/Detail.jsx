import React, {useDebugValue, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserDetails, cleanComponent } from '../redux/actions/actions'

function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch();
    const usu = useSelector((state)=>state.uDetail)
    

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
    </div>
  )
}

export default Detail