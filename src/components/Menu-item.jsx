import React from "react";

function MenuItem() {
  return (
    <div className="menu-items">
      <div className="menu-item">
        <div className="menu-item-image">
          <img src="./images/pad-thai.png" alt="food"></img>
        </div>
        <div className="menu-item-text">
          <h3>Pad thai</h3>
          <span>
            Lorem ipsum gaasdgt asku gvg waggku mhxycl psay mxu afkusafk
          </span>
          <div className="menu-item-text-cart">
            <span>
              <b>$4.99</b>
            </span>
            <div className="menu-item-text-cart-i">
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
