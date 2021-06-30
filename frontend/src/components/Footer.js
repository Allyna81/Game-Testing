import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
import Logo from './Games/logo.svg';
function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="foot-logo" />
          <NavLink to={"/"} className="nav-link">
                <img src={Logo} alt='Logo GameTesting'></img>
                </NavLink>
            <ul>
              <NavLink to="/privacy" className="foot-item">Privacy Policy</NavLink>
              <NavLink to="/" className="foot-item">Website</NavLink>
              <NavLink to="/contact" className="foot-item">Contact</NavLink>
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
