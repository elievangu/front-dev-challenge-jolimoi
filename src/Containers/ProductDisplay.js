//nmp import
import { connect } from 'react-redux';

//local import
import { fetchDatas } from '../Actions/index';
import Display from '../Components/Section/Display';

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: 
  }
}
