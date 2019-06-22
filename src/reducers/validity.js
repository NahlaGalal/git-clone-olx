export default function validity (state = {}, action){
  switch (action.type){
    case "VALID_SIGNUP":
      return {
        validity: action.validity,
        error: action.error
      }
    case "VALID_ITEM_ADDED":
      return {validity: action.validity};
    case "RESET_VALIDATION":
      return {};
    default:
      return state
  }
}