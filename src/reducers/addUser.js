const addUser = (state = "", action) => {
  switch (action.type) {
    case "ADD_USER_SUCCESSED":
      return "Success";
    case "ADD_USER_FAILED":
      return "Failed";
    default:
      return state;
  }
}

export default addUser;