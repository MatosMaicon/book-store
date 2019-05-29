import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import cartReducer from './cart';
import userReducer from './user';

export default combineReducers({
  toastr: toastrReducer,
  cart: cartReducer,
  user: userReducer
});
