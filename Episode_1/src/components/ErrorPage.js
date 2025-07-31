import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div>
      <h1>No page found</h1>
      <h2>{error.status}</h2>
    </div>
  )
}

export default ErrorPage

