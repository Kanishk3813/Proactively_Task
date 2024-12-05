import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    document.body.style.overflow = !showMobileMenu ? 'hidden' : 'auto';
  };

  const mobileLinks = [
    { title: 'Doctor', type: 'auth', login: true, signup: true },
    { title: 'Patients', type: 'auth', login: true, signup: true },
    { title: 'Doctors', type: 'link' },
    { title: 'List your practice', type: 'link' },
    { title: 'For Employers', type: 'link' },
    { title: 'Courses', type: 'link' },
    { title: 'Books', type: 'link' },
    { title: 'Speakers', type: 'link' }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-container">
          <img src="/logo.png" alt="ProVital" className="logo" />
          </div>
          <span className="brand-name">ProVital</span>
        </div>

        <div className="navbar-right">
          <div className={`navbar-links desktop-links`}>
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
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
          >
            {showMobileMenu ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${showMobileMenu ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {mobileLinks.map((link, index) => (
            <div key={index} className="mobile-menu-item">
              {link.type === 'auth' ? (
                <>
                  <h3>{link.title}</h3>
                  <div className="mobile-auth-links">
                    {link.login && <a href="#">Login</a>}
                    {link.login && link.signup && <span>|</span>}
                    {link.signup && <a href="#">Sign up</a>}
                  </div>
                </>
              ) : (
                <a href="#" className="mobile-link">{link.title}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;