import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Category = () => {
  const MyStyle={
    color:"red"
  }
  return (
    <div>

        <NavLink style={MyStyle} to="/category/aghsati">aghsati</NavLink>|
        <Link to="/category/saremah">saremah</Link>
        <Outlet />
    </div>
  )
}

export default Category