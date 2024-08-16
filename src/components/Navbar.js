import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { AuthContext } from '../auth/Auth'; // Import the AuthContext

const Navbar = () => {
  const { loggedIn, user } = useContext(AuthContext); // Get the auth status and user info

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-brand"><b>MediConnect</b></a>
      </div>
      <div className="navbar-center">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/make-appointment">Make Appointment</Link></li>
          <li><Link to="/home">About</Link></li>
          {loggedIn ? (
            // If logged in, show the profile icon
            <li>
              <Link to="/profile">
                <img src={user?.avatar} alt="Profile" className="profile-icon" />
              </Link>
            </li>
          ) : (
            // If not logged in, show Login and SignUp links
            <>
              <li><Link to="/auth/login">Login</Link></li>
              <li><Link to="/auth/SignUp">SignUp</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
