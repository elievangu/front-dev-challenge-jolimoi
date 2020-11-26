//npm import
import React from "react";

//Locale import
import image from "./beauty-products.jpg";

const Header = () => {
  return (
    <div id="header">
      <header>
        <div id="title">
          <h1>This is a page for beauty product search</h1>
        </div>
        <div id="figure">
          <img src={image} alt="beauty products" />
        </div>
      </header>
    </div>
  );
};

export default Header;
