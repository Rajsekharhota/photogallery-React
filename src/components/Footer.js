import React from "react";
import ghostLogo from "../assets/ghost_logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={ghostLogo} alt="ghost cms" width="100px" height="60px" />
      </div>
      <div className="footer-items">
        <ul>
          <li>About</li>
          <li>Explore</li>
          <li>Careers</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="other-footer-items">
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Contact</li>
          <li>Ghost Foundation &copy; 2023</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
