import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Logout.css'

const Logout = () => {

    const [user_email, setuser_email] = useState("user");

    let navigate = useNavigate();
    
    useEffect(()=>{
        setuser_email(localStorage.getItem('user-email'));
      })


    const logout = () =>{
        localStorage.clear();
        navigate('/')
    }


    return (
        <div>
            <div className='logout'>
                <div className="innerlogout">
                    <Link className='content' to="/profile"><img src="https://www.62icon.com/client/assets/img/like-icon.svg" alt="sdfgh" /></Link>
                    <p className='details'>{user_email}</p>
                    <p className='details' onClick={logout}><Link>Logout</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Logout