import React from "react";
import MenuItem from "./Menu-item";
import dishes from "../dishes.json";

function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="container-items menu">
          <div className="menu-text">
            <h2>Chef recommends</h2>
          </div>
          <MenuItem dishes={dishes} />
        </div>
      </div>
    </section>
  );
}

export default Menu;
