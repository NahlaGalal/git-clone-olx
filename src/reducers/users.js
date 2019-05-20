import addUser from './addUser';

export default function users (state = [], action){
  switch (action.type){
    case "ADD_FIELD":
      const userAction = {
        type: action.field,
        text: action.text
      }
      // addUser(state, userAction);
      return state
        // ...state, 
      ;
    default:
      return state;
  }
}