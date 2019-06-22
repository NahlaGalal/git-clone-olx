const itemId = (state="", action) => {
  switch (action.type) {
    case "ADD_ITEM_SUCCESSED":
      return action.id;
    case "ADD_ITEM_FAILED":
      return "Error";
    case "RESET_ADD_ITEM":
      return "";
    default:
      return state;
  }
}

export default itemId;