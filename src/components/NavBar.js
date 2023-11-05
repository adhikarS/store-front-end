import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order-management">Order Management</Link>
        </li>
        <li>
          <Link to="/live-tracking">Live Tracking</Link>
        </li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
