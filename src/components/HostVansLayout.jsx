

import React from 'react'
import backArrow  from "../assets/arrow-left.svg"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { getHostVan } from '../api'
import { showErrorMessage } from '../utils'

const HostVansLayout = () => {

    const activeLinkStyle = {
        fontWeight: "600",
        textDecoration : "underline",
        color: "#161616"
    }
    const { id } = useParams()

    const [van, setVan] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect( () => {
        
        async function loadVan(){
            try {
                setLoading(true)
                const data = await getHostVan(id)
                setVan(data)
            }catch (err){
                setError(err)
            }finally{
                setLoading(false)
            }
          }
  
        loadVan()

    } , [id])


    if (loading){
        return <h2>Loading...</h2>
    }

    if(error){
        return showErrorMessage(error)
    }

    return (
        <div className="host-van-detail-container">
            <Link 
                className="goto-previous-page"
                to=".."
                relative="path"
            >
                  <img src={backArrow} alt="arrow to go to previous page" /> 
                  <p> Back to all vans </p>
            </Link>

            <div className="host-vans-layout">

                {   
                    van.name &&
                        <div className="host-van-info">
                            <img src={van.imageUrl} alt="" />
                            <div className="host-van-details">
                                <span className={`host-van-type ${van.type}`}>
                                    {`${van.type.charAt(0).toUpperCase()}${van.type.slice(1)}`}
                                </span>
                                <h2>{van.name}</h2>
                                <b>${van.price}</b>/day
                            </div>
                        </div>
                }
                
                <nav className="host-layout host-detail-layout">
                    <NavLink 
                        to="."
                        style={({isActive}) => isActive ? activeLinkStyle : null} 
                        end
                        >
                        Details
                    </NavLink>
                    <NavLink 
                        to="pricing"
                        style={({isActive}) => isActive ? activeLinkStyle : null} 
                        >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to="photos"
                        style={({isActive}) => isActive ? activeLinkStyle : null} 
                        >
                        Photos
                    </NavLink>
                </nav>
                
                <Outlet context={{ van }} />
            </div>
        </div>
    )
}

export default HostVansLayout