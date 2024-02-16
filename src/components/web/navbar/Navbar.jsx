import React from 'react'
import style from '../navbar/Navbar.module.css'
export default function Navbar() {
  return (
    <nav className="navbar container navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src='../../../../img/logoLogin.png' alt='logo' className={`${style.logo}`}/>
    <p className={`${style.logoTitle}`}>AQ Estate</p>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
        <li className="nav-item">
          <a className={`${style.navLink}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navLink}`} href="#">Houses</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navLink}`} href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className={`${style.navLink}`} href="#">About Us</a>
        </li>
        <li className="nav-item">
          <span className={`${style.userName}`} href="#">User Name</span>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
