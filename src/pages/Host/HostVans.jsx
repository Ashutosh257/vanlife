
import React from 'react'
import { Link } from "react-router-dom"
import { getHostVans } from '../../api'
import { showErrorMessage } from '../../utils'

const HostVans = () => {

    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const userId = localStorage.getItem("userId")

    React.useEffect(() => {
        async function loadVan(){
            try {
                setLoading(true)
                const data = await getHostVans(userId)
                setVans(data)
            }catch (err){
                setError(err)
            }finally{
                setLoading(false)
            }
          }
  
        loadVan()
    }, [])


    if(error){
        return showErrorMessage(error)
    }

    const allVans = vans.map((van) => {
        return (
            <Link 
                key={van.id}
                to={van.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-card" key={van.id}>
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-van-details">
                        <h3> {van.name} </h3>
                        ${van.price}/day 
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className="host-vans-container">
            <h1> Your listed vans </h1>
            <div>
                { loading ? <h2>Loading...</h2> : <section> {allVans} </section> }
            </div>
        </div>
    )
}

export default HostVans