
import React, { useContext, useEffect } from 'react'
import avatar from "../assets/avatar-icon.png"
import { Link, redirect } from 'react-router-dom'

import { UserContext } from '../components/Layout'

const MenuDropdown = () => {
    
    const { setUserToLocal } = useContext(UserContext)

    function logout(){
        setUserToLocal({})
        localStorage.removeItem("userId")
        redirect("/")
    }

    return (
        <div>
            <img src={avatar} alt="avatar icon for user" width={20} />
            
            <Link 
                to="/"
                onClick={logout}
            >
                    Log out
            </Link>
        </div>
    )
}

export default MenuDropdown