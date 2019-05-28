export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCT_CART':
      const duplicate = state.filter(product => product.id === action.product.id);
      if (!!duplicate.length) {
        const nproduct = duplicate[0];
        const newstate = state.filter(product => product.id !== action.product.id);

        nproduct.qty += 1;
        return [ ...newstate, nproduct ];
      }
      return [ ...state, action.product ];
    case 'DEL_PRODUCT_CART':
      const newstate = state.filter(product => product.id !== action.id);
      return [ ...newstate ];
    case 'DEL_ALL_PRODUCTS':
      return []; 
    default:
      return state;
  }
}
