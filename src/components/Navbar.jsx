import React from 'react'
import '../css/Navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";

import logo from '../images/logoone.png';



const Navbar = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate('/home');
    }


  return (
    <header className="full">
      <header className="navbar">
        <img src={logo} alt="logo" className="logo" onClick={routeChange} />
          <Link to="/" className="arconix">Arconix</Link>
          <Link to="/dashboard" className="Link">Commands</Link>
          <Link to="/" className="Link">Help</Link>
          <Link to="/" className="Link">Status</Link>
          <Link to="/" className="Premium">Get Premium</Link>
      </header>
    </header>
  )
}

export default Navbar

