import {combineReducers} from 'redux';
import inputData from './inputData';
import validity from './validity';
import joinUser from './joinUser';
import isLoading from './isLoading';
import items from './items';
import forgetPass from './forgetPass';
import profileData from './profileData';
import itemId from './itemId';
import itemData from './getItem';
import itemDeleted from './deleteItem';

const rootReducer = combineReducers({
  inputData,
  validity,
  joinUser,
  isLoading,
  items,
  forgetPass,
  profileData,
  itemId,
  itemData,
  itemDeleted
});

export default rootReducer;