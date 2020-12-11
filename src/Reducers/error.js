//npm import

//local import

const initialState = { errorQuery: false, errorStatus: "" };

const error = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR_QUERY':
      return Object.assign({}, state, {
        errorQuery: true
      });
    case 'ERROR_STATUS':
      return Object.assign({}, state, {
        errorStatus: action.error
      });
    case 'REQUEST_PRODUCTS':
      return Object.assign({}, state, {
        errorQuery: false
      });
    case 'RECEIVE_PRODUCTS':
      return Object.assign({}, state, {
        errorStatus: ""
      });
    default:
      return state;
  }
};

export default error;
