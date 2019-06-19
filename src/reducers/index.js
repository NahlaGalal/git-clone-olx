import {combineReducers} from 'redux';
import userData from './userData';
import validity from './validity';
import joinUser from './joinUser';
import isLoading from './isLoading';
import items from './items';
import forgetPass from './forgetPass';
import profileData from './profileData';

const rootReducer = combineReducers({
  userData,
  validity,
  joinUser,
  isLoading,
  items,
  forgetPass,
  profileData
});

export default rootReducer;