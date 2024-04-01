
import React from 'react'
import { Outlet, NavLink } from "react-router-dom"

const HostLayout = () => {

    const activeLinkStyle = {
        fontWeight: "600",
        textDecoration : "underline",
        color: "#161616"
    }
    return (
      <>
          <nav className="host-layout">
              <NavLink 
                to="."
                style={({isActive}) => isActive ? activeLinkStyle : null}
                end
              > 
                Dashboard   
              </NavLink>
              <NavLink 
                to="income"
                style={({isActive}) => isActive ? activeLinkStyle : null}
              > 
                Income   
              </NavLink>
              <NavLink 
                to="vans"
                style={({isActive}) => isActive ? activeLinkStyle : null}
              > 
                Vans   
              </NavLink>
              {/* <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? activeLinkStyle : null}
              > 
                Reviews   
              </NavLink> */}
          </nav>
          < Outlet />
      </>
    )
}

export default HostLayout