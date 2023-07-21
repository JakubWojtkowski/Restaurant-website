import React, { useState } from "react";

function Nav() {
  const [iconClass, setIconClass] = useState("fa-solid fa-bars-staggered");

  return (
    <section id="navbar">
      <div className="navbar-main">
        <span className="navbar-logo">
          <span className="navbar-logo-first">Thai</span>
          <span className="navbar-logo-second">Food</span>
        </span>
        <nav className="navbar-nav">
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
          <button
            className="toggle-btn"
            onClick={(e) => {
              const dropDownMenu = document.querySelector(".dropdown-menu");
              dropDownMenu.classList.toggle("open");

              const isOpen = dropDownMenu.classList.contains("open");

              isOpen
                ? setIconClass("fa-solid fa-xmark")
                : setIconClass("fa-solid fa-bars-staggered");
            }}
          >
            <i class={iconClass}></i>
          </button>

          <div className="dropdown-menu">
          <ul
            className="dropdown-menu-links"
            onClick={() => {
              const dropDownMenu = document.querySelector(".dropdown-menu");
              dropDownMenu.classList.toggle("open");
              dropDownMenu.classList.toggle("closed");

              const isClosed = dropDownMenu.classList.contains("closed");

              isClosed
                ? setIconClass("fa-solid fa-bars-staggered")
                : setIconClass("fa-solid fa-xmark");
              dropDownMenu.classList.toggle("closed");
            }}
          >
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#about">Menu</a>
            </li>
            <li>
              <a href="#skills">Contact</a>
            </li>
          
          </ul>
        </div>
        </nav>

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
    </section>
  );
}

export default Nav;
