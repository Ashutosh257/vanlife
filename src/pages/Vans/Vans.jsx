
import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'
import { showErrorMessage } from '../../utils'

const Vans = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadVans(){
          try {
              setLoading(true)
              const data = await getVans()
              setVans(data)
          } catch (err){
              setError(err)
          }finally{
              setLoading(false)
          }
        }

        loadVans()
    }, [])

    const filters = searchParams.get("type")

    const filteredVans = filters ?
                          vans.filter((van) => van.type.toLowerCase() === filters.toLowerCase()) 
                          : vans

    const allVans = filteredVans.map(van => {
        return (
              <div className="van-card" key={van.id}>
                <Link
                    state={{ 
                        search: `?${searchParams.toString()}`,
                        type: filters
                    }}
                    to={van.id}
                >
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="van-details">
                        <div className="van-text">
                            <h2 className="van-name">
                              {van.name}
                            </h2> 
                            <p className="van-price">
                              <b>
                                ${van.price}
                              </b>
                              /day
                            </p>
                        </div>
                        <span className={`van-type ${van.type}`}>
                          {`${van.type.charAt(0).toUpperCase()}${van.type.slice(1)}`}
                        </span>
                    </div>
                </Link>
              </div>
          )
    })


    if (error) {
        return showErrorMessage(error)
    }


    return (
      <div className="vans-container">
          <h1>Explore our van options</h1>
          {
            loading ? <h2>Loading...</h2> :
            (
              <>
                <div className="filters">
                    <button 
                        onClick={() => setSearchParams({type: "simple"})}
                        className={`van-type-btn simple-filter ${filters === "simple" && "selected"}`}>
                        Simple
                    </button>
                    
                    <button 
                        onClick={() => setSearchParams({type: "luxury"})}
                        className={`van-type-btn luxury-filter ${filters === "luxury" && "selected"}`}
                    >
                        Luxury
                    </button>
                    
                    <button 
                        onClick={() => setSearchParams({type: "rugged"})}
                        className={`van-type-btn rugged-filter ${filters === "rugged" && "selected"}`}>
                        Rugged
                    </button>
                    
                    {
                      filters && (
                            <button 
                                onClick={() => setSearchParams({})}
                                className={`van-type-btn clear-filter`}
                            >
                                  Clear Filters
                            </button>
                        )
                    }

                </div>
                <div className="vans">
                  {allVans}
                </div>
              </>
            )
          }
      </div>
    )
}

export default Vans