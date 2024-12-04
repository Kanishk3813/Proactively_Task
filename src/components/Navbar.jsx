import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="ProVital" className="logo" />
      </div>
      <div className="navbar-middle">
        <a href="#">List your practice</a>
        <a href="#">For Employers</a>
        <a href="#">Courses</a>
        <a href="#">Books</a>
        <a href="#">Speakers</a>
        <a href="#">Doctors</a>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;