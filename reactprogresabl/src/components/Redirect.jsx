import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import imagenerror from '../assets/error404.gif'

function Redirect() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")

        }, 5000);


    }, [])




    return (
        <div>
            
            <img className='alerta' src={imagenerror} alt="" />
            
        </div>
    )
}

export default Redirect