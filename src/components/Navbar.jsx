import React, { useState } from 'react';
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="ProVital" className="logo" />
        <span className="brand-name">ProVital</span>
      </div>

      <div className="navbar-right">
        <div className={`navbar-links ${showMobileMenu ? 'active' : ''}`}>
          <a href="#">List your practice</a>
          <a href="#">For Employers</a>
          <a href="#">Courses</a>
          <a href="#">Books</a>
          <a href="#">Speakers</a>
          <a href="#">Doctors</a>
        </div>
        <div className="login-signup" onClick={() => setShowDropdown(!showDropdown)}>
          Login / Signup
          <IoIosArrowDown className={`dropdown-arrow ${showDropdown ? 'active' : ''}`} />
          {showDropdown && (
            <div className="dropdown-content active">
              <div className="dropdown-section">
                <h3>Doctor</h3>
                <div className="dropdown-links">
                  <a href="#">Login</a>
                  <span>|</span>
                  <a href="#">Sign up</a>
                </div>
              </div>
              <div className="dropdown-section">
                <h3>Patients</h3>
                <div className="dropdown-links">
                  <a href="#">Login</a>
                  <span>|</span>
                  <a href="#">Sign up</a>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <IoIosMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;