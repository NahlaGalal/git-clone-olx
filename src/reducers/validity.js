export default function validity (state = {}, action){
  switch (action.type){
    case "VALID_SIGNUP":
      return action.validity
    default:
      return false
  }
}