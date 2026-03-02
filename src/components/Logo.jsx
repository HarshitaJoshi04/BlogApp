import React from 'react'
import logo from "../assets/logo.png"
const Logo = () => {
  return (
    <div className="h-16 w-16 ">
      <img className="object-cover rounded-full" src={logo}></img>
    </div>
  )
}

export default Logo