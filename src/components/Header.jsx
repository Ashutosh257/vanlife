
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import MenuDropdown from "./MenuDropdown"


const Header = () => {
    const userId = localStorage.getItem("userId")
    // console.log(role)

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
                    userId ? ( <MenuDropdown />) : 
                    (
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