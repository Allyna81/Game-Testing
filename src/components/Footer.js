import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="foot-logo" />
            <ul>
              <NavLink to="/privacy" className="foot-item">Privacy Policy</NavLink>
              <NavLink to="/" className="foot-item">Website</NavLink>
              <NavLink to="/about" className="foot-item">About Us</NavLink>
            </ul>
          <div className="row">
            <p className="foot-copyright">Game Testing Interactive Entertainment GT., &copy;{new Date().getFullYear()} </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
