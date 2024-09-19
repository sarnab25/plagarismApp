import React, { useState } from 'react'
import './Navbar.css'
import {FaGavel} from "react-icons/fa"
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function Navbar() {
const navigate= useNavigate()
    const [show, setshow]=useState(false)
const handleHome=()=>
{
navigate("/")
}
const handleFeature =()=>
{
    navigate("/features")
}

const handleContact =()=> {
    alert("Contacts are mentioned below")
}

    const toggleBurger =()=>
    {
        setshow(!show)
    }
  return (
    <>
    <div className={`container1 ${show? "open":" "}`}>
        
        <div className="container2">
            <div className="logo-container">
                
                <div className="logo"><FaGavel/></div>
            </div>

            <div className="burger" onClick={toggleBurger}><FaBars/> </div>

            <ul className="nav-heading">
                
                    <li onClick={handleHome}>Home</li>
                    <li onClick={handleFeature}>Features</li>
                    <li onClick={handleContact}>Contacts</li>
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
