import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import cart from './cart';

export default combineReducers({
  toastr: toastrReducer,
  cart
});
