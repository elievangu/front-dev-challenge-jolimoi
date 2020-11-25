//npm import
import axios from 'axios';

//local import

export const requestProducts = (query) => {
  return {
    type: 'REQUEST_PRODUCTS',
    query
  }
}

export const receiveProducts = (datas) => {
  return {
    type: 'RECEIVE_PRODUCTS',
    products: datas

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
    return axios.get(`https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com/product?q=${query}`)
      .then(
        json => {
          const { data } = json;
          //json object slice to display only 4 items
          const slicedData = [];
          for (var i=0; i<4; i++)
            slicedData[i] = data[i];
            dispatch(receiveProducts(slicedData));
          //console.log(slicedDatas)
        }
      )
  }
}