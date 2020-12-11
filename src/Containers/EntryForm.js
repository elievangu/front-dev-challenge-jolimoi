//npm import
import { connect } from 'react-redux';

//local import
import Form from '../Components/Section/Form';

import { addQuery, fetchProducts, errorQuery } from '../Actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, input) => {
      e.preventDefault()
      dispatch(addQuery(input.value))
      //console.log(input.value)
      dispatch(fetchProducts(input.value))
    },
    handleMessage: (e) => {
      e.preventDefault()
      dispatch(errorQuery())
      alert("This field should not be empty !")
      
    }
    
  }
  
}

const EntryForm = connect(null, mapDispatchToProps)(Form);

export default EntryForm;