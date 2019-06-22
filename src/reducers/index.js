import {combineReducers} from 'redux';
import inputData from './inputData';
import validity from './validity';
import joinUser from './joinUser';
import isLoading from './isLoading';
import items from './items';
import forgetPass from './forgetPass';
import profileData from './profileData';
import itemId from './itemId';

const rootReducer = combineReducers({
  inputData,
  validity,
  joinUser,
  isLoading,
  items,
  forgetPass,
  profileData,
  itemId
});

export default rootReducer;