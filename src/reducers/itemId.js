const itemId = (state="", action) => {
  switch (action.type) {
    case "ADD_ITEM_SUCCESSED":
      return action.result;
    case "ADD_ITEM_FAILED":
      return action.result;
    case "RESET_ADD_ITEM":
      return "";
    default:
      return state;
  }
}

export default itemId;