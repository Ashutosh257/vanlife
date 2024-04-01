

import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="page-not-found">
        <h1> Sorry, the page you were looking for was not found. </h1>
        <Link to="/" className="btn-not-found">Return to home page</Link>
    </div>
  )
}

export default PageNotFound