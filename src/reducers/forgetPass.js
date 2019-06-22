const forgetPassword = (state = "", action) => {
  switch (action.type) {
    case "FORGET_PASSWORD":
      return action.validity;
    case "RESET_MAIL":
      return "";
    default:
      return state;
  }
}

export default forgetPassword;