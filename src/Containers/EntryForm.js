//npm import
import { connect } from 'react-redux';

//local import
import Form from '../Components/Section/Form';

import { addQuery, fetchProducts } from '../Actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, input) => {
      e.preventDefault()
      dispatch(addQuery(input.value))
      //console.log(input.value)
      dispatch(fetchProducts(input.value))
    }
    
  }
  
}

const EntryForm = connect(null, mapDispatchToProps)(Form);

export default EntryForm;