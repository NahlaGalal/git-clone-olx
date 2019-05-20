export default function addUser(state = {Name: "", User: "", Mail: "", Phone: "", Password: "", City: ""}, action) {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        Name: action.text
      };
    case "ADD_USER":
      return {
        ...state,
        User: action.text
      };
    case "ADD_MAIL":
      return {
        ...state,
        Mail: action.text
      };
    case "ADD_PASSWORD":
      return {
        ...state,
        Password: action.text
      };
    case "ADD_PHONE":
      return {
        ...state,
        Phone: action.text
      };
    case "ADD_CITY":
      return {
        ...state,
        City: action.text
      };
    default:
      return state;
  }
}
