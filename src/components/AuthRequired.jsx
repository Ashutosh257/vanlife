

import React, { useState, useEffect } from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    
    const userId = localStorage.getItem("userId")
    const location = useLocation();
    const authenticated = userId ? true : false

    if (!authenticated) {
        return (
            <Navigate 
                to="/login" 
                state={{message: "You must log in first!", from: location }} 
                replace
            />)
    }
    return <Outlet />
}