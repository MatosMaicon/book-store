export default function user(state = {}, action) {
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return { ...action.user };
    case 'DEL_CURRENT_USER':
      return {};
    default:
      return state;
  }
}
