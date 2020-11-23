//npm import
import axios from 'axios';

export const requestProducts = (query) => {
  return {
    type: 'REQUEST_PRODUCTS',
    query
  }
}

export const receiveProducts = (json) => {
  return {
    type: 'RECEIVE_PRODUCTS',
    datas: json.data

  }
}

export const addQuery = (query) => {
  return {
    type: 'ADD_QUERY',
    query
  }
}

//asynchronous Actions
export const fetchProducts = (query) => {
  return (dispatch) => {
    dispatch(requestProducts(query));
    return axios.get(`https://skincare-api.herokuapp.com/product?q=${query}`)
      .then(
        json => {
          dispatch(receiveProducts(json))
        }
      )
  }
}