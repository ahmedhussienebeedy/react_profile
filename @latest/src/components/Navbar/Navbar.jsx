import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark cursor navh fixed-top">
  <div className="container-fluid  p-1">
    <NavLink className="navbar-brand fw-bold fs-5 ms-3" to="">Start Framework</NavLink>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-1 mb-lg-0 me-5 fs-6">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="portifolio">Portifolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="contacts">Contacts</NavLink>
        </li>
        
       
      
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
