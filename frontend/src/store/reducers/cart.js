export default function cart(state = [], action) {

  switch (action.type) {
    case 'ADD_PRODUCT_CART':
      if (state.includes(action.product)) {
        return state
      }
      return [ ...state, action.product ]
    default:
      return state
  }

}
