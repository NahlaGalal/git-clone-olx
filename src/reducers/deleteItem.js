const itemDeleted = (state = "", action) => {
  switch (action.type) {
    case "DELETE_ITEM_SUCCESSED":
      return "Success";
    case "DELETE_ITEM_FAILED":
      return "Failed";
    default:
      return state;
  }
}

export default itemDeleted;