//npm import
import PropTypes from "prop-types";
//local import

//Function to capitalize first letter
const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const ItemProduct = ({ products }) => {
  return products.map((product) => (
    <li key={product.id} className="name">
      <span className="brand">{capitalizeFirstLetter(product.brand)} - </span>
      {capitalizeFirstLetter(product.name)}
    </li>
  ));
};

ItemProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemProduct;
