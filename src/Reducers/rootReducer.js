//npm import
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//local import
import products from './products';
import query from './query';

const RootReducer = history => combineReducers({
  router: connectRouter(history),
  products,
  query
})

export default RootReducer;