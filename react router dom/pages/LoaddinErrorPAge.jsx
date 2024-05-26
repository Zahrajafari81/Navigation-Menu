import React from 'react'
import { useRouteError } from 'react-router-dom'

const LoaddinErrorPAge = () => {
     const error=useRouteError()
  return (
    <div>
    <h2> Error !!!!!</h2>
    <h3>{error.message}</h3>
    </div>
  )
}

export default LoaddinErrorPAge