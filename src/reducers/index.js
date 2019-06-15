import {combineReducers} from 'redux';
import Users from './users';
import validity from './validity';
import addUser from './addUser';
import isLoading from './isLoading';

const rootReducer = combineReducers({
  Users,
  validity,
  addUser,
  isLoading
});

export default rootReducer;