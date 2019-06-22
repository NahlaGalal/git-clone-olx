export default function addUser(state = {}, action) {
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
    case "ADD_REPASSWORD":
      return {
        ...state,
        RePassword: action.text
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
    case "ADD_CATEGORY":
      return {
        ...state,
        Category: action.text
      };
    case "ADD_ITEMNAME":
      return {
        ...state,
        ItemName: action.text
      };
    case "ADD_PRICE":
      return {
        ...state,
        Price: action.text
      };
    case "ADD_QUANTITY":
      return {
        ...state,
        Quantity: action.text
      };
    case "ADD_IMAGE":
      return {
        ...state,
        Image: action.text
      };
    case "ADD_IMAGENAME":
      return {
        ...state,
        ImageName: action.text
      };
    case "ADD_DESCRIPTION":
      return {
        ...state,
        Description: action.text
      };
    default:
      return state;
  }
}
