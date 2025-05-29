import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div><Navbar/></div>
        <div><Outlet></Outlet></div>
    </div>
  )
}

export default Start