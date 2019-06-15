import addField from './addField';

export default function addUserField (state = {}, action){
  switch (action.type){
    case "ADD_FIELD":
      const userAction = {
        type: action.fieldType,
        text: action.text
      };
      const s = addField(state, userAction);
      return {...state, ...s}
    default:
      return state;
  }
}