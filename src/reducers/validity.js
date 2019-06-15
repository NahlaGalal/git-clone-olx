export default function validity (state = {}, action){
  switch (action.type){
    case "VALID_SIGNUP":
      return {
        validity: action.validity,
        error: action.error
      }
    default:
      return state
  }
}