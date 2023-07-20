import React from "react";
import Fade from 'react-reveal/Fade';

function MenuItem({ dishes }) {
  return (
    <div className="menu-items">
      {dishes.map((dish) => {
        return (
          <Fade bottom>
            <div className="menu-item-card" key={dish.id}>
              <div className="menu-item-image">
                <img src={dish.img} alt="food"></img>
              </div>

              <div className="menu-item-text">
                <h3>{dish.name}</h3>
                <span>{dish.description}</span>
                <div className="menu-item-text-cart">
                  <span>
                    <b>{dish.amount}</b>
                  </span>
                  <div className="menu-item-text-cart-i">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        );
      })}
    </div>
  );
}

export default MenuItem;
