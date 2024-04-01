

import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {

    const { van } = useOutletContext()
    
    const styling = {
        margin: "1em"
    }
    return (
      <p style={styling}>
          <b>
              ${van.price}.00
          </b>
            /day
      </p>
    )
}

export default HostVanPricing