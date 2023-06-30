import React from "react";

function Nav() {
  return (
    <section id="navbar">
        <div className="navbar-main">
          <span className="navbar-logo">
            <span className="navbar-logo-first">Asian</span>
            <span className="navbar-logo-second">Food</span>
          </span>
          <nav className="navbar-nav">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="navbar-socials">
            <div className="navbar-socials-item">
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div className="navbar-socials-item">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Nav;
