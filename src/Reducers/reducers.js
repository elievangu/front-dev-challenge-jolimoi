//npm import
import { combineReducers } from 'redux';

//local import
import products from './products';
import query from './query';

const reducers = combineReducers({
  products,
  query
});

export default reducers;