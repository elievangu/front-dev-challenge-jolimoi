//npm import
import { connect } from 'react-redux';

//local import
import Form from '../Components/Section/Form';

import { addQuery } from '../Actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: e => {
      e.preventDefault()
      dispatch(addQuery(e.value))
    }
  }
}

const EntryForm = connect(null, mapDispatchToProps)(Form);

export default EntryForm;