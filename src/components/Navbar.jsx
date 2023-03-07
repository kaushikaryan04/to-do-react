import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <div className="main-nav">
        <div className="nav-name">
        <h3>
            Hello , Name
        </h3>
        </div>
        <div className="nav-heading">
            <h2><Link to = "/">To DO List</Link></h2>
        </div>
        <div className="btns-nav">  
        <button className = "userDetail">
                <Link to=  "/detail">User Detail</Link>
        </button>
        <button className = "login">
            <Link to = "/login">Login</Link>
        </button>
        <button className = "signUp">
            <Link to = "/signup">Sign Up</Link>
        </button>
        </div>
    </div>
    
    </>
  )
}
