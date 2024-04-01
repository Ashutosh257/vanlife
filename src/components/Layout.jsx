
import React, { createContext, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export const UserContext = createContext()

const Layout = () => {

    const [ user, setUser ] = useState({})
    const userId = JSON.parse(localStorage.getItem("userId"))

    function setUserToLocal(){
      setUser((prevUser) => {
        return {
          ...prevUser,
          id: userId
        } 
      })
    }

    return (
        <UserContext.Provider value={{ user, setUserToLocal }}>
            <div className="site-wrapper">
                  <Header />
                  <main>
                      <Outlet />
                  </main>
                  <Footer />
            </div>
        </UserContext.Provider>
    )
}

export default Layout