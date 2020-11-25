const initialState = ""

const query = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_QUERY':
      return action.query
      default:
        return state
  }
}

export default query;