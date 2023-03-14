import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from "../assets/icons8-logout-rounded-50.png"


function Navbar() {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className='icon' onClick={()=>{navigate("/");}}>
            <img src={logout} alt=" icono salida" />
             
        </div>
    </div>
  )
}

export default Navbar