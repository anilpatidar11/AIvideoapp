import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token"); 

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavLink to="/" className="navbar-brand">Indvibe</NavLink>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto d-flex justify-content-evenly w-50">
            <li className="nav-item"><NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/features" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Features</NavLink></li>
            <li className="nav-item"><NavLink to="/plans" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Plans</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Contact</NavLink></li>
          </ul>

          <ul className="navbar-nav">
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-danger ms-lg-3" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Login</NavLink>
                </li>
                <li className="nav-item ms-lg-5">
                  <NavLink to="/register" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
