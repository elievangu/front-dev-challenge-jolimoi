//npm import
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//local import
import products from './products';
import query from './query';
import  error from './error';

const RootReducer = history => combineReducers({
  router: connectRouter(history),
  products,
  query,
  error
})

export default RootReducer;