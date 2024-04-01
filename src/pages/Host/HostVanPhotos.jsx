
import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {

    const { van } = useOutletContext()

    const imageStyle = {
        margin : "1em",
        width: "100px"
    }

    return (
        <div>
            <img src={van.imageUrl} alt={`Image for ${van.name}`} style={imageStyle} />
        </div>
    )
}

export default HostVanPhotos