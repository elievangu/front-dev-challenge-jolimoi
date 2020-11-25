//npm import
import React from 'react';
import PropTypes from "prop-types";
//local import

//Function to capitalize first letter
const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const ItemProduct = ({ brand, name }) => {
  return (
    <li className="name">
      <span className="brand">{capitalizeFirstLetter(brand)} - </span>
      {capitalizeFirstLetter(name)}
    </li>
  );
};

ItemProduct.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ItemProduct;
