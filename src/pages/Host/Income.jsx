
import React, { useEffect, useState } from "react"
import { getUser } from "../../api"

const Income = () => {
    
    const [ user, setUser ] = useState({})
    const userId = localStorage.getItem("userId")
    // console.log(userId)

    useEffect(() => {
        async function loadUser(userId){
            const data = await getUser(userId)
            setUser(data)
        }
        loadUser(userId)
    }, [])

    // console.log(user)

    return (
        <div className="income-container">
              <h2>Total Income made: </h2>
              <div className="income">
                  <div className="host-van-card">
                    <div className="host-van-details">
                        ${user.income}
                    </div>
                </div>
              </div>
        </div>
    )
}

export default Income
