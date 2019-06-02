import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import cartReducer from './cart';
import authReducer from './auth';

export default combineReducers({
  toastr: toastrReducer,
  cart: cartReducer,
  auth: authReducer
});
