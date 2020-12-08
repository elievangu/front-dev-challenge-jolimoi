//npm import
import React from "react";
import PropTypes from "prop-types";

//local import
import ItemProduct from "./ItemProduct";
//import Loading from "../Loading/Loading";

const Display = ({ products }) => {
  const productsList = products.map((product) => (
    <ItemProduct key={product.id} brand={product.brand} name={product.name} />
  ));
  return (
    <div id="display">
      <main>
        <ul>{productsList}</ul>
      </main>
    </div>
  );
};

Display.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
export default Display;
