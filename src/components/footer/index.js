import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="foot-logo" />
          <nav className="foot-link">
            <ul>
              <Link to="/privacy"><li className="foot-item">Privacy Policy</li></Link>
              <Link to="/website"><li className="foot-item">Website</li></Link>
              <Link to="/about"><li className="foot-item">About Us</li></Link>
            </ul>
          </nav>
          <div className="row">
            <p className="foot-copyright">Game Testing Interactive Entertainment GT., &copy;{new Date().getFullYear()} </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
