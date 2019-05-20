import {combineReducers} from 'redux';
import Users from './users';
import userAdded from './addUser';
import validity from './validity';

const rootReducer = combineReducers({
  Users,
  userAdded,
  validity
});

export default rootReducer;