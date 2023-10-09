import React from "react";
import { Link } from "react-router-dom";
import ghostLogo from "../assets/ghost_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={ghostLogo} alt="ghost cms" width="200px" height="90px" />
      </div>
      <div className="brand-container">
        <p className="brand">GHOST CMS</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
