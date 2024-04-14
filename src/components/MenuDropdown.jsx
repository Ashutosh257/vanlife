
import React from 'react'
import avatar from "../assets/avatar-icon.png"
import { Link, redirect } from 'react-router-dom'


const MenuDropdown = () => {
    
    function logout(){
        localStorage.removeItem("userId")
        window.location.reload()
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