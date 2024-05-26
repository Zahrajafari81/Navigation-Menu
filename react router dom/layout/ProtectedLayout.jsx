import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedLayout = () => {
    // const currentuser=localStorage.getItem("loggedInfo");
  return (
   <div>
     {/* {
        currentuser  ===  null ? <Navigate to="/login" /> : null
    } */}
    <h1> protected layout</h1>
    <Outlet />
   </div>
  )
}

export default ProtectedLayout