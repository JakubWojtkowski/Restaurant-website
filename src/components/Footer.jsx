import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-items">
          <div className="logo">
            <span className="navbar-logo-footer">
              <span className="navbar-logo-first">Thai</span>
              <span className="navbar-logo-second">Food</span>
            </span>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="navbar-socials">
            <div className="navbar-socials-item">
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="navbar-socials-item">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
