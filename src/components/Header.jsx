
import { Link, NavLink } from "react-router-dom"

import React from 'react'
import MenuDropdown from "./MenuDropdown"
import { getUser } from "../api"


const Header = () => {
    const userId = localStorage.getItem("userId")
    console.log(userId)

    let role = "user"

    if(userId){
        role = getUser(userId)
        console.log("logged in")
    }

    return (
      <header>
        <Link className="logo" to="/">
          #VANLIFE
        </Link>
            <nav>
                <NavLink 
                    to="host"
                    className={({isActive}) => isActive ? "active-link" : null} 
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    className={({isActive}) => isActive ? "active-link" : null} 
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    className={({isActive}) => isActive ? "active-link" : null} 
                >
                    Vans
                </NavLink>
                {
                    userId ? (
                        // <Link 
                        //     className={({isActive}) => isActive ? "active-link" : null} 
                        // >
                            <MenuDropdown />
                        // </Link>
                    ) : (
                        <NavLink 
                            to="login"
                            className={({isActive}) => isActive ? "active-link" : null} 
                        >
                            Login
                        </NavLink>
                    )
                }
            </nav>
      </header>
    )
}


export default Header