const joinUser = (state = "", action) => {
  switch (action.type) {
    case "ADD_USER_SUCCESSED":
    case "LOGIN_SUCCESSED":
      return action.uid;
    case "ADD_USER_FAILED":
    case "LOGIN_FAILED":
      return "Failed";
    case "RESET_LOGIN":
    case "RESET_SIGNUP":
      return "";
    default:
      return state;
  }
}

export default joinUser;