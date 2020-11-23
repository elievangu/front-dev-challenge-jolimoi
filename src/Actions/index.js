export const fetchDatas = (datas) => {
  return {
    type: 'FETCH_DATAS',
    datas

  }
}

export const addQuery = (query) => {
  return {
    type: 'ADD_QUERY',
    query
  }
}