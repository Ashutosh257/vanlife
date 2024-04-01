
import React from 'react'

import { useOutletContext } from 'react-router-dom'

const HostVanDetail = () => {
    const { van } = useOutletContext()

    return (
        <>
            {
                van.name ? 
                (
                    <div className="host-van-details">
                        <div>
                            <b>Name: </b> {van.name}
                        </div>
                        <div>
                            <b>Category: </b> {`${van.type.charAt(0).toUpperCase()}${van.type.slice(1)}`}
                        </div>
                        <div>
                            <b>Description: </b> {van.description}
                        </div>
                        <div>
                            <b>Visibility: </b> {"Public"}
                        </div>
                    </div>
                ) : <h2>Loading...</h2>
            }
        </>
    )
}


export default HostVanDetail