//npm import
import React from "react";
import PropTypes from "prop-types";
import { usePromiseTracker } from "react-promise-tracker";

//local import
import ItemProduct from "./ItemProduct";
import Loading from "../Loading/Loading";
//import { store } from '../../index.js';

const Display = ({ products }) => {
  
  const productsList = products.map((product) => (
    <ItemProduct key={product.id} brand={product.brand} name={product.name} />
  ));
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div id="display">
      <main>
        {promiseInProgress ? (
          <Loading type={"bubbles"} color={"#ffffff"} />
        ) : (
          <ul>{productsList}</ul>
        )}
      </main>
    </div>
  );
};

Display.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
export default Display;
