
import React from "react"

export function showErrorMessage(error){

    return (
        <div className="error" id="error">
            <div>
                <h2>There was an error!</h2>
                <p>{error.message}</p>
            </div>
        </div>
    )
}