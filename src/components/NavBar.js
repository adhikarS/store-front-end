import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure this path is correct based on where you place the CSS file

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  // This effect toggles a class on the body element when isActive changes
  useEffect(() => {
    const body = document.body;
    if (isActive) {
      body.classList.add('nav-menu-active');
    } else {
      body.classList.remove('nav-menu-active');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      body.classList.remove('nav-menu-active');
    };
  }, [isActive]); // Only re-run the effect if isActive changes

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <button className="hamburger" aria-label="Open navigation menu" onClick={toggleNav}>☰</button>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/order-management">Order Management</Link></li>
        <li><Link to="/live-tracking">Live Tracking</Link></li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
