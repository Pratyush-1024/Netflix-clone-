import React, { useEffect, useState } from 'react'
import NetflixLogo from './Netflix-Brand-Logo.png';
import NetflixProfile from './Netflix_profile.jpg';
import './Navbar.css'

function Navbar() {

  const [show,handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    });
    return (()=>{
        window.removeEventListener("scroll");
    });
  },[]);
  return (
    <div className={`navbar ${show && "nav-black"}`}>
      
            <img className='navbar-logo' src={NetflixLogo} alt='2'/>
            <img src={NetflixProfile} alt='3' className='navbar-profile'/>
      
    </div>
  )
}

export default Navbar