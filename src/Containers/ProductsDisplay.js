//nmp import
import { connect } from 'react-redux';

//local import
import Display from '../Components/Section/Display';

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const ProductsDisplay = connect(
  mapStateToProps,
  null
)(Display);

export default ProductsDisplay;