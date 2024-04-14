
import backArrow  from "../../assets/arrow-left.svg"
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, redirect } from 'react-router-dom';
import { getVan } from "../../api";
import { showErrorMessage } from "../../utils";


const VanDetail = () => {

    const location = useLocation()
    const params = useParams()

    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const userId = localStorage.getItem("userId")

    useEffect(() => {
        async function loadVan(){
            try {
                const data = await getVan(params.id)
                setVan(data)
            }catch (err) {
                setError(err)
            }finally{
                setLoading(false)
            }
        }
  
        loadVan()
    }, [params.id])

    function handleRentCar(){
        console.log(userId)
        if(userId){
            alert("booked!")
        }else{
            console.log("redirect")
            redirect("/login")
        }
    }

    // console.log(location.state)
    const search = location.state?.search || ""
    const backToText = location.state?.type || "all"

    if (error) {
        return showErrorMessage(error)
    }

    return (
        <div className="van-detail-container">
            <Link 
                className="goto-previous-page"
                to={`..${search}`}
                relative="path"
            >
                  <img src={backArrow} alt="arrow to go to previous page" /> 
                  <p> Back to {backToText} vans </p>
            </Link>

            <div className="van-detail">
                {
                    loading ? <h2>Loading...</h2>
                        : (
                            <>
                                <img src={van.imageUrl} alt={van.name} />
                                <div className="van-body-text">
                                    <span className={`van-type ${van.type}`}>
                                        {`${van.type.charAt(0).toUpperCase()}${van.type.slice(1)}`}
                                    </span>
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
                                    <p>
                                        {van.description}
                                    </p>
                                    <Link 
                                        // to={userId ? alert("booked!") : "login"}
                                        className="btn btn-rent-van"
                                    >
                                            Rent this van
                                    </Link>
                                    <h3>
                                        Renting a van functionality is still ongoing!
                                    </h3>
                                </div>
                            </>
                        ) 
                }
            </div>
        </div>
    )
}

export default VanDetail