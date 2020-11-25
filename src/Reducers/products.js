//npm import

//local import

const initialState = [{
    id: 1737,
    brand: "Tchoko",
    name: "Mafuta",
    ingredient_list: [
        "mafuta ya mbila"
    ]
}]

const products = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products

    default:
      return state
  }
}

export default products;
