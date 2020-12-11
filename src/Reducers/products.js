//npm import

//local import

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUERY":
      return initialState;
    case 'ERROR_MESSAGE':
      return initialState;
    case "RECEIVE_PRODUCTS":
      return action.products;

    default:
      return state;
  }
};

export default products;
