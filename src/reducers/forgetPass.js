const forgetPassword = (state = "", action) => {
  switch (action.type) {
    case "FORGET_PASSWORD":
      return action.validity;
    default:
      return state;
  }
}

export default forgetPassword;