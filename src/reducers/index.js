import {combineReducers} from 'redux';
import userData from './userData';
import validity from './validity';
import joinUser from './joinUser';
import isLoading from './isLoading';
import items from './items';
import forgetPass from './forgetPass'

const rootReducer = combineReducers({
  userData,
  validity,
  joinUser,
  isLoading,
  items,
  forgetPass
});

export default rootReducer;