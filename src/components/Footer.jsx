import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container-items">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
