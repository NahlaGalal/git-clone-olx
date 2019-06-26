const itemId = (state="", action) => {
  switch (action.type) {
    case "ADD_ITEM_SUCCESSED":
    case "UPDATE_ITEM_SUCCESSED":
      return action.result;
    case "ADD_ITEM_FAILED":
    case "UPDATE_ITEM_FAILED":
      return action.result;
    case "RESET_ADD_ITEM":
    case "RESET_UPDATE_ITEM":
      return "";
    default:
      return state;
  }
}

export default itemId;